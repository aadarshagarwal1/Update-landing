import * as React from "react";

type NextImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function Image({ src, alt, ...rest }: NextImageProps) {
  return <img src={src} alt={alt} {...rest} />;
}
