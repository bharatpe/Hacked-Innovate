import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IRegularImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	sx?: CSSProperties;
	fallbackIcon?: string;
}
