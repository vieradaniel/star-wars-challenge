import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CharacterDetail = ({currentCharacter}) => {

    const navigate = useNavigate();
    const handleNavigateBack =()=>{
        navigate(-1);
    }

    

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ `https://culturacolectiva-cultura-colectiva-prod.cdn.arcpublishing.com/resizer/v6BqV31JjLYQCySD2t9hxMe71jw=/1024x768/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/culturacolectiva/E7NFI63N55ET7CWCKVRAFURL2M.jpg` } 
          alt={ currentCharacter.name }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ currentCharacter.name }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Height:</b> {currentCharacter.height} </li>
          <li className="list-group-item"> <b>Hair Color:</b> {currentCharacter.hair_color} </li>
          <li className="list-group-item"> <b>Eye Color:</b> {currentCharacter.eye_color} </li>
        </ul>

        <h5 className="mt-3"> Gender </h5>
        <p>{currentCharacter.gender}</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ handleNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
    // <>
    //     <img src="https://culturacolectiva-cultura-colectiva-prod.cdn.arcpublishing.com/resizer/v6BqV31JjLYQCySD2t9hxMe71jw=/1024x768/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/culturacolectiva/E7NFI63N55ET7CWCKVRAFURL2M.jpg" alt="" />
    //     <h1>{currentCharacter.name}</h1>
    //     <div>height: {currentCharacter.height}</div>
    //     <div>hair color: {currentCharacter.hair_color}</div>
    //     <div>eye color: {currentCharacter.eye_color}</div>
    //     <div>gender: {currentCharacter.gender}</div>
    //     <button className='btn btn-primary' onClick={handleNavigateBack}>back</button>
    // </>
  )
}
