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

  async function search(_formData: FormData) {
    'use server';
    console.log('YEET');
  }

  return (
    <div>
      <div className="pt-8 pb-8 md:pt-0">
        <h2 className="mx-auto max-w-[12ch] text-center text-3xl/12 font-medium tracking-tighter md:mx-0 md:text-left md:text-5xl/14 md:font-semibold">
          {d.info.title}
        </h2>

        <p className="max-w-lg py-8 text-center md:text-left">
          {d.info.description}
        </p>
      </div>

      <div className="border-foreground flex flex-col gap-4 rounded-md border-2 border-solid p-8 md:flex-row">
        <div className="grid place-items-center md:w-1/2">
          <div className="md:w-1/2 xl:w-2/3">
            <div className="w-sm py-2 text-right text-4xl">
              Let&apos;s talk about your next project!
            </div>
            <div className="w-sm text-right">
              {[
                'visual identity',
                'creative consultancy',
                'naming',
                'ui/ux',
                'web design',
                'web app develpment',
              ].map((service) => (
                <span
                  key={service}
                  className="border-primary text-primary m-1 inline-block rounded-md border p-2 text-sm"
                >
                  #{service.replaceAll(' ', '_')}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <form className="flex flex-col gap-4" action={search}>
            <div>
              <Label className="py-2" htmlFor="name">
                Organization<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="John Doe Incorporated"
              />
            </div>

            <div>
              <Label className="py-2" htmlFor="email">
                Email<span className="text-red-500">*</span>
              </Label>
              <Input type="email" id="email" placeholder="john.doe@inc.com" />
            </div>

            <div>
              <Label className="py-2" htmlFor="subject">
                Subject<span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="I'm intrested in..." />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Subject</SelectLabel>
                    <SelectItem value="Brand">Brand Services</SelectItem>
                    <SelectItem value="UI/UX">UI/UX</SelectItem>
                    <SelectItem value="Web">Web App Development</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="py-2">Message</Label>
              <Textarea placeholder="Tell us about your goals!" />
            </div>

            <div>
              <Label className="py-2" htmlFor="mobile">
                Mobile
              </Label>
              <span className="inline-flex gap-4">
                <Input type="text" placeholder="+54" className="w-16" />
                <Input type="tel" id="mobile" placeholder="351 202-3227" />
              </span>
            </div>

            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
