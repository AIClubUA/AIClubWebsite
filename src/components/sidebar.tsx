'use client';

import { useSidebar } from '@/components/sidebar-provider';
import { cn } from '@/lib/utils';
import { Home, Calendar, Info, FolderKanban, BookOpen, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'Resources', href: '/resources', icon: BookOpen },
];

export function Sidebar() {
  const { isOpen, toggle, close } = useSidebar();

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-40 md:left-6 md:top-6"
        onClick={toggle}
        aria-label="Toggle Menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={close}
      />

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-72 border-r bg-background p-6 shadow-lg transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image alt="A Logo" src="/logo.png" height="32" width="32" className="h-8 w-8 rounded-full bg-background" />
            <span className="text-lg font-bold text-primary">UA AI Club</span>
          </div>
          <Button variant="ghost" size="icon" onClick={close} aria-label="Close Menu">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-8 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              onClick={close}
            >
              <item.icon className="h-5 w-5 text-primary" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
