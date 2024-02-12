import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../../components/Buttons/Button'
import './Contact.css'

export default function Contact() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 769px)'
  })

const isTabletteXl = useMediaQuery({
    query: '(min-width: 1200px)'
  })
const isTablette = useMediaQuery({
    query: '(max-width: 769px)'
  })
const isMobile = useMediaQuery({
    query: '(max-width: 500px)'
  })

  return (
    <section className='contact' id="mecontacter">
      <h2 className={`${isTablette ? 'titre-32-to-18--tab' :'titre-32'}`}>Discutons de votre projet</h2>
      <form>

      <div className='inputContainer'>

        <label htmlFor="email" className='texte-16-sb'>
          E-mail
        </label>
          <input 
            type="text" 
            name="email" 
            placeholder='xyz@hotmail.com'
          />
      </div>

      <div className='inputContainer'>
        <label htmlFor="corps" className='texte-16-sb'>
          Message
        </label>
          <textarea 
            name="corps"  
            cols="30" 
            rows="10"
            placeholder='Votre Message...'
          ></textarea>
      </div>

        <Button
          label={'Envoyer'}
          type='button'
          buttonType={'submit'}
          className={'button button--primary titre-20-to-14'}
        
        />
      </form>

    </section>
  )
}
