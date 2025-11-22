import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimateOnScroll from './animate-on-scroll';
import { Button } from './ui/button';


const projects = [
  {
    title: 'DevOps Pipeline Automation',
    description: 'Conceptualized and designed a CI/CD pipeline using Jenkins and Terraform to automate application deployment to a cloud environment.',
    tags: ['Jenkins', 'Terraform', 'CI/CD', 'Automation'],
    imageId: 'project-devops',
    githubUrl: 'https://github.com/zulaykhah',
  },
  {
    title: 'Windows Server Administration',
    description: 'Set up a Windows Server environment from scratch within a virtual machine, configuring core services like DNS and DHCP for network management.',
    tags: ['Windows Server', 'VM', 'DNS', 'DHCP', 'Networking'],
    imageId: 'project-windows-server',
    githubUrl: 'https://github.com/zulaykhah',
  },
  {
    title: 'Digital Marketing Growth',
    description: 'Developed and executed a comprehensive digital marketing strategy utilizing SEO, Google Ads, and social media, achieving a 30% increase in key metrics over 3 months.',
    tags: ['SEO', 'Google Ads', 'Google Analytics'],
    imageId: 'project-digital-marketing',
  },
  {
    title: 'Network Packet Tracing Lab',
    description: 'A hands-on project involving packet tracing by connecting fiber optic wires to appropriate ethernet ports to analyze network traffic and connectivity.',
    tags: ['Networking', 'Packet Tracing', 'Fiber Optics'],
    imageId: 'project-networking',
    githubUrl: 'https://github.com/zulaykhah',
  },
];


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <AnimateOnScroll className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline tracking-tighter">My Projects</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">A selection of my recent work and personal projects.</p>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
          return (
            <AnimateOnScroll key={project.title} delay={index * 100}>
              <Card className="h-full flex flex-col group overflow-hidden">
                <CardHeader>
                  {projectImage && (
                    <div className="aspect-video overflow-hidden rounded-lg border -mt-2 -mx-2 mb-4">
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        width={600}
                        height={400}
                        data-ai-hint={projectImage.imageHint}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mt-4 mb-6">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                   {project.githubUrl && (
                     <Button variant="outline" asChild className="w-fit">
                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                         View on GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
                       </a>
                     </Button>
                   )}
                </CardContent>
              </Card>
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
}
