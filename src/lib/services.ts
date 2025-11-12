export type DogSize = 'small' | 'medium' | 'large' | 'extra-large';

export type ServiceId = 'basic-bath' | 'full-groom' | 'puppy-package' | 'deluxe-spa';

export const services: {
  id: ServiceId;
  name: string;
  description: string;
  includes: string[];
}[] = [
  {
    id: 'basic-bath',
    name: 'Basic Bath & Brush',
    description:
      'A refreshing bath and brush-out to keep your dog clean and happy between full grooms.',
    includes: [
      'Premium shampoo & conditioner',
      'Fluff dry & brush-out',
      'Nail trimming',
      'Ear cleaning',
    ],
  },
  {
    id: 'full-groom',
    name: 'Full Service Groom',
    description:
      'The complete spa experience. Includes a bath, haircut, and all the essential extras.',
    includes: [
      'All Basic Bath services',
      'Styled haircut to your preference',
      'Sanitary trim',
      'Paw pad trim',
    ],
  },
  {
    id: 'puppy-package',
    name: "Puppy's First Groom",
    description:
      "A gentle introduction to grooming for your new family member (for puppies under 6 months).",
    includes: [
      'Gentle bath & low-heat dry',
      'Light trim around face, paws, and sanitary area',
      'Nail trimming',
      'Lots of positive reinforcement!',
    ],
  },
   {
    id: 'deluxe-spa',
    name: 'Deluxe Spa Package',
    description: 'The ultimate pampering session for when your dog deserves some extra love.',
    includes: [
        'All Full Service Groom features',
        'De-shedding treatment or deep-conditioning mask',
        'Teeth brushing & breath freshener',
        'Paw balm treatment',
    ]
   }
];

export const dogSizes: { id: DogSize; label: string; weight: string }[] = [
    { id: 'small', label: 'Small', weight: '0-20 lbs' },
    { id: 'medium', label: 'Medium', weight: '21-50 lbs' },
    { id: 'large', label: 'Large', weight: '51-75 lbs' },
    { id: 'extra-large', label: 'Extra Large', weight: '75+ lbs' },
];

export const servicePrices: Record<DogSize, Record<ServiceId, number>> = {
    small: {
        'basic-bath': 45,
        'full-groom': 75,
        'puppy-package': 35,
        'deluxe-spa': 95,
    },
    medium: {
        'basic-bath': 55,
        'full-groom': 85,
        'puppy-package': 35,
        'deluxe-spa': 105,
    },
    large: {
        'basic-bath': 65,
        'full-groom': 95,
        'puppy-package': 35,
        'deluxe-spa': 115,
    },
    'extra-large': {
        'basic-bath': 75,
        'full-groom': 105,
        'puppy-package': 35,
        'deluxe-spa': 125,
    },
};
