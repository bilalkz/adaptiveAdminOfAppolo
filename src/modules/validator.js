import moment from 'moment';
export const validate = values => {
    const errors = {}
    if(!values.name){
        errors.name = 'Required field'
    }
    // if(moment(values.end_time).format('YYYY-MM-DDTHH:mm') < moment(values.start_time).format('YYYY-MM-DDTHH:mm')){
    //     errors.end_time = 'Invalid date selected'
    // }
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.age) {
      errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
  }