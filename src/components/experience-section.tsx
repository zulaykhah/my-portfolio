import AnimateOnScroll from './animate-on-scroll';

type ExperienceSectionProps = {
  experience: string[];
};

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  if (!experience || experience.length === 0) {
    return null;
  }

  const parseExperience = (item: string) => {
    const parts = item.split(/,(?![^()]*\))/); // Split by comma, but not inside parentheses
    const role = parts[0] || '';
    const date = parts[1] || '';
    const company = parts[2] || '';
    const location = parts[3] || '';
    const description = parts.slice(4).join(', ').trim();
    
    return { role, date, company, location, description };
  }

  return (
    <section id="experience" className="py-24 sm:py-32">
      <AnimateOnScroll className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline tracking-tighter">Professional Experience</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">My career journey and professional growth.</p>
      </AnimateOnScroll>

      <div className="relative pl-6">
        <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"></div>
        
        {experience.map((item, index) => {
           const { role, date, company, location, description } = parseExperience(item);

          return(
            <AnimateOnScroll key={index} delay={index * 150} className="mb-12">
              <div className="relative flex items-start group">
                <div className="absolute left-0 top-1 w-4 h-4 bg-background border-2 border-accent rounded-full -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 transition-transform group-hover:scale-125"></div>
                <div className={ `w-full md:w-1/2 ${ index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto md:text-right' }` }>
                  <div className="space-y-1">
                    <p className="font-semibold text-accent">{date}</p>
                    <h3 className="text-2xl font-bold font-headline">{role}</h3>
                    <p className="font-medium text-muted-foreground">{company}, {location}</p>
                    {description && <p className="text-muted-foreground pt-2">{description}</p>}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
}
