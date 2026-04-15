/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Download, ExternalLink, Info, Shield, FileText, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'motion/react';

interface BannerData {
  id: string;
  brand: string;
  logo: string;
  category: string;
  bgColor?: string;
}

const BANNERS: BannerData[] = [
  { id: '1', brand: 'Adobe', logo: 'https://logo.clearbit.com/adobe.com', category: 'Tech', bgColor: 'bg-red-600' },
  { id: '2', brand: 'WordPress', logo: 'https://logo.clearbit.com/wordpress.com', category: 'Tech', bgColor: 'bg-blue-800' },
  { id: '3', brand: 'Google', logo: 'https://logo.clearbit.com/google.com', category: 'Tech', bgColor: 'bg-white' },
  { id: '4', brand: 'HP', logo: 'https://logo.clearbit.com/hp.com', category: 'Tech', bgColor: 'bg-blue-600' },
  { id: '5', brand: 'Intel', logo: 'https://logo.clearbit.com/intel.com', category: 'Tech', bgColor: 'bg-blue-500' },
  { id: '6', brand: 'Lego', logo: 'https://logo.clearbit.com/lego.com', category: 'Toys', bgColor: 'bg-red-500' },
  { id: '7', brand: 'Nike', logo: 'https://logo.clearbit.com/nike.com', category: 'Fashion', bgColor: 'bg-black' },
  { id: '8', brand: 'Behance', logo: 'https://logo.clearbit.com/behance.net', category: 'Design', bgColor: 'bg-blue-700' },
  { id: '9', brand: 'Pepsi', logo: 'https://logo.clearbit.com/pepsi.com', category: 'Food', bgColor: 'bg-blue-600' },
  { id: '10', brand: 'Caterpillar', logo: 'https://logo.clearbit.com/cat.com', category: 'Industrial', bgColor: 'bg-yellow-500' },
  { id: '11', brand: 'HTC', logo: 'https://logo.clearbit.com/htc.com', category: 'Tech', bgColor: 'bg-green-600' },
  { id: '12', brand: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com', category: 'Tech', bgColor: 'bg-black' },
  { id: '13', brand: 'Huawei', logo: 'https://logo.clearbit.com/huawei.com', category: 'Tech', bgColor: 'bg-red-600' },
  { id: '14', brand: 'Honor', logo: 'https://logo.clearbit.com/hihonor.com', category: 'Tech', bgColor: 'bg-blue-400' },
  { id: '15', brand: 'CNN', logo: 'https://logo.clearbit.com/cnn.com', category: 'News', bgColor: 'bg-red-700' },
  { id: '16', brand: 'Mercedes', logo: 'https://logo.clearbit.com/mercedes-benz.com', category: 'Auto', bgColor: 'bg-gray-800' },
  { id: '17', brand: 'Motorola', logo: 'https://logo.clearbit.com/motorola.com', category: 'Tech', bgColor: 'bg-blue-900' },
  { id: '18', brand: 'Vans', logo: 'https://logo.clearbit.com/vans.com', category: 'Fashion', bgColor: 'bg-red-800' },
  { id: '19', brand: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com', category: 'Tech', bgColor: 'bg-white' },
  { id: '20', brand: 'Apple', logo: 'https://logo.clearbit.com/apple.com', category: 'Tech', bgColor: 'bg-gray-100' },
  { id: '21', brand: 'Facebook', logo: 'https://logo.clearbit.com/facebook.com', category: 'Social', bgColor: 'bg-blue-600' },
  { id: '22', brand: 'Twitter', logo: 'https://logo.clearbit.com/twitter.com', category: 'Social', bgColor: 'bg-sky-500' },
  { id: '23', brand: 'Instagram', logo: 'https://logo.clearbit.com/instagram.com', category: 'Social', bgColor: 'bg-pink-600' },
  { id: '24', brand: 'LinkedIn', logo: 'https://logo.clearbit.com/linkedin.com', category: 'Social', bgColor: 'bg-blue-700' },
  { id: '25', brand: 'Netflix', logo: 'https://logo.clearbit.com/netflix.com', category: 'Entertainment', bgColor: 'bg-red-600' },
  { id: '26', brand: 'Spotify', logo: 'https://logo.clearbit.com/spotify.com', category: 'Entertainment', bgColor: 'bg-green-500' },
  { id: '27', brand: 'YouTube', logo: 'https://logo.clearbit.com/youtube.com', category: 'Entertainment', bgColor: 'bg-red-600' },
  { id: '28', brand: 'Tesla', logo: 'https://logo.clearbit.com/tesla.com', category: 'Auto', bgColor: 'bg-red-600' },
];

export default function App() {
  const [name, setName] = useState('Marceline Avila');
  const [email, setEmail] = useState('marceline@gmail.com');
  const [designation, setDesignation] = useState('Designation');
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filteredBanners = useMemo(() => {
    return BANNERS.filter(banner => {
      const matchesSearch = banner.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'All' || banner.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, category]);

  const categories = ['All', ...new Set(BANNERS.map(b => b.category))];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="space-header py-12 px-4 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Find images and Make your Banner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/80 mb-8 max-w-2xl mx-auto"
          >
            Please enter your name and job title to customize your banner, and then you can proceed to download it.
          </motion.p>

          <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium text-blue-200/60 mb-12">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1"><Shield className="w-3 h-3" /> Privacy</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1"><FileText className="w-3 h-3" /> Term & Condition</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1"><Info className="w-3 h-3" /> About us</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1"><Users className="w-3 h-3" /> Disclaimer</a>
          </nav>

          {/* Search and Category */}
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="logo" 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-lg focus-visible:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white h-12 rounded-lg">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* User Info Inputs */}
      <section className="bg-slate-50 border-b border-slate-200 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Full Name</Label>
            <Input 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white h-11"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Email Address</Label>
            <Input 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white h-11"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="designation" className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Designation</Label>
            <Input 
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="bg-white h-11"
              placeholder="Enter your job title"
            />
          </div>
        </div>
      </section>

      {/* Banner Grid */}
      <main className="flex-1 max-w-7xl mx-auto w-full py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredBanners.map((banner, index) => (
              <motion.div
                key={banner.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="banner-card overflow-hidden border-none shadow-2xl group cursor-pointer relative aspect-[1.8/1] flex flex-col bg-[#050505] rounded-xl">
                  {/* Background Image Layer (Full Size) */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=2064&auto=format&fit=crop" 
                      alt="3D Logo Background"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-red-900/20 to-transparent opacity-30" />
                  </div>
                  
                  {/* Top Right Actions */}
                  <div className="absolute top-4 right-4 z-20">
                    <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all border border-white/10">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col w-full h-full p-6">
                    {/* Brand Identifier (Subtle) */}
                    <div className="text-white/30 font-display font-bold text-xs uppercase tracking-widest">
                      {banner.brand}
                    </div>

                    {/* Bottom Right Text Section */}
                    <div className="flex flex-col items-end justify-end mt-auto">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none drop-shadow-lg">
                        {name}
                      </h3>
                      <p className="text-xs md:text-sm text-white/70 font-medium mt-1 drop-shadow-md">
                        {email}
                      </p>
                    </div>
                  </div>

                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredBanners.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">No banners found</h3>
            <p className="text-slate-500">Try adjusting your search or category filter.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-white font-display font-bold text-xl">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">B</div>
            BannerMaker
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-xs">
            © 2024 BannerMaker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
