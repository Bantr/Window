import * as React from 'react';
import { } from './style';

interface IProps {
  string: string;
  icon?: React.ReactNode;
  close: () => void;
  action?: () => void;
  actionText?: string;
  ref: React.MutableRefObject<HTMLDivElement>;
}

export const DefaultModal = 1;
