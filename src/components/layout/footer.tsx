import { PawPrint, Facebook, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <PawPrint className="h-6 w-6 text-primary hidden sm:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Suds n' Wiggles. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
            <Link href="#" aria-label="Facebook page">
                <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram page">
                <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="mailto:hello@pawsitiveimage.com" aria-label="Email us">
                <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
        </div>
      </div>
    </footer>
  );
}
