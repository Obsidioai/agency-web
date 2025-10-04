import * as React from 'react';
import {cn} from '@/lib/utils';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-border/60 bg-bg1/60 backdrop-blur-md shadow-skin1',
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn('space-y-2', className)} {...props} />;
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn('space-y-4', className)} {...props} />;
}

export function CardFooter({ className, ...props }: CardProps) {
  return <div className={cn('mt-4 flex items-center justify-between', className)} {...props} />;
}
