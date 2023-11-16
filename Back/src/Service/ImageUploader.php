<?php

namespace App\Service;



use App\Entity\Projet;
use Cocur\Slugify\Slugify;
use App\Entity\Technologies;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\File\Exception\FileException;



/**
 * ImageUploader
 */
class ImageUploader
{
    private const LOGO_DIRECTORY = 'logo';
    private const PROJET_DIRECTORY = 'projet';


    public function __construct(
        private string $targetDirectory,
        
        ){}
    
    
    /**
     * uploadLogo
     *
     * @param  mixed $file
     * @param  mixed $technology
     * @return string
     */
    public function uploadLogo(UploadedFile $file, Technologies $technology): string
    {
        
        $slug = $technology->getSlug();
        $safeLogoName = 'logo-'.$slug.'-'.uniqid().'-'.$file->guessExtension() ;
        
        return $safeLogoName;
    }
    
    /**
     * uploadProjectImage
     *
     * @param  mixed $file
     * @param  mixed $projet
     * @param  string $type
     * @return String
     */
    public function uploadProjectImage(UploadedFile $file, Projet $projet, string $type ) : string
    {

        $projetSlug = $projet->getSlug() ;
        $safeName = $projetSlug.'-'.$type.'-'.uniqid().'.'.$file->guessExtension();

        return $safeName;
    }

    
    
    
    /**
     * moveFile
     *
     * @param  mixed $file
     * @param  mixed $fileName
     * @param  mixed $directory
     * @param  mixed $projetSlug
     * @return void
     */
    public function moveFile(UploadedFile $file, string $fileName, string $directory, ?string $projetSlug = null):void
    {
        $targetDirectory = $this->getTargetDirectory( $directory, $projetSlug);
  
        try {
            $file->move(
                $targetDirectory, 
                $fileName
        );
        } catch (FileException $e) {
            throw $e;
        }
    }


    public function replaceFile(){}

    

    private function getTargetDirectory(string $directory, ?string $projetSlug): string
    {
        switch ($directory) {
            case self::LOGO_DIRECTORY:
                return $this->targetDirectory . '/' . $directory;
            case self::PROJET_DIRECTORY:
                return $this->targetDirectory . '/' . $directory . '/' . $projetSlug;
            default:
                throw new \InvalidArgumentException('Invalid directory');
        }
    }
}
