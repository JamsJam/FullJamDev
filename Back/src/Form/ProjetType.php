<?php

namespace App\Form;

use App\Entity\Projet;
use App\Entity\Categories;
use App\Entity\Technologies;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ProjetType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre', TextType::class,[
                "label" => "Titre du projet",
                "attr" => [
                    "placeholder" => "Titre du projet"
                ],
                "constraints" => [
                    new NotBlank([
                        "message" => "Veuillez saisir un titre"
                    ])
                ]
            ])
            // ->add('slug')
            ->add('description', TextareaType::class,[
                "label" => "Description du projet",
                "attr" => [
                    "placeholder" => "Description du projet"
                ],
                "constraints" => [
                    new NotBlank([
                        "message" => "Veuillez saisir une description"
                    ]),
                    new Length([
                        "min" => 10,
                        "minMessage" => "La description doit contenir au moins {{ limit }} caractères",
                        "max" => 250,
                        "maxMessage" => "La description doit contenir au maximum {{ limit }} caractères",
                    ]) 
                ]  
            ])

            ->add('lien', TextType::class,[
                "label" => "Lien du projet",
                "attr" => [
                    "placeholder" => "Lien du projet"
                ]
            ])
            ->add('github', TextType::class,[
                "label" => "Lien Github du projet",
                "attr" => [
                    "placeholder" => "Lien Github du projet"
                ]
            ])
            ->add('images', FileType::class,[
                "label" => "Images du projet",
                "attr" => [
                    "placeholder" => "Images du projet"
                ]
            ])
            ->add('categorie', EntityType::class,[
                "class" => Categories::class,
                "choice_label" => "nom",
                "label" => "Catégorie du projet",
                "multiple" => false,
                "expanded" => false,
            ])
            ->add('technologies',EntityType::class,[
                "class" => Technologies::class,
                "choice_label" => "nom",
                "label" => "Technologies du projet",
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Projet::class,
        ]);
    }
}
