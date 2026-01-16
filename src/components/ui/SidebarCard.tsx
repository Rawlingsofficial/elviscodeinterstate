interface SidebarCardProps {
  title: string;
  children: React.ReactNode;
  gradient?: boolean;
}

export function SidebarCard({ title, children, gradient }: SidebarCardProps) {
    function cn(...classes: Array<string | undefined | null | false>): string | undefined {
        const result = classes.filter(Boolean).join(' ');
        return result || undefined;
    }
  return (
    <div className={cn(
      'rounded-2xl p-6 sm:p-8 shadow-md',
      gradient ? 'bg-gradient-to-br from-primary to-[#0d2c4f] text-white' : 'bg-white text-primary'
    )}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}
