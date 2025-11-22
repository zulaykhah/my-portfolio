import AnimateOnScroll from './animate-on-scroll';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

type EducationSectionProps = {
  education: string[];
};

export default function EducationSection({ education }: EducationSectionProps) {
  if (!education || education.length === 0) {
    return null;
  }
  
  const parseEducation = (item: string) => {
    const parts = item.split(',');
    const degree = parts[0] || '';
    const date = parts[1] || '';
    const school = parts.slice(2).join(', ').trim();
    return { degree, date, school };
  }


  return (
    <section id="education" className="py-24 sm:py-32">
      <AnimateOnScroll className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline tracking-tighter">Education & Certifications</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">My academic background and qualifications.</p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item, index) => {
          const { degree, date, school } = parseEducation(item);
          return (
            <AnimateOnScroll key={index} delay={index * 100}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{degree}</CardTitle>
                  <CardDescription className="!mt-2">
                    <p className="font-semibold text-accent">{date}</p>
                    <p className="text-muted-foreground">{school}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
}
