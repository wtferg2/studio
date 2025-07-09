'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestGroomingStyle, type SuggestGroomingStyleOutput } from '@/ai/flows/suggest-grooming-style';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, Dog } from 'lucide-react';

const formSchema = z.object({
  dogBreed: z.string().min(2, { message: 'Please enter a dog breed.' }),
  ownerPreferences: z.string().min(10, { message: 'Please describe your preferences in a bit more detail.' }),
});

export function StyleSuggester() {
  const [suggestion, setSuggestion] = useState<SuggestGroomingStyleOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dogBreed: '',
      ownerPreferences: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSuggestion(null);

    try {
      const result = await suggestGroomingStyle(values);
      setSuggestion(result);
    } catch (e) {
      console.error(e);
      setError('Sorry, we couldn\'t generate a suggestion at this time. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold font-headline">Find the Perfect Look for Your Pup!</h2>
        <p className="text-muted-foreground text-lg">
          Not sure what style to choose? Our AI-powered grooming expert can help! Just tell us a bit about your dog and your preferences, and we'll suggest the perfect 'do.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Grooming Style Suggester</CardTitle>
            <CardDescription>Fill out the form to get an AI-powered recommendation.</CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="dogBreed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dog Breed</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Poodle, Golden Retriever" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ownerPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Preferences</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Low maintenance, fluffy, short for summer, keep the teddy bear look" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                  Get AI Suggestion
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
      <div className="flex items-center justify-center min-h-[300px] lg:min-h-full">
        {isLoading && (
          <div className="text-center text-muted-foreground space-y-4 animate-fade-in">
             <Dog className="mx-auto h-16 w-16 animate-bounce text-primary" />
             <p className="font-semibold">Fetching the paw-fect style...</p>
          </div>
        )}
        {error && <p className="text-destructive animate-fade-in">{error}</p>}
        {suggestion && (
          <Card className="w-full animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Sparkles className="text-accent" /> AI Suggestion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-lg font-headline text-primary">{suggestion.suggestedStyle}</h3>
                <p className="text-sm text-muted-foreground mt-1">{suggestion.reasoning}</p>
              </div>
            </CardContent>
             <CardFooter>
                <p className="text-xs text-muted-foreground">This is an AI-generated suggestion. Our professional groomers will work with you to achieve the perfect result!</p>
             </CardFooter>
          </Card>
        )}
        {!isLoading && !suggestion && !error && (
            <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg w-full">
                <Dog className="mx-auto h-16 w-16 mb-4 text-primary/50" />
                <p className="font-semibold">Your style suggestion will appear here!</p>
            </div>
        )}
      </div>
    </div>
  );
}
