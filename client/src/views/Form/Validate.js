const validate = ( form ) =>{
  let errors = {}
  if ( !form.name ) {
    errors.name = 'Insert a validate name👆🏻'
  } else if ( !/^[a-zA-Z\s]+$/.test( form.name ) ) {
    errors.name = 'The name must only contain letters and spaces';
  }
  if ( !form.description ) {
    errors.description = 'Insert a validate description👆🏻'
  } else if (form.description.length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }

  if (!form.platforms) {
    errors.platforms = 'Insert a validates platforms👆🏻'
  }

  if (!form.image) {
    errors.image = 
    !form.image.includes('https://' || 'http://')
    ? 'Insert a validate URL image👆🏻' 
    : ''
  }
  if (!form.released) {
    errors.released = 'Insert a validate released👆🏻'
  }
  if (!form.rating) {
    errors.rating = 'Insert a validate rating👆🏻'
  } else if (!/^[1-5]$/.test(form.rating)) {
    errors.rating = 'The rating must be between 1 and 5';
    }
  if (!form.genres.length === 0) {
    errors.genres = 'Select at least one genre👆🏻'
  }
  return errors;
};

export default validate;