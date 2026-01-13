
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact Us' },
];

interface NavLinksProps {
    inSheet?: boolean;
    onLinkClick: () => void;
}

export function NavLinks({ inSheet = false, onLinkClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={cn(
        'flex items-center gap-6', 
        inSheet && 'flex-col items-start gap-8'
    )}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'font-medium transition-colors hover:text-primary',
            pathname === link.href ? 'text-primary' : 'text-muted-foreground',
            inSheet ? 'text-lg' : 'text-sm'
          )}
          onClick={onLinkClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
