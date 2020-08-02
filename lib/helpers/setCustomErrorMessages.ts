import * as Joi from 'joi';
import * as Sentry from '@sentry/react';

export function setCustomErrorMessages(fieldName: string, errors: Joi.ValidationErrorItem[]): Joi.ValidationErrorItem[] {
  errors.map((error) => {
    switch (error.code) {
      case 'number.base':
        error.message = `The ${fieldName} must be a number.`;
        return error;

      case 'string.empty':
        error.message = `The ${fieldName} cannot be empty.`;
        return error;

      case 'string.required':
        error.message = `The ${fieldName} is required.`;
        return error;

      case 'string.min':
        error.message = `The ${fieldName} should have at least a length of ${error.context.limit}.`;
        return error;

      case 'string.max':
        error.message = `The ${fieldName} should have at most a length of ${error.context.limit}.`;
        return error;

      case 'string.pattern.base':
        error.message = `The ${fieldName} does not match the standard pattern.`;
        return error;

      default:
        Sentry.captureMessage(`Custom error message for ${error.code} is not defined yet.`);
        return error;
    }
  });
  return errors;
}
