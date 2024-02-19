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
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
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
            //? Add multiple fileType for all the needed images size

            // ->add('images', FileType::class,[
            //     "label" => "Images du projet",
            //     "attr" => [
            //         "placeholder" => "Images du projet"
            //     ]
            // ])

            ->add('banner',FileType::class,[
                "required" => false,
                "mapped" => false,
                "label" => "Banniere du projet",
                "attr" => [
                    "placeholder" => "Banniere du projet"
                ]
            ])

            ->add('card',FileType::class,[
                "required" => false,
                "mapped" => false,
                "label" => "image pour la carte projet",
                "attr" => [
                    "placeholder" => "image pour la carte projet"
                ]
            ])

            ->add('slider1',FileType::class,[
                "required" => false,
                "mapped" => false,
                "label" => "1er images des sliders et mise en avant",
                "attr" => [
                    "placeholder" => "1er images des sliders et mise en avant"
                ]
            ])

            ->add('miniature1',FileType::class,[
                "required" => false,
                "mapped" => false,
                "label" => "Miniature de la 1er image",
                "attr" => [
                    "placeholder" => "Miniature de la 1er image"
                ]
            ])

            ->add('slider2',FileType::class,[
                "required" => false,
                "mapped" => false,
                "label" => "2e images des sliders",
                "attr" => [
                    "placeholder" => "2e images des sliders"
                ]
            ])

            ->add('miniature2',FileType::class,[
                "required" => false,
                "mapped" => false,
                "label" => "Miniature de la 2e image",
                "attr" => [
                    "placeholder" => "Miniature de la 2e image"
                ]
            ])

            ->add('slider3',FileType::class,[
                "required" => false,
                "mapped" => false,
                "label" => "3e images des sliders ",
                "attr" => [
                    "placeholder" => "3e images des sliders "
                ]
            ])

            ->add('miniature3',FileType::class,[
                "required" => false,
                "mapped" => false,
                "label" => "Miniature de la 3e image",
                "attr" => [
                    "placeholder" => "Miniature de la 3e image"
                ]
            ])

            ->add('categorie', EntityType::class,[
                "class" => Categories::class,
                "choice_label" => "nom",
                "label" => "Catégorie du projet",
                "multiple" => false,
                "expanded" => true,
            ])
            ->add('technologies',EntityType::class,[
                "class" => Technologies::class,
                "choice_label" => "nom",
                "label" => "Technologies du projet",
                "multiple" => true,
                "expanded" => true
            ])
            ->add('isHighlighted',CheckboxType::class, [
                'label'    => 'Mise en avant',
                'required' => false,
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
