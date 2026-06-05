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

export const SecondaryButton: React.FC<ButtonProps> = ({
  className = '',
  children = 'Live Project',
  as = 'button',
  ...rest
}) => {
  const Component = as as any;
  return (
    <Component
      {...rest}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 inline-flex items-center justify-center ${className}`}
    >
      {children}
    </Component>
  );
};
