/**
 * This code represents my portfolio website, which showcases my skills, projects, and experience as a developer.
 * It includes HTML, CSS, and JavaScript files that create a responsive and visually appealing design.
 * The website also includes links to my GitHub profile and other relevant social media accounts.
 * Overall, this code demonstrates my ability to create a professional and effective online presence as a developer.
 */

# Jam Developer Portfolio

## Description

This is a portfolio website that showcases my skills, projects, and experience as a developer. It includes HTML, CSS, and JavaScript files that create a responsive and visually appealing design. The website also includes links to my GitHub profile and other relevant social media accounts. Overall, this code demonstrates my ability to create a professional and effective online presence as a developer.

## Table of Contents

## Technical Stack 

### Front-End

- Front-Office :
    - React.js 
    - CSS3
    - Javascript (ES 6 & ES7)
    - Axios
    - react redux / toolkit 
    - react router dom

- Back-office : 
    - Symfony
    - twig template
    - Scss
    - Stimulus

### Back-end :

- Symfony 6.3 → 6.4
- Php 8.2
- SQL
- PhpMyAdmin

### DevOps :

- Git / GitHub


## Fonctionnalités

- Gestion des Projets
- Gestion des utilisateurs (apiplateform + admin)

- Responsive Design
- SEO
- animation
- Dark Mode
- Lazy Loading

- Login 
- ApiPlatform
- Contact Form
- Envoyer un mail

## Conception

### Dase de données

| Tables        | Fields           | Type  |
| ------------- |:-------------:| -----:|
| User      | id, email, password, roles | varchar, varchar, varchar, array |
| Project      | id, title, description, images, link, github, createdAt, updatedAt, slug, categorie, technologie , isHighlighted    |   varchar, text, text, json , text, datetime, datetime, varchar, relation, relation, boolean |
| Categorie | id, name, slug      |    varchar, varchar, varchar |
| Technologie | id, name, slug      |    varchar, varchar, varchar |
| Contact | id, name, email, message, createdAt, updatedAt      |    varchar, varchar, text, datetime, datetime |

### Routes

#### ApiPlatform

| Method        | Route      | Parameters     | Description  |
| ------------- |:-------------:| -----:| -----:|
| GET      | /api/projects |                    | Get all projects |
| GET      | /api/projects/{id} |    id         | Get one project |
| GET      | /api/projetcs?isHighlighted=true |    isHighlighted     | Get all highlighted projects |
| GET      | /api/projetcs?project={search}&techno={search} |    search    | Get all highlighted projects |
| GET      | /api/categories |  | Get all categories |
| GET      | /api/categories/{id}/projects | id | Get all projects by category |
| GET      | /api/technologies |  | Get all technologies |
| GET      | /api/technologies/{id}/projects | id | Get all projects by technology |
| POST      | /api/contact |  | Send a mail |
| POST      | /api/login_check |  | Login POUR API PLATFORM |

#### Symfony

| Method        | Route      | Parameters     | Description  |
| ------------- |:-------------:| -----:| -----:|
| GET      | /project/ |                    | Get all projects |
| GET      | /project/{id} |    id       | Get one project |
| GET, POST      | /project/new |    id       | Create a new project |
| GET, POST      | /project/{id}/edit |    id       | Edit a project |
| DELETE      | /project/{id} |    id       | Delete a project |
| GET      | /categorie/ |                    | Get all categories |
| GET      | /categorie/{id} |    id       | Get one category |
| GET, POST      | /categorie/new |    id       | Create a new category |
| GET, POST      | /categorie/{id}/edit |    id       | Edit a category |
| DELETE      | /categorie/{id} |    id       | Delete a category |
| GET      | /technologie/ |                    | Get all technologies |
| GET      | /technologie/{id} |    id       | Get one technology |
| GET, POST      | /technologie/new |    id       | Create a new technology |
| GET, POST      | /technologie/{id}/edit |    id       | Edit a technology |
| DELETE      | /technologie/{id} |    id       | Delete a technology |
| GET      | /contact/ |                    | Get all contacts |
| GET      | /contact/{id} |    id       | Get one contact |


### Interfaces

[lien vers le figma :]()

#### Components

##### Atoms

###### Buttons

###### Inputs

###### Links

###### Texts

###### Images

###### Icons

###### Modals

###### Flash Messages

##### Molecules

###### Header

###### Footer

###### Project Card

###### Forms

###### Hero 


##### Organisms


###### Projects

###### Contact

###### Login

###### Admin

###### Home

###### About

###### Error 5xx

###### 404

###### Maintenance


