import { cn } from '@/lib/utils';

interface OptionCardProps {
  title: string;
  description?: string;
  icon?: React.ElementType;
  selected?: boolean;
  onClick: () => void;
}

export function OptionCard({ title, description, icon: Icon, selected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full p-5 text-left rounded-xl border transition-all duration-300',
        selected ? 'border-secondary bg-secondary/5' : 'border-gray-200 hover:border-secondary hover:bg-secondary/5'
      )}
    >
      {Icon && <Icon className="w-6 h-6 mb-2 text-primary" />}
      <h3 className="font-bold text-lg text-primary">{title}</h3>
      {description && <p className="text-gray-600 text-sm mt-1">{description}</p>}
    </button>
  );
}
