'use client';

import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = (theme: string | undefined) => {
    if (theme === 'light') {
      setTheme('dark');
      return;
    }

    if (theme === 'dark') {
      setTheme('light');
      return;
    }
  };

  return (
    <span>
      <button
        className="cursor-pointer hover:underline hover:decoration-dotted"
        onClick={() => handleSwitchTheme(theme)}
        suppressHydrationWarning
      >
        [{theme ?? 'theme'}]
      </button>
    </span>
  );
}
