export default function Palette() {
  return (
    <div className="flex w-full flex-wrap gap-4">
      {[
        'background',
        'foreground',
        'card',
        'card-foreground',
        'popover',
        'popover-foreground',
        'primary',
        'primary-foreground',
        'secondary',
        'secondary-foreground',
        'muted',
        'muted-foreground',
        'accent',
        'accent-foreground',
        'destructive',
        'border',
        'input',
        'ring',
        'chart-1',
        'chart-2',
        'chart-3',
        'chart-4',
        'chart-5',
        'sidebar',
        'sidebar-foreground',
        'sidebar-primary',
        'sidebar-primary-foreground',
        'sidebar-accent',
        'sidebar-accent-foreground',
        'sidebar-border',
        'sidebar-ring',
      ].map((item) => (
        <div
          key={item}
          className={`bg-${item} border-primary h-32 w-32 border border-solid`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
