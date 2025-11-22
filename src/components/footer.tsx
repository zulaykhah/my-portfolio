import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {year} Wuraola Ogunmola. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-2">
           <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/zulaykhah" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/wuraolaogunmola/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <a href="mailto:wuraola.ogunmola@georgebrown.ca" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
