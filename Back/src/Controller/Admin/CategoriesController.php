<?php

namespace App\Controller\Admin;

use App\Entity\Categories;
use Cocur\Slugify\Slugify;
use App\Form\CategoriesType;
use App\Repository\CategoriesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/categories')]
class CategoriesController extends AbstractController
{
    #[Route('/', name: 'app_admin_categories_index', methods: ['GET'])]
    public function index(CategoriesRepository $categoriesRepository): Response
    {
        return $this->render('admin/categories/index.html.twig', [
            'categories' => $categoriesRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_categories_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $category = new Categories();
        $form = $this->createForm(CategoriesType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            
            //? Dynamically create slug from category name
            $name = $category->getNom();
            $slugify = new Slugify();
            $slug = $slugify->slugify($name);
            $category->setSlug($slug);


            $entityManager->persist($category);
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_categories_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/categories/new.html.twig', [
            'category' => $category,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_categories_show', methods: ['GET'])]
    public function show(Categories $category): Response
    {
        return $this->render('admin/categories/show.html.twig', [
            'category' => $category,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_categories_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Categories $category, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CategoriesType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_categories_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/categories/edit.html.twig', [
            'category' => $category,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_categories_delete', methods: ['POST'])]
    public function delete(Request $request, Categories $category, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$category->getId(), $request->request->get('_token'))) {
            $entityManager->remove($category);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_admin_categories_index', [], Response::HTTP_SEE_OTHER);
    }
}
