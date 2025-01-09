import { PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

export default function Header({ image: { src, alt }, children }: HeaderProps) {
  return (
    <header>
      <img src={src} alt={alt} />
      {children}
    </header>
  );
}
