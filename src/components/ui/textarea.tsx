import * as React from 'react';
import {cn} from '@/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({className, ...props}, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-2xl border border-border/50 bg-bg0/80 px-4 py-3 text-sm text-text shadow-inner shadow-black/10',
        'placeholder:text-muted focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg0',
        'transition duration-fast ease-standard motion-reduce:transition-none',
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';
