
export type DogSize = 'small' | 'medium' | 'large' | 'extra-large';

export type ServiceId = 'haircut' | 'bath-tidy' | 'bath-brush' | 'puppy-package';

export const services: {
  id: ServiceId;
  name: string;
  description: string;
  includes: string[];
}[] = [
  {
    id: 'haircut',
    name: 'Haircut',
    description:
      'Length off the body. The complete grooming experience to have your pup looking and feeling their best.',
    includes: [
      'Bath with premium shampoo & conditioner',
      'Blow-dry & brush out',
      'Nail Trim / Buff',
      'Ear cleaning',
      'Anal gland expression',
      'Puppy cuddles',
    ],
  },
  {
    id: 'bath-tidy',
    name: 'Bath & Tidy',
    description:
      "A great in-between groom option. Includes a refreshing bath and a light trim of the face, paws, and sanitary areas.",
    includes: [
        'Bath with premium shampoo & conditioner',
        'Blow-dry & brush out',
        'Nail Trim / Buff',
        'Ear cleaning',
        'Anal gland expression',
        'Puppy cuddles',
    ],
  },
  {
    id: 'bath-brush',
    name: 'Bath & Brush',
    description:
      'A refreshing bath and brush-out to keep your dog clean and happy between full grooms.',
    includes: [
        'Bath with premium shampoo & conditioner',
        'Blow-dry & brush out',
        'Nail Trim / Buff',
        'Ear cleaning',
        'Anal gland expression',
        'Puppy cuddles',
    ],
  },
];

export const dogSizes: { id: DogSize; label: string; weight: string }[] = [
    { id: 'small', label: 'Small', weight: '0-20 lbs' },
    { id: 'medium', label: 'Medium', weight: '21-50 lbs' },
    { id: 'large', label: 'Large', weight: '51-75 lbs' },
    { id: 'extra-large', label: 'Extra Large', weight: '75+ lbs' },
];

export const servicePrices: Record<DogSize, Partial<Record<ServiceId, number>>> = {
    small: {
        'haircut': 75,
        'bath-tidy': 65,
        'bath-brush': 60,
    },
    medium: {
        'haircut': 85,
        'bath-tidy': 75,
        'bath-brush': 65,
    },
    large: {
        'haircut': 105,
        'bath-tidy': 90,
        'bath-brush': 75,
    },
    'extra-large': {
        'haircut': 125,
        'bath-tidy': 110,
        'bath-brush': 100,
    },
};

export type AddonService = {
  name: string;
  price: string;
};

export type AddonCategory = {
  id: string;
  title: string;
  services: AddonService[];
};

export const appointmentAddonsList: AddonService[] = [
  { name: 'Teeth Cleaning', price: '10' },
  { name: 'Flea Shampoo*', price: '15' },
  { name: 'Flea Pill', price: '20' },
  { name: 'Deshed*', price: '1/min'},
  { name: 'Demat*', price: '1/min'},
  { name: 'Shave Down*', price: '10-20'},
  { name: 'Express Groom', price: '20' },
  { name: 'Special Handling*', price: '15' },
  { name: 'No Call / No Show', price: '35' },
];



export const additionalServices: AddonCategory[] = [
  {
    id: 'creative-grooming',
    title: 'Creative Grooming',
    services: [
      { name: 'Hair Dye - Paws', price: '10' },
      { name: 'Hair Dye - Ears & Tail', price: '20' },
      { name: 'Hair Dye - Full Body', price: '40' },
    ],
  },
  {
    id: 'daycare',
    title: 'Daycare',
    services: [
      { name: 'Half Day', price: '20' },
      { name: 'Full Day', price: '35' },
    ],
  },
  {
    id: 'walk-ins',
    title: 'Walk-In Services',
    services: [
      { name: 'Anal Glands', price: '20' },
      { name: 'Nail Trim', price: '20' },
      { name: 'Face Trim', price: '25' },
      { name: 'Teeth Cleaning', price: '15' },
      { name: 'Groom Surcharge', price: '20' },

    ],
  },
  {
    id: 'add-ons',
    title: 'Appointment Add-Ons',
    services: appointmentAddonsList,
  },
];
