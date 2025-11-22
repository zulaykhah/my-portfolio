
import { type ResumeInformationOutput } from '@/ai/flows/resume-information-extraction.types';

import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import ExperienceSection from '@/components/experience-section';
import EducationSection from '@/components/education-section';
import ContactSection from '@/components/contact-section';

export default async function Home() {
  const resumeData: ResumeInformationOutput = {
    experience: [
      "Customer Support Representative,Oct 2020 – Aug 2022,SupportChamp,Nigeria,Provided timely support via email, phone, and live chat.",
      "Mathematics Teacher,Oct 2015 – Oct 2016,Maitama Girls Academy,Nigeria,Planned, scheduled and led classes in Mathematics"
    ],
    education: [
      "Cloud Computing Technologies Graduate Certificate,Sept 2025 - Sept 2026,George Brown College, Toronto, ON",
      "Digital Marketing Specialist,2024,Jelly Academy",
      "Computer Science, Bachelor in Technology,Oct 2009 - Oct 2015,Ladoke Akintola University of Technology, Nigeria"
    ],
    skills: [
      "Python", "JavaScript", "HTML", "CSS", "Git", "GitHub", "CI/CD", "Docker", "Jenkins", "Terraform", "Nexus", "Azure", "Cloud Computing", "SEO", "Google Ads", "Google Analytics", "Social Media Strategy", "Problem Solving", "Communication", "Teamwork"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection skills={resumeData.skills} />
        <ExperienceSection experience={resumeData.experience} />
        <EducationSection education={resumeData.education} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
