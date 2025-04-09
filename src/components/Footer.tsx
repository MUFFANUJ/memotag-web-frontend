
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import sharkTankIndiaS4Logo from "../../assets/logo.jpg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-memotag-text py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-memotag-primary to-memotag-accent flex items-center justify-center text-white font-bold">
                <img src={sharkTankIndiaS4Logo} className='rounded-full' />
              </div>
              <span className="text-xl font-bold text-white">MemoTag</span>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Revolutionizing memory care through AI technology to help those with cognitive decline and their caregivers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition">
                <Twitter size={16} />
              </a>
              <a href="https://www.linkedin.com/company/memotag/" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-white font-bold mb-4">Company</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Our Team</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">News</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-white font-bold mb-4">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Research</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Guides</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Support</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-white font-bold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Terms of Use</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Data Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Cookies</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-white font-bold mb-4">Contact</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition">contact@memotag.io</a></li>
              <li><span className="text-white/70">Delhi NCR, India</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© {year} MemoTag. All rights reserved.</p>
          <p className="text-white/50 text-sm mt-2 md:mt-0">Made with care in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
