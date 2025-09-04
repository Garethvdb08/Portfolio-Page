
import React from 'react';
import type { CardId } from '../types';
import { GithubIcon, ArrowRightIcon, MailIcon, UserIcon } from './Icons';

const ContentWrapper: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => {
    const titleId = title.replace(/\s+/g, '-').toLowerCase();
    return (
        <div className="bg-huffle-dark rounded-lg p-8 border-2 border-huffle-yellow/50 animate-fade-in-up" role="region" aria-labelledby={titleId}>
            <h2 id={titleId} className="text-3xl font-bold text-huffle-yellow mb-6">{title}</h2>
            {children}
        </div>
    );
};

const AboutContent: React.FC = () => (
    <ContentWrapper title="About Me">
        <div>
            <p className="text-lg text-huffle-gray leading-relaxed">
                Hello! I'm Gareth, a frontend developer with a keen eye for detail and a passion for creating engaging user interfaces. With a background in design principles and modern web technologies, I specialize in turning complex problems into elegant, user-friendly solutions. My goal is to build web applications that are not only visually appealing but also highly performant and accessible. I thrive in collaborative environments and I'm always eager to learn new skills to push the boundaries of what's possible on the web.
            </p>
            <p className="text-lg text-huffle-gray leading-relaxed mt-4">
                When I'm not coding, you can find me on the sports fields playing or watching club rugby, contributing to open-source projects, or diving into new and old music, anime and manga.
            </p>
        </div>
    </ContentWrapper>
);

const SkillPill: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <span className="inline-block bg-huffle-darker border border-huffle-gray/30 text-huffle-light px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-huffle-yellow hover:text-huffle-darker hover:border-huffle-yellow hover:scale-105">
        {children}
    </span>
);

const SkillsContent: React.FC = () => (
    <ContentWrapper title="My Skillset">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold text-huffle-light mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                    <SkillPill>React</SkillPill>
                    <SkillPill>TypeScript</SkillPill>
                    <SkillPill>Next.js</SkillPill>
                    <SkillPill>Tailwind CSS</SkillPill>
                    <SkillPill>HTML</SkillPill>
                    <SkillPill>CSS</SkillPill>
                    <SkillPill>Javascript</SkillPill>
                    <SkillPill>Vite</SkillPill>
                </div>
            </div>
             <div>
                <h3 className="text-xl font-semibold text-huffle-light mb-3">Tools & Design</h3>
                <div className="flex flex-wrap gap-3">
                    <SkillPill>Git & GitHub</SkillPill>
                    <SkillPill>Figma</SkillPill>
                    <SkillPill>Docker</SkillPill>
                    <SkillPill>Vscode</SkillPill>
                    <SkillPill>Claude</SkillPill>
                    <SkillPill>Gemini</SkillPill>
                    <SkillPill>OpenAi</SkillPill>
                    <SkillPill>Bolt Ai</SkillPill>
                </div>
            </div>
        </div>
    </ContentWrapper>
);

const ProjectItem: React.FC<{title: string, description: string, link: string}> = ({title, description, link}) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-huffle-darker p-6 rounded-lg group border border-gray-700 hover:border-huffle-yellow transition-colors duration-300">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <GithubIcon className="w-6 h-6 text-huffle-gray group-hover:text-huffle-yellow transition-colors" aria-hidden="true" />
                <h4 className="text-xl font-bold text-huffle-light group-hover:text-huffle-yellow transition-colors">{title}</h4>
            </div>
            <ArrowRightIcon className="w-6 h-6 text-huffle-gray group-hover:text-huffle-yellow transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </div>
        <p className="mt-2 text-huffle-gray">{description}</p>
    </a>
)

const ProjectsContent: React.FC = () => (
    <ContentWrapper title="Other Projects / What I'm Working On">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectItem 
                title="E-commerce Platform UI" 
                description="A sleek, responsive user interface for a modern online store, built with Next.js and Tailwind CSS. Features product filtering, a dynamic shopping cart, and a streamlined checkout process."
                link="https://github.com/Garethvdb08/E-Commerce-Storefront-UI-v2"
            />
            <ProjectItem 
                title="Task Management App" 
                description="A full-stack task manager allowing real-time collaboration. Built with React and Firebase, it features drag-and-drop functionality, user authentication, and instant updates."
                link="https://github.com/Garethvdb08/kaban-task-manager"
            />
             <ProjectItem 
                title="Portfolio v2 (This site!)" 
                description="The interactive portfolio you're currently exploring. Built from scratch with React and TypeScript to demonstrate modern UI/UX principles, animations, and responsive design."
                link="https://github.com/Garethvdb08/Portfolio-Page"
            />
             <ProjectItem 
                title="Starlight: Animated Landing Page" 
                description="A visually-rich landing page for a fictional app. This project focuses on creating an immersive user journey with fluid animations and scroll-based interactions using Framer Motion."
                link="https://github.com/Garethvdb08/starlight-animated-landing-page"
            />
        </div>
    </ContentWrapper>
);

const ContactContent: React.FC = () => (
    <ContentWrapper title="Get In Touch">
        <p className="text-lg text-huffle-gray leading-relaxed mb-8">
            I'm currently available for freelance opportunities and open to discussing new projects. Whether you have a question or just want to say hi, feel free to reach out. I'm excited to connect with clients on platforms like Upwork and Fiverr!
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=garethvdb18@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-huffle-darker p-4 rounded-lg group border border-gray-700 hover:border-huffle-yellow transition-colors duration-300 flex-1">
                <MailIcon className="w-8 h-8 text-huffle-yellow" aria-hidden="true" />
                <div>
                    <h4 className="font-bold text-huffle-light">Email</h4>
                    <p className="text-huffle-yellow group-hover:underline">garethvdb18@gmail.com</p>
                </div>
            </a>
             <a href="https://github.com/Garethvdb08" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-huffle-darker p-4 rounded-lg group border border-gray-700 hover:border-huffle-yellow transition-colors duration-300 flex-1">
                <GithubIcon className="w-8 h-8 text-huffle-yellow" aria-hidden="true" />
                <div>
                    <h4 className="font-bold text-huffle-light">GitHub</h4>
                    <p className="text-huffle-yellow group-hover:underline">View my code</p>
                </div>
            </a>
        </div>
    </ContentWrapper>
);


const contentMap: Record<CardId, React.ReactElement> = {
    about: <AboutContent />,
    skills: <SkillsContent />,
    projects: <ProjectsContent />,
    contact: <ContactContent />,
};

export const CardContent: React.FC<{ cardId: CardId }> = ({ cardId }) => {
    return contentMap[cardId] || null;
};
