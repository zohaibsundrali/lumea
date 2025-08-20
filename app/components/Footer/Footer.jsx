import React from "react";
import Link from "next/link"; // Next.js Link

const Footer = () => {
  return (
    <footer className="relative bg-[#f8fbff] py-10">
      {/* Dots Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>

      <div className="relative w-[60%] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
        {/* Logo + About */}
        <div>
          <h2 className="flex items-center gap-2 text-[#d9326f] font-bold text-lg mb-3">
            <span className="text-2xl">⬢</span> LUMEA
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Dempor pede libero dapi useu class venenatis ut bibendum quam ut nibh
            necnullam. NonhonPede mollis vel vitae dolorrupis
          </p>
          <h3 className="text-xl font-bold">1111 - 2222 - 3333</h3>
          <p className="text-sm">24/7 SUPPORT</p>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/account" className="hover:text-[#d9326f]">My Account</Link></li>
            <li><Link href="/affiliate" className="hover:text-[#d9326f]">Affiliate Program</Link></li>
            <li><Link href="/consulting" className="hover:text-[#d9326f]">Lawyer Consulting</Link></li>
            <li><Link href="/licenses" className="hover:text-[#d9326f]">Sorteo Licenses</Link></li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="font-bold text-lg mb-4">Help Center</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/help" className="hover:text-[#d9326f]">Help Centre</Link></li>
            <li><Link href="/faq" className="hover:text-[#d9326f]">FAQ</Link></li>
            <li><Link href="/guide" className="hover:text-[#d9326f]">Quick Start Guide</Link></li>
            <li><Link href="/tutorials" className="hover:text-[#d9326f]">Tutorials</Link></li>
            <li><Link href="/borrow" className="hover:text-[#d9326f]">Borrow</Link></li>
            <li><Link href="/lend" className="hover:text-[#d9326f]">Lend</Link></li>
          </ul>
        </div>

        {/* Legal Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal Info</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/complaints" className="hover:text-[#d9326f]">Complaints Policy</Link></li>
            <li><Link href="/security" className="hover:text-[#d9326f]">Security</Link></li>
            <li><Link href="/affiliate" className="hover:text-[#d9326f]">Become Affiliate</Link></li>
            <li><Link href="/terms" className="hover:text-[#d9326f]">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-[#d9326f]">Privacy Notice</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        Copyright © 2020. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
