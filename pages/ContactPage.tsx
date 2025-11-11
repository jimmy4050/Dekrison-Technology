import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, MapPin, Building, Smartphone } from 'lucide-react';

const ContactPage: React.FC = () => {

  return (
    <div className="relative bg-[#F8F9FA] dark:bg-gray-900 py-16 md:py-20 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-5"
            style={{ backgroundImage: `url('https://picsum.photos/seed/contact-background/1920/1080')` }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A2342] dark:text-white">Get in Touch</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                    We'd love to hear from you. Here's how you can reach us.
                </p>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl">
                {/* Contact Info */}
                <AnimatedSection className="flex flex-col justify-center space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 p-3 bg-[#FFD447]/20 dark:bg-[#FFD447]/10 rounded-full"><Building className="h-6 w-6 text-[#FFD447]" /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white">Company</h3>
                            <p className="text-gray-600 dark:text-gray-400">Shenzhen Dekrison Technology Co., Ltd.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 p-3 bg-[#FFD447]/20 dark:bg-[#FFD447]/10 rounded-full"><MapPin className="h-6 w-6 text-[#FFD447]" /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white">Location</h3>
                            <p className="text-gray-600 dark:text-gray-400">Shenzhen, China</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 p-3 bg-[#FFD447]/20 dark:bg-[#FFD447]/10 rounded-full"><Mail className="h-6 w-6 text-[#FFD447]" /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white">Email</h3>
                            <a href="mailto:aleenaguan20@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-[#FFD447] dark:hover:text-[#FFD447] transition-colors">aleenaguan20@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 p-3 bg-[#FFD447]/20 dark:bg-[#FFD447]/10 rounded-full"><Smartphone className="h-6 w-6 text-[#FFD447]" /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#0A2342] dark:text-white">WeChat</h3>
                            <p className="text-gray-600 dark:text-gray-400">+86 18688948070</p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;