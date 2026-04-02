import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="bg-[#0F1C2E] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Logo + copyright */}
          <div className="flex items-center gap-4">
            <AppLogo text="AQUA" iconName="AnchorIcon" size={28} className="text-white/70" />
            <span className="text-[13px] text-white/40 font-medium">
              © 2026 Crest Expeditions Ltd. Scotland.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-[13px] font-medium text-white/50">
            <a href="#" className="hover:text-white/90 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/90 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/90 transition-colors">Safety</a>
            <a href="#" className="hover:text-white/90 transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
              aria-label="Instagram"
            >
              <Icon name="CameraIcon" size={16} variant="outline" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
              aria-label="Facebook"
            >
              <Icon name="UserGroupIcon" size={16} variant="outline" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}