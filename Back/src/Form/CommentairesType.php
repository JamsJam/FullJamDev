<?php

namespace App\Form;

use App\Entity\Commentaires;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\RadioType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CommentairesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('message',TextareaType::class,[
                'label' => 'Message',
                'attr' => [
                    'placeholder' => 'Message'
                ]
            ])
            ->add('nom',TextType::class,[
                'label' => 'Nom et prénom',
                'attr' => [
                    'placeholder' => 'Nom de l\'auteur'
                ]
            ])
            ->add('lien',TextType::class,[
                'label' => 'Lien du site',
                'attr' => [
                    'placeholder' => 'Lien du site'
                ]
            ])
            ->add('isValidated', RadioType::class, [
                'label' => 'Valider le commentaire',
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Commentaires::class,
        ]);
    }
}
