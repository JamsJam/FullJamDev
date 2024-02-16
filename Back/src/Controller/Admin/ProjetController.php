<?php

namespace App\Controller\Admin;

use App\Entity\Projet;
use App\Form\ProjetType;
use Cocur\Slugify\Slugify;
use App\Repository\ProjetRepository;
use App\Service\ImageUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/projet')]
class ProjetController extends AbstractController
{
    #[Route('/', name: 'app_admin_projet_index', methods: ['GET'])]
    public function index(ProjetRepository $projetRepository): Response
    {
        return $this->render('admin/projet/index.html.twig', [
            'projets' => $projetRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_projet_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, ImageUploader $imageUploader): Response
    {
        $projet = new Projet();
        $form = $this->createForm(ProjetType::class, $projet);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            //! ===========================
            //?  setting up the slug
            //! ===========================

            $name = $projet->getTitre();
            $slugify = new Slugify();
            $slug = $slugify->slugify($name);
            $projet->setSlug($slug);

            //! ===========================

            //! ===========================
            //?  setting the images'table
            //! ===========================

            //* --- get card and banner
            $imageBanner = $imageUploader->uploadProjectImage($form->get('banner')->getData(), $projet, "banner" );
            $imageCard = $imageUploader->uploadProjectImage($form->get('card')->getData(), $projet, "card" );
            
            //* --- get sliders image
            $image1Display = $imageUploader->uploadProjectImage($form->get('slider1')->getData(), $projet, "display" );
            $image2Display = $imageUploader->uploadProjectImage($form->get('slider2')->getData(), $projet, "display" );
            $image3Display = $imageUploader->uploadProjectImage($form->get('slider3')->getData(), $projet, "display" );

            $image1Miniature = $imageUploader->uploadProjectImage($form->get('miniature1')->getData(), $projet, "miniature" );
            $image2Miniature = $imageUploader->uploadProjectImage($form->get('miniature2')->getData(), $projet, "miniature" );
            $image3Miniature = $imageUploader->uploadProjectImage($form->get('miniature2')->getData(), $projet, "miniature" );
            
            
            $allVariables = [
                [$imageBanner,$form->get('banner')->getData()],
                [$imageCard,$form->get('card')->getData()],
                [$image1Display,$form->get('slider1')->getData()],
                [$image2Display,$form->get('slider2')->getData()],
                [$image3Display,$form->get('slider3')->getData()],
                [$image1Miniature,$form->get('miniature1')->getData()],
                [$image2Miniature,$form->get('miniature2')->getData()],
                [$image3Miniature,$form->get('miniature3')->getData()],
            ];

            foreach ($allVariables as  $image) {
                $imageUploader->moveFile($image[1], $image[0], "projet", $slug);

            }
            
            
            
            
            $imageTable = [
                "banner" => $imageBanner,
                "card" => $imageCard,
                "slider" => [
                    "image1" => [
                        "miniature" => $image1Miniature,
                        "onDisplay" => $image1Display,
                    ],
                    "image2" => [

                        "miniature" => $image2Miniature,
                        "onDisplay" => $image2Display,
                    ],
                    
                    "image3" => [

                        "miniature" => $image3Miniature,
                        "onDisplay" => $image3Display,
                        ]
                    
                ]
            ];

            
            $projet->setImages($imageTable);
            $projet->setIsHighlighted(true);

            $entityManager->persist($projet);
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_projet_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/projet/new.html.twig', [
            'projet' => $projet,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_projet_show', methods: ['GET'])]
    public function show(Projet $projet): Response
    {
        return $this->render('admin/projet/show.html.twig', [
            'projet' => $projet,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_projet_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Projet $projet, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ProjetType::class, $projet);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_projet_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/projet/edit.html.twig', [
            'projet' => $projet,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_projet_delete', methods: ['POST'])]
    public function delete(Request $request, Projet $projet, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$projet->getId(), $request->request->get('_token'))) {
            $entityManager->remove($projet);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_admin_projet_index', [], Response::HTTP_SEE_OTHER);
    }
}
