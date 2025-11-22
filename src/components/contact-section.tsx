"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
// import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import AnimateOnScroll from './animate-on-scroll';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  // const { toast } = useToast();
  const [formStatus, setFormStatus] = useState<{ message: string; success: boolean | null }>({ message: '', success: null });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setFormStatus({ message: '', success: null });
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const result = await submitContactForm(null, formData);
      if (result.success) {
        setFormStatus({ message: result.message, success: true });
        form.reset();
      } else {
        setFormStatus({ message: result.message, success: false });
        if(result.errors) {
            Object.entries(result.errors).forEach(([field, errors]) => {
                if(errors) {
                    form.setError(field as keyof ContactFormValues, { type: 'server', message: errors[0] });
                }
            });
        }
      }
    } catch (error) {
      // toast({
      //   variant: 'destructive',
      //   title: 'Submission Error',
      //   description: 'An unexpected error occurred. Please try again later.',
      // });
      setFormStatus({ message: 'An unexpected error occurred. Please try again later.', success: false });
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <AnimateOnScroll className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline tracking-tighter">Contact Me</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Have a question or want to work together? Drop me a line.</p>
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me how I can help." {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {formStatus.message && (
                  <div className={`text-sm text-center ${formStatus.success ? 'text-green-600' : 'text-destructive'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </AnimateOnScroll>
    </section>
  );
}
