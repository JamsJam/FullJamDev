import React from 'react'
import './Button.css'
import { Link, NavLink } from 'react-router-dom';

export default function Button({
  label, 
  link = '#', 
  icon,
  alt, 
  className, 
  type = 'link', 
  buttonType,
  handleClick
}) {
  
  
  const renderButtonType = (type) => {
    switch (type) {

      case 'navlink':
        return (
          
          
              <NavLink 
                  to={link}
                  className={`${className}`}
              >
                  {icon && <img src={icon} className='icon' />}
                  {label}
              </NavLink>
      
      
      
          
        )
        

      case 'button':
        return (
          
          
          
              <button 
                  onClick={handleClick}
                  type={buttonType}
                  className={`${className}`}
              >
                  
                  {label}
              </button>
      
      
      
          
        )
        
    
      case 'extLink':
        return (
          
          
              <a
                  href={link}
                  className={`${className}`}
              >
                  {icon && <img src={icon} className='icon' alt={alt}/>}
                  {label}
              </a>
      
      
      
          
        )
        
    
      case 'intLink':
        return (
          
          
              <a
                  href={link}
                  className={`${className}`}
                  onClick={handleClick || null}
              >
                  {icon && <img src={icon} className='icon' />}
                  {label}
              </a>
      
      
      
          
        )
        

      case 'link':
        return (
          
          
              <Link 
                  to={link}
                  className={`${className}`}
                  onClick={handleClick || null}
              >
                  {icon && <img src={icon} className='icon' />}
                  {label}
              </Link>
      
      
      
          
        )
        default:
          throw new Error(`Type "${type}" not recognized`);
    }
  }

  
  return renderButtonType(type)
  

  
}
