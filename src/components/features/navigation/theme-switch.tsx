'use client';

// import { useEffect, useState } from 'react';
import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  // const [mounted, setMounted] = useState(false);
  //
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const mounted = useSyncExternalStore(
    () => () => {}, // empty subscribe
    () => true, // client value
    () => false // server value
  );
  const handleSwitchTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return <span>[ theme ]</span>;
  }

  return (
    <>
      <span className="border-background bg-foreground mr-1 inline-block h-3 w-3 rounded-full border border-solid align-middle" />
      <button
        className="cursor-pointer hover:underline hover:decoration-dotted"
        onClick={() => handleSwitchTheme()}
      >
        [ {resolvedTheme ?? 'theme'} ]
      </button>
    </>
  );
}
