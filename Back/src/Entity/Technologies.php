<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\TechnologiesRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TechnologiesRepository::class)]
class Technologies
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['get:collection:card', 'get:item:project'])]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    #[Groups(['get:collection:card', 'get:item:project'])]
    private ?string $slug = null;

    #[ORM\ManyToMany(targetEntity: Projet::class, mappedBy: 'technologies')]
    private Collection $projets;

    #[ORM\Column(length: 255)]
    #[Groups(['get:item:project'])]
    private ?string $logo = null;

    #[ORM\Column(length: 255)]
    #[Groups(['get:collection:card'])]
    private ?string $logoPath = null;

    public function __construct()
    {
        $this->projets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

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

    /**
     * @return Collection<int, Projet>
     */
    public function getProjets(): Collection
    {
        return $this->projets;
    }

    public function addProjet(Projet $projet): static
    {
        if (!$this->projets->contains($projet)) {
            $this->projets->add($projet);
            $projet->addTechnology($this);
        }

        return $this;
    }

    public function removeProjet(Projet $projet): static
    {
        if ($this->projets->removeElement($projet)) {
            $projet->removeTechnology($this);
        }

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): static
    {
        $this->logo = $logo;

        return $this;
    }

    public function getLogoPath(): ?string
    {
        return $this->logoPath;
    }

    public function setLogoPath(string $logoPath): static
    {
        $this->logoPath = $logoPath;

        return $this;
    }
}
