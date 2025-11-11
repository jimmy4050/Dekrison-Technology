import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, MapPin, Building, Smartphone } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative bg-[#F8F9FA] py-20 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-5"
            style={{ backgroundImage: `url('https://picsum.photos/seed/contact-background/1920/1080')` }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A2342]">Get in Touch</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Have a question or a project in mind? We'd love to hear from you.
                </p>
            </AnimatedSection>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl">
                {/* Contact Info */}
                <AnimatedSection className="flex flex-col justify-center space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 p-3 bg-[#FFD447]/20 rounded-full"><Building className="h-6 w-6 text-[#FFD447]" /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0A2342]">Company</h3>
                            <p className="text-gray-600">Shenzhen Dekrison Technology Co., Ltd.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 p-3 bg-[#FFD447]/20 rounded-full"><MapPin className="h-6 w-6 text-[#FFD447]" /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0A2342]">Location</h3>
                            <p className="text-gray-600">Shenzhen, China</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 p-3 bg-[#FFD447]/20 rounded-full"><Mail className="h-6 w-6 text-[#FFD447]" /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0A2342]">Email</h3>
                            <a href="mailto:aleenaguan20@gmail.com" className="text-gray-600 hover:text-[#FFD447] transition-colors">aleenaguan20@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 p-3 bg-[#FFD447]/20 rounded-full"><Smartphone className="h-6 w-6 text-[#FFD447]" /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0A2342]">WeChat</h3>
                            <p className="text-gray-600">+86 18688948070</p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Contact Form */}
                <AnimatedSection>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FFD447] focus:border-[#FFD447] sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FFD447] focus:border-[#FFD447] sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FFD447] focus:border-[#FFD447] sm:text-sm"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0A2342] hover:bg-[#FFD447] hover:text-[#0A2342] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2342] transition-colors duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </AnimatedSection>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;