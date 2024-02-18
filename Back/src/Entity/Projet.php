<?php

namespace App\Entity;


use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Link;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiFilter;
use App\Repository\ProjetRepository;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Doctrine\Orm\Filter\BooleanFilter;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProjetRepository::class)]
#[ApiResource(operations:[
    new GetCollection(
        uriTemplate: "/get-project-list/",
        paginationMaximumItemsPerPage: 6,
        normalizationContext: [
            'groups' => 'get:collection:card'
        ]
    ),
    // new GetCollection(),

    new Get(
        uriTemplate: "/get-this-project/{id}/",
        normalizationContext:[
            'groups' => 'get:item:project'
        ]
    ),



])]
class Projet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['get:collection:card'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['get:collection:card', 'get:item:project'])]
    private ?string $titre = null;

    #[ORM\Column(length: 255)]
    #[Groups(['get:collection:card', 'get:item:project'])]
    private ?string $slug = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['get:item:project','get:collection:card'])]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    #[Groups(['get:collection:card','get:item:project'])]
    private ?string $lien = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['get:collection:card','get:item:project'])]
    private ?string $github = null;

    #[ORM\Column]
    #[Groups(['get:collection:card', 'get:item:project'])]
    private array $images = [];

    #[ORM\ManyToOne(inversedBy: 'projets')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['get:collection:card', 'get:item:project'])]
    private ?Categories $categorie = null;

    #[ORM\ManyToMany(targetEntity: Technologies::class, inversedBy: 'projets')]
    #[Groups(['get:collection:card', 'get:item:project'])]
    private Collection $technologies;

    #[ORM\Column]
    #[Groups(['get:collection:card'])]
    private ?bool $isHighlighted = null;

    public function __construct()
    {
        $this->technologies = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getLien(): ?string
    {
        return $this->lien;
    }

    public function setLien(string $lien): static
    {
        $this->lien = $lien;

        return $this;
    }

    public function getGithub(): ?string
    {
        return $this->github;
    }

    public function setGithub(?string $github): static
    {
        $this->github = $github;

        return $this;
    }

    public function getImages(): array
    {
        return $this->images;
    }

    public function setImages(array $images): static
    {
        $this->images = $images;

        return $this;
    }

    public function getCategorie(): ?Categories
    {
        return $this->categorie;
    }

    public function setCategorie(?Categories $categorie): static
    {
        $this->categorie = $categorie;

        return $this;
    }

    /**
     * @return Collection<int, Technologies>
     */
    public function getTechnologies(): Collection
    {
        return $this->technologies;
    }

    public function addTechnology(Technologies $technology): static
    {
        if (!$this->technologies->contains($technology)) {
            $this->technologies->add($technology);
        }

        return $this;
    }

    public function removeTechnology(Technologies $technology): static
    {
        $this->technologies->removeElement($technology);

        return $this;
    }

    public function isIsHighlighted(): ?bool
    {
        return $this->isHighlighted;
    }

    public function setIsHighlighted(bool $isHighlighted): static
    {
        $this->isHighlighted = $isHighlighted;

        return $this;
    }
}
