import * as React from 'react';
import { Image, ImagePlaceholder } from './style';

interface IProps {
  src: string;
  loading: boolean
  size: string;
  alt?: string;
}

export const Avatar: React.FC<IProps> = ({ alt = 'avatar', loading, src, size }) => {
  if (loading) {
    return <ImagePlaceholder className="placeholder" size={size} />;
  }
  return (
    <Image alt={alt} size={size} src={src} />
  );
};
