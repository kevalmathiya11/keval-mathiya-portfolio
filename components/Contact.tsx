import React, { useState, useRef } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  MapPin,
  CheckCircle,
  AlertCircle,
  Loader,
} from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all fields');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS configuration is missing. Please check your .env.local file'
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Keval Mathiya',
        },
        publicKey
      );

      setStatus('success');
      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setStatusMessage(
        'Failed to send message. Please try again or email me directly.'
      );
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <footer
      id="contact"
      className="bg-white dark:bg-slate-950 pt-32 pb-16 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Let's build something <br />{' '}
              <span className="text-blue-600 dark:text-blue-500">
                amazing together.
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mb-12">
              Currently available for freelance projects and full-time
              engineering roles. Drop a line if you'd like to chat.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:bg-white dark:hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-mono mb-0.5">
                    Mail me at
                  </div>
                  <div className="text-lg text-slate-900 dark:text-white font-medium">
                    {CONTACT_INFO.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-mono mb-0.5">
                    Call me at
                  </div>
                  <div className="text-lg text-slate-900 dark:text-white font-medium">
                    {CONTACT_INFO.phone}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-mono mb-0.5">
                    Based in
                  </div>
                  <div className="text-lg text-slate-900 dark:text-white font-medium">
                    {CONTACT_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Socials */}
          <div className="space-y-8">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">
                Send a message
              </h3>

              <div className="space-y-4 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                {/* Status Message */}
                {status !== 'idle' && (
                  <div
                    className={`flex items-center gap-2 p-4 rounded-xl ${
                      status === 'success'
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                        : status === 'error'
                          ? 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400'
                          : 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400'
                    }`}
                  >
                    {status === 'sending' && (
                      <Loader className="w-5 h-5 animate-spin" />
                    )}
                    {status === 'success' && (
                      <CheckCircle className="w-5 h-5" />
                    )}
                    {status === 'error' && <AlertCircle className="w-5 h-5" />}
                    <p className="text-sm font-medium">{statusMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'sending' ? (
                    <>
                      Sending... <Loader className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-200 dark:hover:border-slate-700 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Keval Mathiya. Built with React &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
