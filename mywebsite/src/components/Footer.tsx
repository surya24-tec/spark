
import { Linkedin, Github, ArrowRight } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Tamilan Spark Tech</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your Trusted Partner for Projects, Blogs, and Web Solutions. We help students, researchers, startups, and businesses transform their ideas into successful digital solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/suryasm24/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/surya24-tec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Blogs', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(`#${link.toLowerCase()}`)}
                    className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <span>{link}</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {['College Projects', 'Technical Blogs', 'Website Development', 'Project Documentation', 'Consulting'].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <span>{service}</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Tamilan Spark Tech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
