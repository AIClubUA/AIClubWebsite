'use client';

import { useSidebar } from '@/components/sidebar-provider';
import { cn } from '@/lib/utils';
import Image from 'next/image';
// import { Button } from './ui/button';

export function MainContent() {
  const { isOpen } = useSidebar();

  return (
    <main className={cn('flex-1 transition-all duration-300', isOpen ? 'blur-sm' : '')}>
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-16 text-center md:px-6">
        <Image
          alt="Logo"
          src="/logo.png"
          height="96"
          width="96"
          className="mb-8 h-24 w-24 rounded-full bg-background"
        />
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
          Welcome to the University of Alabama AI Club
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Join us to explore the future of Artificial Intelligence! Our club is dedicated to fostering a community of AI
          enthusiasts, providing opportunities for learning, collaboration, and innovation. Whether you are a beginner
          or an expert, we have something for everyone. Participate in workshops, hackathons, and guest lectures to
          enhance your skills and network with like-minded individuals. Let&apos;s shape the future of AI together!
        </p>
        {/* <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg">Join Now</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div> */}
      </div>
    </main>
  );
}
