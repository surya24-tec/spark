
import { CheckCircle2 } from 'lucide-react';
import { whyChooseUs } from '../data';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-300 to-primary-200 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-primary-100">
            What makes us different from others
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-500/20 rounded-full">
                  <CheckCircle2 className="text-primary-300" size={28} />
                </div>
                <h3 className="text-white font-semibold text-lg">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
