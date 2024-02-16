<?php

namespace App\Controller\Admin;

use Cocur\Slugify\Slugify;
use App\Entity\Technologies;
use App\Form\TechnologiesType;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\TechnologiesRepository;
use App\Service\ImageUploader;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/admin/technologies')]
class TechnologiesController extends AbstractController
{
    #[Route('/', name: 'app_admin_technologies_index', methods: ['GET'])]
    public function index(TechnologiesRepository $technologiesRepository): Response
    {
        return $this->render('admin/technologies/index.html.twig', [
            'technologies' => $technologiesRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_technologies_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, ImageUploader $uploaderService): Response
    {
        $technology = new Technologies();
        $form = $this->createForm(TechnologiesType::class, $technology);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            //! ===========================
            //?  setting up the slug
            //! ===========================
            
            $name = $technology->getNom();
            $slugify = new Slugify();
            $slug = $slugify->slugify($name);
            $technology->setSlug($slug);
            
            //! ===========================
            

            //! ===========================
            //?  setting logo file's name
            //! ===========================

            $logo = $form->get('logo')->getData();
            $safeLogoName = $uploaderService->uploadLogo($logo, $technology);

            $uploaderService->moveFile($logo, $safeLogoName, "logo");
            
            
            $technology->setLogo($safeLogoName);
            $technology->setLogoPath($this->getParameter('assetsParameter').'/'.$safeLogoName);

            //! ===========================


            //! ===========================
            //?         Persist & Flush
            //! ===========================
            
            $entityManager->persist($technology);
            $entityManager->flush();

            //! ===========================
            
            return $this->redirectToRoute('app_admin_technologies_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/technologies/new.html.twig', [
            'technology' => $technology,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_technologies_show', methods: ['GET'])]
    public function show(Technologies $technology): Response
    {
        return $this->render('admin/technologies/show.html.twig', [
            'technology' => $technology,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_technologies_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Technologies $technology, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(TechnologiesType::class, $technology);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_technologies_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/technologies/edit.html.twig', [
            'technology' => $technology,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_technologies_delete', methods: ['POST'])]
    public function delete(Request $request, Technologies $technology, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$technology->getId(), $request->request->get('_token'))) {
            $entityManager->remove($technology);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_admin_technologies_index', [], Response::HTTP_SEE_OTHER);
    }
}
