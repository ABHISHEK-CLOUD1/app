// Mock data for Abhishek Mishra's Portfolio

export const personalInfo = {
  name: "Abhishek Mishra",
  title: "Software Engineer",
  tagline: "Building digital experiences that help businesses grow",
  email: "abhishek010601@gmail.com",
  instagram: "https://www.instagram.com/abhishek_x64.exe?igsh=azMwbmJ1Y2J5end2&utm_source=qr",
  linkedin: "https://www.linkedin.com/in/abhishek-mishra-a749b3220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  about: "I'm a software engineer passionate about crafting high-quality websites that drive business growth. With expertise in modern web technologies, I help businesses establish their online presence through clean, functional, and user-friendly web solutions."
};

export const services = [
  {
    id: 1,
    title: "Website Design",
    description: "Creating visually appealing and intuitive designs that represent your brand and engage your audience.",
    icon: "Palette"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Building robust, scalable, and performant websites using modern technologies and best practices.",
    icon: "Code"
  },
  {
    id: 3,
    title: "Responsive Solutions",
    description: "Ensuring your website looks and works perfectly across all devices, from mobile to desktop.",
    icon: "Smartphone"
  },
  {
    id: 4,
    title: "Business Growth",
    description: "Developing web solutions that help attract customers and grow your business online.",
    icon: "TrendingUp"
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern online store with seamless shopping experience",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Business Website",
    description: "Professional corporate website for service industry",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "FastAPI"]
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Creative portfolio showcasing design work",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Framer Motion"]
  },
  {
    id: 4,
    title: "Restaurant Website",
    description: "Appetizing website with online ordering system",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    technologies: ["React", "Express", "PostgreSQL"]
  }
];

export const stats = [
  { label: "Projects Completed", value: "25+" },
  { label: "Happy Clients", value: "20+" },
  { label: "Years Experience", value: "3+" },
  { label: "Technologies", value: "10+" }
];

// Mock function to simulate form submission
export const submitContactForm = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted (mock):", formData);
      resolve({ success: true, message: "Thank you! I'll get back to you soon." });
    }, 1000);
  });
};
