import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'w-full px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300',
        variant === 'primary'
          ? 'bg-gradient-to-r from-secondary to-amber-500 text-primary hover:shadow-lg'
          : 'border-2 border-primary text-primary hover:bg-primary/5',
        className
      )}
    >
      {children}
    </button>
  );
}

