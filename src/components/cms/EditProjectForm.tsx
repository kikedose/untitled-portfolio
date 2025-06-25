'use client';

// 1. External libraries
import { toast } from 'sonner';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// 2. Types
import type { z } from 'zod';
import { type Project } from '~/lib/types/project';

// 3. Schemas
import EditProjectSchema from '~/lib/schemas/EditProjectSchema';

// 4. UI Components
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Textarea } from '~/components/ui/textarea';

// 5. Icons
import { PlusCircle, X } from 'lucide-react';

type EditProjectFormProps = {
  currentProject: Project;
};

export default function EditProjectForm({
  currentProject,
}: EditProjectFormProps) {
  const { title, country, year, description, links } = currentProject;

  const form = useForm<z.infer<typeof EditProjectSchema>>({
    resolver: zodResolver(EditProjectSchema),
    defaultValues: {
      title: title,
      country: country,
      year: year,
      description: description,
      links: links,
    },
  });

  // Sets up field array for dynamic 'links' inputs
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'links',
  });

  const onSubmit = (data: z.infer<typeof EditProjectSchema>) => {
    toast('Yeet yeet motherfucker!');
    console.log({ data });
  };

  return (
    <div className="grid min-h-dvh w-full place-items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Title<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormDescription>
                  This is your project display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Country<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Year<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Year" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea maxLength={560} placeholder="Lorem..." {...field} />
                </FormControl>
                <FormDescription>
                  {form.getValues('description').length}/560
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Links Section */}
          <div className="flex items-center justify-between space-y-4">
            <h3 className="text-base font-medium">Links</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => append({ text: '', url: '' })}
            >
              <PlusCircle className="h-4 w-4" />
              Add Link
            </Button>
          </div>

          {fields.length === 0 && (
            <p className="text-muted-foreground text-sm">
              No links added yet. Click &quot;Add Link&quot; to add one.
            </p>
          )}

          {fields.map((field, index) => (
            <div key={field.id} className="space-y-2 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Link #{index + 1}</h4>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => remove(index)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove link</span>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name={`links.${index}.text`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link Text</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`links.${index}.url`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
