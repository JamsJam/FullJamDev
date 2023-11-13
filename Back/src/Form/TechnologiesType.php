<?php

namespace App\Form;

use App\Entity\Technologies;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class TechnologiesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                'label' => 'Nom de la technologie',
                'attr' => [
                    'placeholder' => 'Nom de la technologie'
                ],
                "constraints" => [
                    new NotBlank([
                        "message" => "Veuillez saisir une technologie"
                    ])
                ]
            ])
            ->add('logo', FileType::class, [
                'label' => 'Logo de la technologie',
                'attr' => [
                    'placeholder' => 'Logo de la technologie'
                ],
                "constraints" => [
                    new NotBlank([
                        "message" => "Veuillez saisir un logo"
                    ])
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Technologies::class,
        ]);
    }
}
