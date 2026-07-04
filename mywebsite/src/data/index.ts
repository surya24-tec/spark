
import { Project, Blog, Testimonial, Service } from '../types';

export const services: Service[] = [
  {
    id: 'projects',
    title: 'College Projects',
    description: 'We provide complete UG and PG academic projects across multiple technologies and domains.',
    icon: 'Code2',
    features: ['Source Code', 'Project Report', 'Documentation', 'PPT', 'Database Setup', 'Deployment Support'],
    buttonText: 'Request Project',
  },
  {
    id: 'blogs',
    title: 'Technical Blog Writing',
    description: 'We create and publish professional technical blogs that help individuals and businesses improve their online presence.',
    icon: 'FileText',
    features: ['SEO Friendly Articles', 'Technology Blogs', 'AI Blogs', 'Software Development Blogs', 'Career Guidance Articles', 'Custom Blog Content'],
    buttonText: 'Request Blog',
  },
  {
    id: 'websites',
    title: 'Website Development',
    description: 'We design and develop modern, responsive, and user-friendly websites tailored to your business needs.',
    icon: 'Globe',
    features: ['Mobile Friendly', 'Fast Performance', 'Modern Design', 'SEO Optimization', 'Secure Development'],
    buttonText: 'Request Website',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: '2',
    title: 'AI Chatbot',
    description: 'Intelligent chatbot powered by machine learning algorithms.',
    technologies: ['Python', 'TensorFlow', 'FastAPI'],
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'Student Portal',
    description: 'Complete student management system for educational institutions.',
    technologies: ['Angular', 'Spring Boot', 'MySQL'],
    category: 'Java',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
  },
  {
    id: '4',
    title: 'Inventory Management',
    description: 'Real-time inventory tracking and management system.',
    technologies: ['React', 'Python', 'PostgreSQL'],
    category: 'Python',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: '5',
    title: 'College Project Collaboration',
    description: 'Team-based academic project development with modern collaboration tools.',
    technologies: ['Git', 'GitHub', 'VS Code', 'Slack'],
    category: 'College Project',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  },
  {
    id: '6',
    title: 'Campus Management System',
    description: 'Comprehensive system for managing college campus operations and student data.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    category: 'College Project',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
  },
  {
    id: '7',
    title: 'Research & Development Platform',
    description: 'Innovative platform for student research and academic development projects.',
    technologies: ['Python', 'Jupyter', 'R', 'Docker'],
    category: 'College Project',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
  },
];

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'Own Development Portfolio',
    description: 'A comprehensive guide to React fundamentals and best practices.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    link: 'https://surya24-tec.github.io/Portfolio/',
  },
  {
    id: '2',
    title: 'My Development Blog',
    description: 'Learn how to create robust and scalable backend APIs.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop',
    link: 'https://pavibal.github.io/Portfolio/',
  },
  {
    id: '3',
    title: 'Machine Learning for Beginners',
    description: 'An introduction to machine learning concepts and applications.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    link: '#',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Kumar',
    role: 'Final Year Student',
    feedback: 'Excellent project support! They delivered everything on time with complete documentation.',
    rating: 4,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Startup Founder',
    feedback: 'Professional website development service. Highly recommend!',
    rating: 4,
  },
  {
    id: '3',
    name: 'Arun Patel',
    role: 'Research Scholar',
    feedback: 'Great technical content writing. Helped boost my online presence.',
    rating: 5,
  },
];

export const whyChooseUs = [
  'Experienced Development Support',
  'Affordable Pricing',
  'High Quality Deliverables',
  'Complete Documentation',
  'On-Time Delivery',
  'Latest Technologies',
  'Student Friendly Support',
  'Custom Solutions',
];

export const trustBadges = [
  'UG & PG Projects',
  'Website Development',
  'Technical Blog Writing',
  'Project Documentation',
  'Complete Support',
];
