import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AllGenres } from '../../redux/actions';

const validate = ( form ) =>{
  let errors = {}
  if ( !form.name ) {
    errors.name = 'Insert a validate name👆🏻'
  } else if ( !/^[a-zA-Z\s]+$/.test( form.name ) ) {
    errors.name = 'The name must only contain letters and spaces';
  }
  if ( !form.description ) {
    errors.description = 'Insert a validate description👆🏻'
  } else if ( form.description.length < 10 ) {
    errors.description = 'Description must be at least 10 characters';
  }
  if ( !form.platforms ) {
    errors.platforms = 'Insert a validates platforms👆🏻'
  }
  if ( !form.image ) {
    errors.image = 
    !form.image.includes('https://' || 'http://')
    ? 'Insert a validate URL image👆🏻' 
    : ''
  }
  if ( !form.released ) {
    errors.released = 'Insert a validate released👆🏻'
  }
  if ( !form.rating ) {
    errors.rating = 'Insert a validate rating👆🏻'
  } else if ( !/^[1-5]$/.test( form.rating ) ) {
    errors.rating = 'The rating must be between 1 and 5';
    }
  if ( !form.genres.length === 0 ) {
    errors.genres = 'Select at least one genre👆🏻'
  }
  return errors;
};

const Form = () => {
  const [ form, setForm ] = useState({
    name: '',
    description: '',
    platforms:'',
    image: '',
    released: '',
    rating: '',
    genres: [],
  });

  // errores en el formularios
  const [ errors, setErrors ] = useState({
    name: true,
    description: true,
    platforms: true,
    image: true,
    released: true,
    rating: true,
    genres: true,
  });

  // const handleSubmit = ( event ) => {
  //   event.preventDefault();
  //   dispatch( postDataVideoGames( form ) );
  //   setForm({
  //     name: '',
  //     description: '',
  //     platforms:'',
  //     image: '',
  //     released: '',
  //     rating: '',
  //     genres: [],
  //   });
  //   alert( 'Videogame created!' );
  // };

  const handleSubmit = ( event ) => {
    event.preventDefault();
    axios.post( '/videogames', form )
      .then( res => alert( 'Game created successfully' ) )
      .catch( err => alert( 'Please fill in all the fields' ) );
    setForm({
      name: '',
      description: '',
      platforms:'',
      image: '',
      released: '',
      rating: '',
      genres: [],
    });
  };

  const handlerInputChange= ( event ) => {
    setForm({
      ...form,
      [ event.target.name ]: event.target.value,
    });
    setErrors( validate({
      ...form, 
      [ event.target.name ]: event.target.value,
    }));
  };

  const dispatch = useDispatch();
  const genres = useSelector( state => state.genres );

  useEffect( ()=>{
    dispatch( AllGenres() )
  }, [ dispatch ]);

  const handlerGenres = ( event )=> {
    if ( !form.genres.includes( event.target.value ) ) {
      setForm({
        ...form,
        genres: [ ...form.genres, event.target.value ]
      })
      setErrors( validate({
        ...form, 
        genres: [ ...form.genres, event.target.value ],
      }))
    };
  };

  return (
    <div className={ styles.formContainer }>
      <form  onSubmit={ ( event ) => handleSubmit( event ) }>
        <title>Form</title>
        <h1>Create Videogame</h1>
        <div>
          <label htmlFor='name'>Name: </label>
          <input 
            type='text' 
            value={ form.name } 
            name='name' 
            placeholder='Name here...'
            onChange={ handlerInputChange }
          />
        </div>
        { 
          errors.name && ( 
            <p className={ styles[ "error-message" ] }>
              { errors.name }
            </p> 
          ) 
        }
        
        <div>
          <label htmlFor='description'>Description: </label>
          <input 
            type='text' 
            value={ form.description } 
            name='description' 
            placeholder='Description here...'
            onChange={ handlerInputChange }
          />
        </div>
        { 
          errors.description && ( 
            <p className={ styles[ "error-message" ] }>
              { errors.description }
            </p> 
          ) 
        }

        <div>
          <label htmlFor='platforms'>Platforms: </label>
          <input 
            type='text' 
            value={ form.platforms } 
            name='platforms' 
            placeholder='Platforms here..'
            onChange={ handlerInputChange }
          />
        </div>
        { 
          errors.platforms && ( 
            <p className={ styles[  "error-message" ] }>
              { errors.platforms }
            </p> 
          ) 
        }

        <div>
          <label htmlFor='image'> Url Image: </label>
          <input 
            type='url' 
            value={ form.image } 
            name='image' 
            placeholder='Image link here...'
            onChange={ handlerInputChange }
          />
        </div>
        { 
          errors.image && ( 
            <p className={ styles[ "error-message" ] }>
              { errors.image }
            </p> 
          ) 
        }

        <div>
          <label htmlFor='released'>Released: </label>
          <input 
            type='date' 
            value={ form.released } 
            name='released' 
            onChange={ handlerInputChange }
          />
        </div>
        { 
          errors.released && ( 
            <p className={ styles[ "error-message" ] }>
              { errors.released }
            </p> 
          ) 
        }

        <div>
          <label htmlFor='rating'>Rating: </label>
          <input 
            type='number' 
            value={ form.rating } 
            name='rating' 
            placeholder='Rating here...'
            onChange={ handlerInputChange }
          />
        </div>
        { 
          errors.rating && ( 
            <p className={  styles[ "error-message" ] }>
              { errors.rating }
            </p> 
          ) 
        }

        <div>
          <label htmlFor='genres'>Genres: </label>
          <select onChange={ ( event ) => handlerGenres( event ) } defaultValue='default'>
            <option value="default" disabled>Select Genres</option>
            {
              genres?.map( ( genre, index ) => (
                <option key={ index } value={ genre.name }>
                  { genre.name }
                </option>
              ))
            }
          </select>
        </div>
        { 
          errors.genres && ( 
            <p className={ styles[ "error-message" ] }>
              { errors.genres }
            </p> 
          ) 
        }

        <button className={ styles.button }>
          Create Videogame
        </button>
        
      </form>
    </div>
  )
}

export default Form;