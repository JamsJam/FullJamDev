<?php
namespace App\Command;

use App\Entity\FdjUser;
use Doctrine\ORM\EntityManager;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ChoiceQuestion;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

// the name of the command is what users type after "php bin/console"
#[AsCommand(name: 'app:create-admin',description:"Create a new admin")]
class CreateUserCommand extends Command
{
    private UserPasswordHasherInterface $userHashInterface;
    private EntityManagerInterface $entityManager;
    private ParameterBagInterface $parameters;

    public function __construct(UserPasswordHasherInterface $userHashInterface,EntityManagerInterface $entityManager,ParameterBagInterface $parameters)
    {
        parent::__construct('app:create-user');
        $this->userHashInterface= $userHashInterface;
        $this->entityManager = $entityManager;
        $this->parameters = $parameters;
    }

    protected function configure():void
    {
        $this->setHelp("Allow to create a new user using app:create-user <name> <lastname> <email> <password> <roles> <is_verified>");


        $this->addArgument("email",InputArgument::OPTIONAL,'Email de l\'Admin :');
        $this->addArgument("motDePasse",InputArgument::OPTIONAL,'mot de passe  :');
        $this->addArgument("verif",InputArgument::OPTIONAL,'l\'utilisateur est il vérifié ?');
    }
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        

        $helper = $this->getHelper('question');
        $io = new SymfonyStyle($input, $output);
        
        //code to create the user
        //? >> Interaction, question et recuperation de la reponse 


        $email =$input->getArgument('email');
        if(!$email){
            $question = new Question('Veuillez rentrer un mail pour l\'utilisateur : ','mail'.rand(0,1000).'@mail.fr');
            $email = $helper->ask($input,$output,$question);
            $output->writeln($email);
        }

        $motDePasse =$input->getArgument('motDePasse');
        if(!$motDePasse){
            $question = new Question('Veuillez rentrer un mot de passe pour l\'utilisateur : ' ,'mdp'.rand(0,1000));
            $motDePasse = $helper->ask($input,$output,$question);
            $output->writeln($motDePasse);
        }



        // $verified =$input->getArgument('verif');
        // if(!$verified){
        //     $question = new ChoiceQuestion('L\'utilisateur est-il vérifié (bool) : ' ,[0,1],"0");
        //     $verified = $helper->ask($input,$output,$question);
        //     $output->writeln($verified);
        // }
        
        $user = new FdjUser;
        $user->setEmail($email);
        $user->setPassword(
            $this->userHashInterface->hashPassword(
                $user,
                $motDePasse
                )
            );
        $user->setRoles(["ROLE_ADMIN"]);
        // $user->setIsVerified($verified);

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $io->title("Utilisateur créer !");
        return Command::SUCCESS;
 
        // or return this if some error happened during the execution
        // (it's equivalent to returning int(1))
        // return Command::FAILURE;

        // or return this to indicate incorrect command usage; e.g. invalid options
        // or missing arguments (it's equivalent to returning int(2))
        // return Command::INVALID
    }
}