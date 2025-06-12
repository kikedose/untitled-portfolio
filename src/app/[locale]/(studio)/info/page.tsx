import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Textarea } from '~/components/ui/textarea';
import { getDictionary } from '~/lib/l10n';

export default async function Info({
  params,
}: {
  params: Promise<{ locale: 'en' | 'es' }>;
}) {
  const { locale } = await params;
  const d = await getDictionary('studio', locale);

  return (
    <div>
      <div className="flex flex-col gap-4 pt-8 pb-8 md:flex-row md:pt-0">
        <h2 className="mx-auto max-w-[12ch] text-center text-3xl/12 font-medium tracking-tighter md:mx-0 md:text-left md:text-5xl/14 md:font-semibold">
          {d.info.title}
        </h2>
        <p className="max-w-lg text-center md:text-right">
          {d.info.description}
        </p>
      </div>

      <div className="border-foreground rounded-md border-2 border-solid p-8">
        <form className="flex max-w-lg flex-col gap-4">
          <>
            <Label htmlFor="name">Organization</Label>
            <Input type="text" id="name" placeholder="Enterprise" />
          </>

          <>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </>

          <>
            <Label htmlFor="subject">Subject</Label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Subject</SelectLabel>

                  <SelectItem value="Visual Identity">
                    Visual Identity
                  </SelectItem>
                  <SelectItem value="Branding">Branding</SelectItem>
                  <SelectItem value="UI Design">UI Design</SelectItem>
                  <SelectItem value="Web App Development">
                    Web App Development
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </>

          <Label>Yeet</Label>
          <Textarea />

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}
