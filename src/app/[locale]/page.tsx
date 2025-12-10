import MaskedText from '~/components/masked-text';
import { getDictionary } from '~/lib/l10n';

export default async function Home() {
  const d = await getDictionary('en');

  return (
    <div className="mt-24 mb-8">
      <MaskedText
        foregroundText={d.home.hero_foreground}
        backgroundText={d.home.hero_background}
      />
    </div>
  );
}
