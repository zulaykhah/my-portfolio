import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimateOnScroll from './animate-on-scroll';
import { Button } from './ui/button';
import { MoveRight } from 'lucide-react';

export default function HeroSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'wuraola-headshot');

  return (
    <section id="hero" className="py-24 sm:py-32">
      <AnimateOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold font-headline tracking-tighter">
              Wuraola Ogunmola
            </h1>
            <p className="text-xl lg:text-2xl text-accent font-medium font-headline">
              Cloud & DevOps Professional
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Motivated professional with a background in cloud computing, passionate about building robust DevOps pipelines and enhancing cloud services. Eager to collaborate, automate, and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="#contact">
                  Get in Touch <MoveRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={400}
                height={400}
                data-ai-hint={profileImage.imageHint}
                className="rounded-full aspect-square object-cover border-8 border-card shadow-2xl"
                priority
              />
            )}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
