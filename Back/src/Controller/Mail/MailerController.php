<?php

namespace App\Controller\Mail;

use DateTimeImmutable;
use App\Entity\Message;
use App\Service\MailerService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MailerController extends AbstractController
{
    #[Route('/mail/mailer', name: 'app_mail_mailer')]
    public function index( MailerService $mailService, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $from = $request->getPayload()->get('from');
        $message = $request->getPayload()->get('message');
        // $response->headers->set('Access-Control-Allow-Origin', '*');
        $to = 'testSymfony@hotmail.com';

        $mailService->sendEmail($from, $to, $message);
        $contact = new Message;
        $contact->setExpediteur($from);
        $contact->setCorps($message);
        $contact->setSendAt(New DateTimeImmutable('now'));
        $entityManager->persist($contact);
        $entityManager->flush();

        $response = new JsonResponse(
            'Mail ok',
            200,
            ['Access-Control-Allow-Origin' => '*']
        );
        
        
        return $response ;
    }
}
