export function validateUserInfo(name: string, email: string, password: string): string[] {
  const errors: string[] = [];

  if (!name || name.trim().length === 0) {
    errors.push('Name is required.');
  } else if (name.length > 20) {
    errors.push('Name should not exceed 20 characters.');
  }

  if (!email || email.trim().length === 0) {
    errors.push('Email is required.');
  } else if (!isValidEmailFormat(email)) {
    errors.push('Invalid email format.');
  }


  if (!password || password.trim().length === 0) {
    errors.push('Password is required.');
  } else if (password.length > 12 || password.length < 8) {
    errors.push('Password should be between 8 and 12 characters.');
  } else if (!isPasswordValid(password)) {
    errors.push('Password should include at least 1 special character, 1 letter, and 1 capital letter.');
  }

  return errors;
}

function isValidEmailFormat(email: string): boolean {
  // Implement email format validation logic
  // Return true if the email is valid, false otherwise
  return true; // Placeholder implementation, replace with actual logic
}


function isPasswordValid(password: string): boolean {
  // Implement password validation logic
  // Return true if the password is valid, false otherwise
  return true; // Placeholder implementation, replace with actual logic
}

