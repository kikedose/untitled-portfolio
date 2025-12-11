import MaskedText from '~/components/features/masked-text';
import { getDictionary } from '~/lib/l10n';

export default async function Home() {
  const d = await getDictionary('en');

  return (
    <>
      <div className="mx-4 mt-24 mb-4">
        <MaskedText
          foregroundText={d.home.hero_foreground}
          backgroundText={d.home.hero_background}
        />
      </div>
    </>
  );
}
