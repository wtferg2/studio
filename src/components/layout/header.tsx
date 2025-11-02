'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PawPrint, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ inSheet }: { inSheet?: boolean }) => (
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
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <PawPrint className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline">Suds n' Wiggles</span>
        </Link>
        <div className="hidden flex-1 items-center justify-end md:flex">
          <NavLinks />
        </div>
        <div className="flex flex-1 justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4 pt-8">
                <Link href="/" className="mb-12 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <PawPrint className="h-8 w-8 text-primary" />
                  <span className="font-bold text-xl font-headline">Suds n' Wiggles</span>
                </Link>
                <NavLinks inSheet />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
