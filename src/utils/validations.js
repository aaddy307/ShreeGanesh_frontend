export const validateProductForm = (data) => {
  const errors = {};

  if (!data.name?.trim()) {
    errors.name = 'Product name is required';
  } else if (data.name.length < 3) {
    errors.name = 'Product name must be at least 3 characters';
  }

  if (!data.category) {
    errors.category = 'Category is required';
  }

  if (!data.price) {
    errors.price = 'Price is required';
  } else if (parseFloat(data.price) <= 0) {
    errors.price = 'Price must be greater than 0';
  }

  if (!data.description?.trim()) {
    errors.description = 'Description is required';
  } else if (data.description.length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }

  if (!data.image && !data.existingImage) {
    errors.image = 'Product image is required';
  }

  return errors;
};

export const validateContactForm = (data) => {
  const errors = {};

  if (!data.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\+?[\d\s-]{10,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!data.message?.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
};

export const validateLoginForm = (data) => {
  const errors = {};

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  } else if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};