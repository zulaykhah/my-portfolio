import AnimateOnScroll from './animate-on-scroll';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type SkillsSectionProps = {
  skills: string[];
};

const skillCategories: Record<string, string[]> = {
  'Languages': ['Python', 'JavaScript', 'HTML', 'CSS'],
  'DevOps & Cloud': ['CI/CD', 'Docker', 'Jenkins', 'Terraform', 'Nexus', 'Azure', 'Cloud Computing'],
  'Version Control': ['Git', 'GitHub'],
  'Digital Marketing': ['SEO', 'Google Ads', 'Google Analytics', 'Social Media Strategy'],
  'Other': ['Problem Solving', 'Communication', 'Teamwork', 'Organization'],
};

function categorizeSkills(skills: string[]): Record<string, string[]> {
  const categorized: Record<string, string[]> = {
    'Languages': [],
    'DevOps & Cloud': [],
    'Version Control': [],
    'Digital Marketing': [],
    'Other': [],
  };
  const allKnownSkills = new Set(Object.values(skillCategories).flat());

  skills.forEach(skill => {
    let found = false;
    for (const category in skillCategories) {
      if (skillCategories[category].some(s => skill.toLowerCase().includes(s.toLowerCase()))) {
        categorized[category].push(skill);
        found = true;
        break;
      }
    }
    if (!found) {
        // Simple fallback for uncategorized skills
        if (['python', 'javascript', 'html', 'css'].some(lang => skill.toLowerCase().includes(lang))) {
             categorized['Languages'].push(skill);
        } else if (['git', 'github'].some(vc => skill.toLowerCase().includes(vc))) {
            categorized['Version Control'].push(skill);
        } else {
            categorized['Other'].push(skill);
        }
    }
  });

  return categorized;
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const categorizedSkills = categorizeSkills(skills);

  return (
    <section id="skills" className="py-24 sm:py-32">
       <AnimateOnScroll className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline tracking-tighter">Technical Skills</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">My proficiency in various technologies and tools.</p>
      </AnimateOnScroll>

      <AnimateOnScroll delay={100}>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(categorizedSkills).map(([category, skillList]) => (
                skillList.length > 0 && (
                  <div key={category}>
                    <h3 className="font-headline text-xl font-semibold mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge key={index} variant="default" className="text-sm bg-primary/80 hover:bg-primary text-primary-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimateOnScroll>
    </section>
  );
}
