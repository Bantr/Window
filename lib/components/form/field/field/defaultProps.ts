import { FieldError } from 'react-hook-form';

export interface IInputDefaultProps {
  name: string;
  icon?: React.ReactNode;
  readOnly?: boolean;
  labelText: string;
  placeholder: string;
  error?: FieldError;
  loading?: boolean;
  color?: 'primary' | 'secondary';
}
