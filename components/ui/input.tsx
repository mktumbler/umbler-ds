'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import {
  forwardRef,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

// ── Variants ──────────────────────────────────────────────────────────────────

const inputVariants = cva(
  [
    'w-full rounded-md bg-neutral-900 text-neutral-100 placeholder:text-neutral-500',
    'border transition-[border-color,box-shadow] duration-150',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-8  px-3 text-sm',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      state: {
        default: 'border-neutral-600/70 hover:border-neutral-500 focus:border-brand-500 focus:ring-brand-500/30',
        error:   'border-error-500 focus:border-error-500 focus:ring-error-500/30',
        success: 'border-success-500 focus:border-success-500 focus:ring-success-500/30',
      },
    },
    defaultVariants: { size: 'md', state: 'default' },
  },
);

// ── InputRoot wrapper (handles left/right slots) ───────────────────────────────

interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

const InputRoot = forwardRef<HTMLDivElement, InputRootProps>(
  ({ className, leftElement, rightElement, children, ...props }, ref) => (
    <div ref={ref} className={cn('relative flex items-center', className)} {...props}>
      {leftElement && (
        <span className="pointer-events-none absolute left-3 flex items-center text-neutral-400">
          {leftElement}
        </span>
      )}
      {children}
      {rightElement && (
        <span className="pointer-events-none absolute right-3 flex items-center text-neutral-400">
          {rightElement}
        </span>
      )}
    </div>
  ),
);
InputRoot.displayName = 'InputRoot';

// ── Input ────────────────────────────────────────────────────────────────────

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, state, leftElement, rightElement, ...props }, ref) => {
    const paddingLeft  = leftElement  ? (size === 'lg' ? 'pl-10' : 'pl-9') : undefined;
    const paddingRight = rightElement ? (size === 'lg' ? 'pr-10' : 'pr-9') : undefined;

    const inputEl = (
      <input
        ref={ref}
        className={cn(inputVariants({ size, state }), paddingLeft, paddingRight, className)}
        {...props}
      />
    );

    if (!leftElement && !rightElement) return inputEl;

    return (
      <InputRoot leftElement={leftElement} rightElement={rightElement}>
        {inputEl}
      </InputRoot>
    );
  },
);
Input.displayName = 'Input';

// ── InputLabel ────────────────────────────────────────────────────────────────

export const InputLabel = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn('text-sm font-medium text-neutral-200 mb-1.5 block', className)}
      {...props}
    />
  ),
);
InputLabel.displayName = 'InputLabel';

// ── InputHint ─────────────────────────────────────────────────────────────────

export interface InputHintProps extends HTMLAttributes<HTMLParagraphElement> {
  state?: 'default' | 'error' | 'success';
}

export const InputHint = forwardRef<HTMLParagraphElement, InputHintProps>(
  ({ className, state = 'default', ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'mt-1.5 text-xs leading-snug',
        state === 'error'   && 'text-error-400',
        state === 'success' && 'text-success-400',
        state === 'default' && 'text-neutral-500',
        className,
      )}
      {...props}
    />
  ),
);
InputHint.displayName = 'InputHint';

// ── InputGroup (label + input + hint in a single block) ───────────────────────

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col', className)} {...props} />
  ),
);
InputGroup.displayName = 'InputGroup';
