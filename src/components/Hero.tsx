
import { CheckCircle2 } from 'lucide-react';
import { trustBadges } from '../data';

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <div className="animate-fade-in">
            <p className="text-primary-200 text-lg font-medium mb-4">
              Your Trusted Partner for Projects, Blogs, and Web Solutions
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Custom College Projects,
              <span className="text-primary-300">Technical Blogs</span> &amp;
              <br />
              Professional Websites
            </h1>
            {/* <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get high-quality academic projects, SEO-friendly technical blogs, and
              modern websites tailored to your exact requirements.
            </p> */}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <button
              onClick={() => handleNavClick('#services')}
              className="bg-white text-primary-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
            >
              View Services
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <CheckCircle2 className="text-primary-300" size={20} />
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
