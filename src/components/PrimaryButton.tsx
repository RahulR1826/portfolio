import React from 'react';

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const PrimaryButton: React.FC<ButtonProps> = ({
  className = '',
  children = 'Contact Me',
  as = 'button',
  ...rest
}) => {
  const Component = as as any;
  return (
    <Component
      {...rest}
      className={`rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base outline-none inline-flex items-center justify-center ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        border: '2px solid white',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
    >
      {children}
    </Component>
  );
};
