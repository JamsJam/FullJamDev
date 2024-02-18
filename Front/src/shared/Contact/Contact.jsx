import React, {useRef, useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../../components/Buttons/Button'
import Flash from '../../components/Flash/Flash'
import './Contact.css'

export default function Contact() {
  
  const isTablette = useMediaQuery({
    query: '(max-width: 769px)'
  })


  const [flash, setFlash] = useState({
    error: false,
    success: false,
    test: false

  });
  

  const mailRef = useRef(null)
  const messageRef = useRef(null)

  const mailRegex = new RegExp(`^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$`)



  const isMailValid = (mail) =>{
    return mailRegex.test(mail) ;
  }


  const fetchData = async (sender, message) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from : sender,
        message : message
      })
    };

    try {
      const response = await fetch('http://localhost:8000/mail/mailer', options);

      if (!response.ok) {
        throw new Error('Erreur de réseau ou serveur');
      }
      
      const responseData = await response.json();
      setFlash({...flash,error:false, success: true})
      console.log('Réponse du serveur :', responseData);
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
    }
  };


  const handleFormSubmit =(e)=>{
    e.preventDefault()

    if(isMailValid(mailRef.current.value)){

      fetchData(mailRef.current.value, messageRef.current.value);

    }else{
      setFlash({...flash, error: true})
    }
  }




  return (
    <section className='contact' id="mecontacter">
      <h2 className={`${isTablette ? 'titre-32-to-18--tab' :'titre-32'}`}>Discutons de votre projet</h2>
      
      
      <form onSubmit={(e)=>handleFormSubmit(e)}>
        <Flash
          type={'test'}
          message={'Ceci est un test'}
          etat={flash.test}
          setShowError={(value) => setFlash({ ...flash, test: value })} 
          />
        <Flash 
          type={'error'} 
          message={'Veuillez entrer une adresse mail valide'} 
          etat={flash.error}
          setShowError={(value) => setFlash({ ...flash, error: value })} 
          />
          
        <Flash 
          type={'success'} 
          message={'Votre demande à bien été envoyé.'} 
          etat={flash.success}
          setShowError={(value) => setFlash({ ...flash, success: value })} 
          />
        
        <div className='inputContainer'>

          <label htmlFor="email" className='texte-16-sb'>
            Votre E-mail
          </label>
          <input 
            type="text" 
            name="email" 
            placeholder='votre@email.com'
            className='texte-16-r'
            ref={mailRef}
            
          />
        </div>

        <div className='inputContainer'>
          
          <label htmlFor="corps" className='texte-16-sb'>
            Votre message
          </label>
          <textarea 
            name="corps"  
            cols="30" 
            rows="10"
            placeholder='Votre Message...'
            className='texte-16-r'
            ref={messageRef}
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
