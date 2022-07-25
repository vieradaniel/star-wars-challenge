import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CharacterDetail = ({currentCharacter}) => {

    const navigate = useNavigate();
    const handleNavigateBack =()=>{
        navigate(-1);
    }

  return (
    <>
        <h1>{currentCharacter.name}</h1>
        <div>height: {currentCharacter.height}</div>
        <div>hair color: {currentCharacter.hair_color}</div>
        <div>eye color: {currentCharacter.eye_color}</div>
        <div>gender: {currentCharacter.gender}</div>
        <button className='btn btn-primary' onClick={handleNavigateBack}>back</button>
    </>
  )
}
