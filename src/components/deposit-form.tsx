'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CreditCard } from 'lucide-react';
import { services } from '@/lib/services';
import { useAuth, useFirestore, useUser } from '@/firebase';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';
import { doc, setDoc, collection } from 'firebase/firestore';
import { sendConfirmationSms } from '@/ai/flows/send-confirmation-sms';


const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  dogName: z.string().min(1, { message: "Please enter your dog's name." }),
  service: z.string({ required_error: 'Please select a service.' }),
});

export function DepositForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const auth = useAuth();
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();

  useEffect(() => {
    if (!user && !isUserLoading) {
      initiateAnonymousSignIn(auth);
    }
  }, [user, isUserLoading, auth]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      dogName: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: 'You must be signed in to make a deposit. Please try again.',
      });
      setIsLoading(false);
      // Attempt to sign in again if the user is not available.
      initiateAnonymousSignIn(auth);
      return;
    }
  
    const [firstName, ...lastNameParts] = values.fullName.split(' ');
    const lastName = lastNameParts.join(' ');
  
    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500));
  
      const clientRef = doc(firestore, 'clients', user.uid);
      await setDoc(clientRef, {
        id: user.uid,
        firstName,
        lastName,
        email: values.email,
        phone: values.phone,
      });
  
      const appointmentsRef = collection(clientRef, 'appointments');
      const appointmentId = doc(appointmentsRef).id; // Generate a new appointment ID
      const appointmentRef = doc(appointmentsRef, appointmentId);
      
      await setDoc(appointmentRef, {
        id: appointmentId,
        clientId: user.uid,
        appointmentDateTime: new Date().toISOString(), // Using current date as placeholder
        serviceType: values.service,
        petName: values.dogName,
        depositAmount: 25.0,
        notes: 'Initial deposit made online.',
      });
  
      toast({
        title: 'Deposit Submitted!',
        description: `Thank you, ${values.fullName}. We've received your deposit for ${values.dogName} and will be in touch shortly to confirm your appointment.`,
      });

      // Send SMS confirmation
      try {
        await sendConfirmationSms({
          to: values.phone,
          body: `Hi ${values.fullName}, your deposit for ${values.dogName}'s grooming appointment has been received. We'll contact you shortly to confirm the date and time. - Suds n' Wiggles`,
        });
        toast({
          title: 'SMS Sent!',
          description: 'A confirmation text has been sent to your phone.',
        });
      } catch (smsError) {
        // Log the error, but don't show a scary error to the user since the main action succeeded.
        console.error('SMS sending failed:', smsError);
        toast({
          variant: 'destructive',
          title: 'SMS Confirmation Failed',
          description: 'Your deposit was received, but we couldn\'t send a text confirmation. Please check your phone number.',
        });
      }

      form.reset();
    } catch (e: any) {
      console.error('Error submitting deposit:', e);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: e.message || 'Could not submit your deposit. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Your Appointment</CardTitle>
        <CardDescription>
          A $25 deposit is required to secure your appointment. This will be
          applied to your final bill.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Jane Doe" {...field} />
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
                    <Input
                      type="email"
                      placeholder="e.g., jane.doe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="e.g., (123) 456-7890"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dogName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dog's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Buddy" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Service</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a grooming service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.name}>
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-stretch">
            <Button type="submit" disabled={isLoading || isUserLoading} className="w-full">
              {isLoading || isUserLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <CreditCard className="mr-2 h-4 w-4" />
              )}
              {isUserLoading ? 'Initializing...' : 'Pay $25 Deposit'}
            </Button>
            <p className="mt-4 text-xs text-muted-foreground text-center">
              Payments are securely processed. We do not store your card
              details.
            </p>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
