import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../../components/Buttons/Button'
import './Contact.css'

export default function Contact() {

  const isTablette = useMediaQuery({
    query: '(max-width: 769px)'
  })

  const handleFormSubmit =(e)=>{
    e.preventDefault()
    
    
    const formData = new FormData(e.target);
    const formValues = [];

    for (const pair of formData.entries()) {
      const obj = {};
      obj[pair[0]] = pair[1];
      formValues.push(obj);
    }

    console.log(JSON.stringify(formValues));
  }

  



  return (
    <section className='contact' id="mecontacter">
      <h2 className={`${isTablette ? 'titre-32-to-18--tab' :'titre-32'}`}>Discutons de votre projet</h2>
      
      
      <form onSubmit={(e)=>handleFormSubmit(e)}>

        <div className='inputContainer'>

          <label htmlFor="email" className='texte-16-sb'>
            E-mail
          </label>
            <input 
              type="text" 
              name="email" 
              placeholder='xyz@hotmail.com'
              className='texte-16-r'
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
              className='texte-16-r'
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
