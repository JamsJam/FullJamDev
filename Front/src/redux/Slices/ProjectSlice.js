import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list : 
    [
        // {
        //   "id": 1,
        //   "titre": "Projet Test 1",
        //   "slug": "projet-test-1",
        //   "description": "C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test",
        //   "images": {
        //     "card": "projet-test-1-card-6594654e3fef1.png",
        //     "banner": "projet-test-1-banner-6594654e3fc7f.png",
        //     "slider": {
        //       "image1": {
        //         "miniature": "projet-test-1-miniature-6594654e400d6.png",
        //         "onDisplay": "projet-test-1-display-6594654e3ff6f.png"
        //       },
        //       "image2": {
        //         "miniature": "projet-test-1-miniature-6594654e4013b.png",
        //         "onDisplay": "projet-test-1-display-6594654e3ffe8.png"
        //       },
        //       "image3": {
        //         "miniature": "projet-test-1-miniature-6594654e401a1.png",
        //         "onDisplay": "projet-test-1-display-6594654e40061.png"
        //       }
        //     }
        //   },
        //   "categorie": {
        //     "@type": "Categories",
        //     "@id": "\/api\/.well-known\/genid\/a214e336ab41bfc243bf",
        //     "nom": "Application Web",
        //     "slug": "application-web"
        //   },
        //   "technologies": [
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/b0f3bd0b0203722971aa",
        //       "nom": "Javascript",
        //       "slug": "javascript",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-javascript-65946487c30bf.png"
        //     },
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/f30db3aaf2c4f36be3c1",
        //       "nom": "Php",
        //       "slug": "php",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-php-65946499c14cc.png"
        //     },
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/77590f85102aa3b070a7",
        //       "nom": "React",
        //       "slug": "react",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-react-659464bcd982b.png"
        //     }
        //   ],
        //   "isHighlighted": true
        // },
    
        // {
        //   "id": 2,
        //   "titre": "Projet Test 2",
        //   "slug": "projet-test-1",
        //   "description": "C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test",
        //   "images": {
        //     "card": "projet-test-1-card-6594654e3fef1.png",
        //     "banner": "projet-test-1-banner-6594654e3fc7f.png",
        //     "slider": {
        //       "image1": {
        //         "miniature": "projet-test-1-miniature-6594654e400d6.png",
        //         "onDisplay": "projet-test-1-display-6594654e3ff6f.png"
        //       },
        //       "image2": {
        //         "miniature": "projet-test-1-miniature-6594654e4013b.png",
        //         "onDisplay": "projet-test-1-display-6594654e3ffe8.png"
        //       },
        //       "image3": {
        //         "miniature": "projet-test-1-miniature-6594654e401a1.png",
        //         "onDisplay": "projet-test-1-display-6594654e40061.png"
        //       }
        //     }
        //   },
        //   "categorie": {
        //     "@type": "Categories",
        //     "@id": "\/api\/.well-known\/genid\/a214e336ab41bfc243bf",
        //     "nom": "Application Web",
        //     "slug": "application-web"
        //   },
        //   "technologies": [
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/b0f3bd0b0203722971aa",
        //       "nom": "Javascript",
        //       "slug": "javascript",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-javascript-65946487c30bf.png"
        //     },
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/f30db3aaf2c4f36be3c1",
        //       "nom": "Php",
        //       "slug": "php",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-php-65946499c14cc.png"
        //     },
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/77590f85102aa3b070a7",
        //       "nom": "React",
        //       "slug": "react",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-react-659464bcd982b.png"
        //     }
        //   ],
        //   "isHighlighted": true
        // },
    
        // {
        //   "id": 3,
        //   "titre": "Projet Test 3",
        //   "slug": "projet-test-1",
        //   "description": "C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test",
        //   "images": {
        //     "card": "projet-test-1-card-6594654e3fef1.png",
        //     "banner": "projet-test-1-banner-6594654e3fc7f.png",
        //     "slider": {
        //       "image1": {
        //         "miniature": "projet-test-1-miniature-6594654e400d6.png",
        //         "onDisplay": "projet-test-1-display-6594654e3ff6f.png"
        //       },
        //       "image2": {
        //         "miniature": "projet-test-1-miniature-6594654e4013b.png",
        //         "onDisplay": "projet-test-1-display-6594654e3ffe8.png"
        //       },
        //       "image3": {
        //         "miniature": "projet-test-1-miniature-6594654e401a1.png",
        //         "onDisplay": "projet-test-1-display-6594654e40061.png"
        //       }
        //     }
        //   },
        //   "categorie": {
        //     "@type": "Categories",
        //     "@id": "\/api\/.well-known\/genid\/a214e336ab41bfc243bf",
        //     "nom": "Application Web",
        //     "slug": "application-web"
        //   },
        //   "technologies": [
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/b0f3bd0b0203722971aa",
        //       "nom": "Javascript",
        //       "slug": "javascript",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-javascript-65946487c30bf.png"
        //     },
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/f30db3aaf2c4f36be3c1",
        //       "nom": "Php",
        //       "slug": "php",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-php-65946499c14cc.png"
        //     },
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/77590f85102aa3b070a7",
        //       "nom": "React",
        //       "slug": "react",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-react-659464bcd982b.png"
        //     }
        //   ],
        //   "isHighlighted": true
        // },
    
        // {
        //   "id": 4,
        //   "titre": "Projet Test 1",
        //   "slug": "projet-test-1",
        //   "description": "C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test",
        //   "images": {
        //     "card": "projet-test-1-card-6594654e3fef1.png",
        //     "banner": "projet-test-1-banner-6594654e3fc7f.png",
        //     "slider": {
        //       "image1": {
        //         "miniature": "projet-test-1-miniature-6594654e400d6.png",
        //         "onDisplay": "projet-test-1-display-6594654e3ff6f.png"
        //       },
        //       "image2": {
        //         "miniature": "projet-test-1-miniature-6594654e4013b.png",
        //         "onDisplay": "projet-test-1-display-6594654e3ffe8.png"
        //       },
        //       "image3": {
        //         "miniature": "projet-test-1-miniature-6594654e401a1.png",
        //         "onDisplay": "projet-test-1-display-6594654e40061.png"
        //       }
        //     }
        //   },
        //   "categorie": {
        //     "@type": "Categories",
        //     "@id": "\/api\/.well-known\/genid\/a214e336ab41bfc243bf",
        //     "nom": "Application Web",
        //     "slug": "application-web"
        //   },
        //   "technologies": [
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/b0f3bd0b0203722971aa",
        //       "nom": "Javascript",
        //       "slug": "javascript",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-javascript-65946487c30bf.png"
        //     },
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/f30db3aaf2c4f36be3c1",
        //       "nom": "Php",
        //       "slug": "php",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-php-65946499c14cc.png"
        //     },
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/77590f85102aa3b070a7",
        //       "nom": "React",
        //       "slug": "react",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-react-659464bcd982b.png"
        //     }
        //   ],
        //   "isHighlighted": false
        // },
    
        // {
        //   "id": 5,
        //   "titre": "Projet Test 1",
        //   "slug": "projet-test-1",
        //   "description": "C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test C\u0027est le projet test",
        //   "images": {
        //     "card": "projet-test-1-card-6594654e3fef1.png",
        //     "banner": "projet-test-1-banner-6594654e3fc7f.png",
        //     "slider": {
        //       "image1": {
        //         "miniature": "projet-test-1-miniature-6594654e400d6.png",
        //         "onDisplay": "projet-test-1-display-6594654e3ff6f.png"
        //       },
        //       "image2": {
        //         "miniature": "projet-test-1-miniature-6594654e4013b.png",
        //         "onDisplay": "projet-test-1-display-6594654e3ffe8.png"
        //       },
        //       "image3": {
        //         "miniature": "projet-test-1-miniature-6594654e401a1.png",
        //         "onDisplay": "projet-test-1-display-6594654e40061.png"
        //       }
        //     }
        //   },
        //   "categorie": {
        //     "@type": "Categories",
        //     "@id": "\/api\/.well-known\/genid\/a214e336ab41bfc243bf",
        //     "nom": "Application Web",
        //     "slug": "application-web"
        //   },
        //   "technologies": [
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/b0f3bd0b0203722971aa",
        //       "nom": "Javascript",
        //       "slug": "javascript",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-javascript-65946487c30bf.png"
        //     },
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/f30db3aaf2c4f36be3c1",
        //       "nom": "Php",
        //       "slug": "php",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-php-65946499c14cc.png"
        //     },
        //     {
        //       "@type": "Technologies",
        //       "@id": "\/api\/.well-known\/genid\/77590f85102aa3b070a7",
        //       "nom": "React",
        //       "slug": "react",
        //       "logoPath": "\/Users\/jamdev\/Documents\/FullJam dev\/fulljamdev.fr\/Application\/Back\/public\/assets\/logo-react-659464bcd982b.png"
        //     }
        //   ],
        //   "isHighlighted": false
        // },
    ],
    hightlight : null,
    choosen: null,
    loading : false

}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    
    addToList : (state, action)=>{
        
        state.list = action.payload
        
    },
    getHightlight: (state, action)=>{
        
        state.hightlight = state.list.map((project)=>{
            return project.isHighlighted === true
        })
    },
    getChoosenProject: (state, action) =>{
        console.log(action.payload)
        state.choosen = state.list.find((project)=>{
          
            return project.id == action.payload
        })
    },
    loadingOn: (state)=>{
        state.loading = true
    },
    loadingOff: (state)=>{
        state.loading = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {

    addToList,
    getHightlight,
    getChoosenProject,
    loadingOff,
    loadingOn

} = projectSlice.actions

export default projectSlice.reducer


export function fetchList(action){
  return async function(dispatch, getState){
      // dispatch(addLoader())
      try {
          
          const response = await fetch(`https://back.fulljamdev.fr/api/get-project-list/`);
          const results = await response.json();
          const data = await results['hydra:member']
            
             dispatch(addToList(data))
      } catch (error) {
          console.info("Erreur in getData",error.message)
          dispatch(addError(error.message))
      }
  }   

}