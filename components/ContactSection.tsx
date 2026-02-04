
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { IMAGE_ASSETS, COLORS } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className={`text-[${COLORS.accent}] font-bold uppercase tracking-widest text-xs mb-4`}>Connect With Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 serif">A Foundation for Growth</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                Our main breeding operation is located in the fertile Beatrice district of Mashonaland East. We welcome serious breeders and buyers by appointment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                  <Mail className={`w-6 h-6 text-[${COLORS.primary}]`} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email Inquiries</p>
                  <p className="text-slate-600">office@rozhowafarms.co.zw</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                  <Phone className={`w-6 h-6 text-[${COLORS.primary}]`} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Contact Number</p>
                  <p className="text-slate-600">+263 772 123 456 / +263 719 987 654</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                  <MapPin className={`w-6 h-6 text-[${COLORS.primary}]`} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Farm Office</p>
                  <p className="text-slate-600">Plot 4, Highveld Estate, Beatrice,<br />Mashonaland East, Zimbabwe</p>
                </div>
              </div>
            </div>

            {/* Stylized Map View */}
            <div className="h-64 rounded-sm overflow-hidden shadow-inner border-4 border-white relative group">
              <div 
                className="absolute inset-0 bg-stone-200"
                style={{
                  backgroundImage: `url("${IMAGE_ASSETS.contactMapBg}")`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  filter: 'grayscale(100%) opacity(0.3)'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative">
                    <div className={`absolute -top-12 -left-12 w-24 h-24 bg-[${COLORS.primary}]/10 rounded-full animate-ping`}></div>
                    <MapPin className={`w-10 h-10 text-[${COLORS.primary}] relative z-10`} />
                 </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-sm border border-stone-200">
                 <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Mashonaland HQ</p>
                 <p className="text-[9px] text-slate-500 uppercase tracking-tighter">Lat/Long: -18.25, 30.85</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-sm p-8 md:p-12 shadow-2xl border border-stone-100">
            <h4 className={`text-2xl font-bold mb-8 serif text-[${COLORS.primary}]`}>Sale Inquiry</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Contact Name</label>
                  <input type="text" className={`w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 focus:ring-1 focus:ring-[${COLORS.primary}] focus:outline-none transition-all`} placeholder="Enter name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Phone</label>
                  <input type="tel" className={`w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 focus:ring-1 focus:ring-[${COLORS.primary}] focus:outline-none transition-all`} placeholder="+263..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Interest</label>
                <select className={`w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 focus:ring-1 focus:ring-[${COLORS.primary}] focus:outline-none appearance-none`}>
                  <option>Boran Stud Stock</option>
                  <option>Tuli Stud Stock</option>
                  <option>Dorper Sheep</option>
                  <option>Training Enrollment</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Message</label>
                <textarea rows={4} className={`w-full bg-stone-50 border border-stone-200 rounded-sm px-4 py-3 focus:ring-1 focus:ring-[${COLORS.primary}] focus:outline-none`} placeholder="Details of your inquiry..."></textarea>
              </div>
              <button type="submit" className={`w-full bg-[${COLORS.primary}] text-white py-5 rounded-sm font-bold flex items-center justify-center gap-3 hover:bg-[#025a2c] transition-all shadow-lg text-xs uppercase tracking-[0.2em]`}>
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;