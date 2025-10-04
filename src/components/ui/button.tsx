import * as React from 'react';
import Link from 'next/link';
import {cn} from '@/lib/utils';

type ButtonVariant = 'default' | 'outline' | 'ghost';

type BaseProps = {
  variant?: ButtonVariant;
  asChild?: boolean;
};

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLinkProps = BaseProps & React.ComponentProps<typeof Link>;

const variantMap: Record<ButtonVariant, string> = {
  default:
    'bg-primary text-white shadow-skin2 hover:-translate-y-0.5 transition-transform duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg0',
  outline:
    'border border-border text-text bg-transparent hover:bg-bg1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg0',
  ghost:
    'text-text hover:bg-bg1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg0'
};

function getClassName(variant: ButtonVariant, className?: string) {
  return cn(
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition-colors duration-fast ease-standard motion-reduce:transform-none',
    variantMap[variant],
    className
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', type = 'button', ...props }, ref) => (
    <button ref={ref} className={getClassName(variant, className)} type={type} {...props} />
  )
);
Button.displayName = 'Button';

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <Link ref={ref} className={getClassName(variant, className)} {...props} />
  )
);
ButtonLink.displayName = 'ButtonLink';
