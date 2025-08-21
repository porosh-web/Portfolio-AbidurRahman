import React from 'react';
import './index.css';
import { Mail, Linkedin, User, Zap, MessageCircle, Palette, Bot, Globe, Rocket, Code, Grid, FileText, ShoppingCart, Database, Layout, Kanban, CheckCircle, Briefcase, Share2, Feather } from 'react-icons/fi';

const App = () => {
    // A simple function to merge Tailwind classes
    const twMerge = (...classes) => classes.filter(Boolean).join(' ');

    // Button Component with Animation and Vibrant Gradients
    const Button = ({ children, className, variant = 'default', size = 'default', ...props }) => {
      const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
      const variantClasses = {
        default: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 focus:ring-purple-500 shadow-lg',
        outline: 'bg-transparent border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-50 focus:ring-fuchsia-400',
      };
      const sizeClasses = {
        default: 'h-12 px-8 py-3 text-base',
        lg: 'h-14 px-10 py-4 text-lg',
      };
      return (
        <button
          className={twMerge(baseClasses, variantClasses[variant], sizeClasses[size], className)}
          {...props}
        >
          {children}
        </button>
      );
    };

    // Reusable Section Component with Animation
    const Section = ({ id, children, className, title, description, titleClass, descriptionClass }) => (
      <section id={id} className={twMerge('py-24 relative overflow-hidden', className)}>
        <div className="container mx-auto px-4 relative z-10">
          {title && (
            <div className="text-center mb-16">
              <h2 className={twMerge("text-4xl md:text-5xl font-extrabold mb-4 animate-fadeInUp", titleClass)}>{title}</h2>
              {description && <p className={twMerge("text-lg md:text-xl max-w-2xl mx-auto animate-fadeInUp delay-100", descriptionClass)}>{description}</p>}
            </div>
          )}
          {children}
        </div>
      </section>
    );

    // Service Card Component with Vibrant Colors
    const ServiceCard = ({ icon: Icon, title, items }) => (
      <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.02] border border-slate-100 animate-fadeInUp delay-200">
        <div className="p-5 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white mb-6 shadow-md">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <ul className="text-slate-600 text-left list-none p-0 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-fuchsia-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );

    // Pillar Card Component with Colorful Icons
    const PillarCard = ({ icon: Icon, title, description }) => (
      <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.02] border border-slate-100 animate-fadeInUp delay-200">
        <div className="p-5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white mb-6 shadow-md">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    );

    // Animated Background for various sections
    const AnimatedBackground = () => (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-fuchsia-500 rounded-full mix-blend-lighten opacity-30 filter blur-3xl animated-bg-1"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-lighten opacity-30 filter blur-3xl animated-bg-2"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-yellow-400 rounded-full mix-blend-lighten opacity-30 filter blur-3xl animated-bg-3"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-orange-500 rounded-full mix-blend-lighten opacity-30 filter blur-3xl animated-bg-4"></div>
        <div className="absolute top-3/4 left-1/4 w-56 h-56 bg-indigo-500 rounded-full mix-blend-lighten opacity-30 filter blur-3xl animated-bg-5"></div>
      </div>
    );

    const tools = [
      { name: 'Canva', icon: Palette },
      { name: 'ChatGPT', icon: Bot },
      { name: 'Claude', icon: Bot },
      { name: 'DALL-E', icon: Globe },
      { name: 'Adobe Firefly', icon: Rocket },
      { name: 'Heygen', icon: Code },
      { name: 'Sora', icon: Rocket },
      { name: 'CapCut', icon: Grid },
      { name: 'Google Workspace', icon: FileText },
      { name: 'Microsoft Office', icon: FileText },
      { name: 'Shopify', icon: ShoppingCart },
      { name: 'WooCommerce', icon: Database },
      { name: 'Elementor', icon: Layout },
      { name: 'Divi', icon: Layout },
      { name: 'Trello', icon: Kanban },
      { name: 'Asana', icon: Kanban },
      { name: 'ClickUp', icon: Kanban },
    ];

    return (
      <div className="font-sans text-slate-800 bg-white">
        {/* Hero Section */}
        <Section id="hero" className="bg-gradient-to-br from-pink-50 to-white relative min-h-screen flex items-center">
          <AnimatedBackground />
          <div className="text-center max-w-4xl mx-auto py-24 z-10">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-600 animate-fadeInUp">
              Md. Abidur Rahman
            </h1>
            <p className="text-xl md:text-2xl text-purple-600 font-bold mb-6 animate-fadeInUp delay-100">
              Virtual Assistant | Social Media | Project Management | AI Prompt Engineer
            </p>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto animate-fadeInUp delay-200">
              Dedicated Virtual Assistant with 10+ years of experience in streamlining workflows, managing projects, and delivering results. I specialize in social media management, e-commerce operations, AI-powered solutions, and organizational support to help businesses run smoothly.
            </p>
            <div className="animate-scaleIn delay-300">
              <a href="#contact">
                <Button size="lg" className="w-56">Contact Me</Button>
              </a>
            </div>
          </div>
        </Section>
        {/* About Section */}
        <Section id="about" title="About Me" className="bg-white text-slate-900">
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center animate-fadeInUp">
            I’m a proactive and detail-oriented Virtual Assistant who thrives on organization, creativity, and problem-solving. Over the last decade, I’ve helped entrepreneurs, small businesses, and teams save time, stay organized, and grow faster. From managing e-commerce stores and social media campaigns to handling day-to-day admin tasks and project coordination, I bring structure, clarity, and efficiency to every role.
          </p>
        </Section>
        {/* Services Section */}
        <Section id="services" title="How I Can Help You" className="bg-white text-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={Briefcase} title="Virtual Assistance" items={['Email & calendar management', 'Travel planning', 'Appointment scheduling', 'Customer service']} />
            <ServiceCard icon={Share2} title="Social Media Management" items={['Strategy, content creation, and scheduling', 'Facebook, Instagram, LinkedIn, Twitter, YouTube']} />
            <ServiceCard icon={ShoppingCart} title="E-Commerce Store Management" items={['Shopify, WooCommerce, Wix, Etsy, eBay', 'Product uploads, inventory tracking, order management']} />
            <ServiceCard icon={Feather} title="WordPress Support" items={['Page building and updates', 'Using Elementor, Divi, Oxygen']} />
            <ServiceCard icon={Kanban} title="Project Management" items={['Efficient workflows using Asana, Trello, Monday, ClickUp']} />
            <ServiceCard icon={Bot} title="AI-Powered Support" items={['Prompt engineering, content creation', 'Simple video editing with tools like ChatGPT, Claude, Canva, CapCut, Heygen']} />
          </div>
        </Section>
        {/* Tools Section */}
        <Section id="tools" title="Tools I Use" className="bg-white text-slate-900">
          <div className="flex flex-wrap justify-center gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-100 transition-colors animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-5 rounded-full bg-slate-100 mb-3 shadow-sm">
                  <tool.icon size={24} />
                </div>
                <span className="text-sm font-medium text-slate-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </Section>
        {/* Why Work With Me Section */}
        <Section id="why-work-with-me" title="Why Work With Me" className="bg-white text-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <PillarCard icon={User} title="10+ Years Experience" description="Proven track record with diverse clients, delivering high-quality results consistently." />
            <PillarCard icon={Zap} title="Reliable & Proactive" description="I anticipate needs, solve problems before they arise, and always deliver on time." />
            <PillarCard icon={MessageCircle} title="Versatile Skillset" description="From day-to-day admin tasks to AI-powered solutions, I adapt to your unique needs." />
          </div>
        </Section>
        {/* Contact Section */}
        <Section id="contact" title="Let’s Connect" className="bg-white text-slate-900">
          <div className="max-w-xl mx-auto rounded-3xl shadow-2xl p-8 border border-slate-200">
            <div className="flex justify-center items-center gap-8 mb-8">
              <a href="mailto:porosh.abidlaw@gmail.com" className="flex items-center gap-2 text-fuchsia-600 hover:text-fuchsia-700 transition-colors">
                <Mail size={20} />
                <span className="font-medium">Email</span>
              </a>
              <a href="https://linkedin.com/in/rahman-abidur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-colors" required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </Section>
        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 text-center py-8">
          <div className="container mx-auto px-4">
            <p className="text-sm">© 2025 Md. Abidur Rahman. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  };

  export default App;
