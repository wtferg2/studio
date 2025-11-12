
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
      'Nail trimming',
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
        'Nail trimming',
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
        'Nail trimming',
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
        'haircut': 65,
        'bath-tidy': 55,
        'bath-brush': 50,
    },
    medium: {
        'haircut': 75,
        'bath-tidy': 65,
        'bath-brush': 55,
    },
    large: {
        'haircut': 95,
        'bath-tidy': 80,
        'bath-brush': 65,
    },
    'extra-large': {
        'haircut': 115,
        'bath-tidy': 100,
        'bath-brush': 90,
    },
};
