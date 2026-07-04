
const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Tamilan Spark Tech
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-primary-100">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Tamilan Spark Tech specializes in providing custom software development solutions for students, researchers, startups, and businesses.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We offer end-to-end support for academic projects, technical content creation, blog publishing, and website development. Our goal is to help clients transform their ideas into successful digital solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need a final-year project, a technical blog, or a professional business website, we deliver quality work with dedicated support.
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '30+', label: 'Happy Clients' },
                { number: '30', label: 'Technologies' },
                { number: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-4xl font-bold text-primary-700 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
