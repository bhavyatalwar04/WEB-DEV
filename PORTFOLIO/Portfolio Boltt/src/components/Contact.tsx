import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "bhavyatalwar.bt@gmail.com",
      link: "mailto:bhavyatalwar.bt@gmail.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "bhavyatalwar04",
      link: "https://github.com/bhavyatalwar04"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "bhavya-talwar",
      link: "https://www.linkedin.com/in/bhavya-talwar/"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to embark on a journey through the digital cosmos? Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-200 mb-6">Get In Touch</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about the latest developments in AI and technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-medium">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-pink-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-purple-500/20">
              <h4 className="text-gray-200 font-medium mb-4">Follow My Journey</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/bhavyatalwar04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhavya-talwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 rounded-xl border border-purple-500/20 p-8">
            <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-3 text-purple-400" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-gray-200 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-gray-200 transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-gray-200 transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-gray-200 transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-purple-500/20">
          <p className="text-gray-400">
            © 2024 Bhavya Talwar. Crafted with passion and cosmic inspiration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;