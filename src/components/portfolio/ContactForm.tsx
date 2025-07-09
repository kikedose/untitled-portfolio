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

async function search(_formData: FormData) {
  'use server';
  console.log('YEET');
}

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4" action={search}>
      <div>
        <Label className="py-2" htmlFor="name">
          Organization<span className="text-red-500">*</span>
        </Label>
        <Input type="text" id="name" placeholder="John Doe Incorporated" />
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
  );
}
