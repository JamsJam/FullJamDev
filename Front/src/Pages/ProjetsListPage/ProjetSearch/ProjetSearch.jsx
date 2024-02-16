import React from 'react'
import './ProjetSearch.css'
import Button from '../../../components/Buttons/Button'
import ChoiceInput from '../../../components/Input/ChoiceInput/ChoiceInput'

export default function ProjetSearch() {
  return (
    <section className="projetSearch">

        <form className='projectSearch__form'>
            
            
            <div>
                <input type="text" name="" id="" />
                <div>
                    <div>
                        <input type='checkbox' name='searchProject' className={`filter-choice`} id='' />
                        
                        <div className={`filter-choice-div texte-13-m` } >
                            Site
                        </div>

                    </div>

                    <div>
                        <input type='checkbox' name='searchProject' className={`filter-choice`} />
                        
                        <div className={`filter-choice-div texte-13-m` } >
                            Mobile
                        </div>

                    </div>
                </div>
            </div>
            <Button
                type={"button"}
                buttonType={"submit"}
                className={"button button--primary titre-20-to-14"}
                label={"Rechercher"}
            />
        </form>

    </section>
  )
}
