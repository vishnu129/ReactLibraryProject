export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Name required';
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.comment) {
      errors.comment = 'comment is required';
    } else if (values.comment.length < 1) {
      errors.comment = 'comment required';
    }
  
    return errors;
  }