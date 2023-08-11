
import passwordValidator from 'password-validator';

const schema = new passwordValidator();

// Add properties to it
schema
  .is().min(8)                                    // Minimum length 8
  .has().uppercase()                              // Must have uppercase letters
  .has().lowercase()                              // Must have lowercase letters
  .has().not().spaces();                          // Should not have spaces

console.log(schema.validate('validPASS123'));

interface ValidationResult {
  status: boolean;
  message: string[] | string;
}

export default function validatePassword(password: string): ValidationResult {
  const status = schema.validate(password);
  const message = status ? '' : schema.validate(password, { list: true }) as string[];
  
  return {
    status: status as boolean, // Corrected type assertion here
    message,
  };
}
