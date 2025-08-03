# Meublux - Deployment Guide

## 🚀 **GitHub Repository**
- **Repository**: https://github.com/autonomyowner/Meublux.git
- **Status**: ✅ Successfully pushed
- **Branch**: master

## 📋 **Project Overview**
- **Name**: Meublux - Design your Dream Space
- **Type**: Furniture & Interior Design Website
- **Language**: Arabic (RTL) + English
- **Location**: Algeria
- **Contact**: 0561 00 91 94 | walidmessaoudi178@gmail.com

## 🛠 **Technology Stack**
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (Recommended)

## 📁 **Key Files & Structure**
```
Meublux/
├── app/
│   ├── layout.tsx (Arabic RTL support)
│   ├── page.tsx (Main page)
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── header.tsx (Arabic navigation)
│   │   └── footer.tsx
│   └── sections/
│       ├── hero-section.tsx (Video background)
│       ├── featured-vehicles.tsx (Furniture showcase)
│       ├── services-overview.tsx
│       ├── why-choose-us.tsx
│       ├── testimonials.tsx
│       ├── contact-cta.tsx
│       └── brand-showcase.tsx
├── data/
│   └── furniture.ts (Furniture data)
├── public/
│   ├── pics/ (Furniture images)
│   └── 1427832238427342.mp4 (Background video)
└── types/
    └── index.ts (TypeScript interfaces)
```

## 🎯 **Features Implemented**
- ✅ **Arabic RTL Support**: Full right-to-left layout
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Video Background**: Hero section with video
- ✅ **Furniture Showcase**: 5 furniture categories
- ✅ **Contact Information**: Algeria location
- ✅ **SEO Optimized**: Meta tags and descriptions
- ✅ **Modern UI**: Luxury design with animations

## 💰 **Pricing Structure**
- **Living Room Set**: 2,500 دج
- **Modern Kitchen**: 4,500 دج
- **Luxury Bedroom**: 3,500 دج
- **Dining Table**: 1,800 دج
- **Office Desk**: 950 دج

## 🚀 **Vercel Deployment Steps**

### 1. **Connect to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import repository: `autonomyowner/Meublux`

### 2. **Configure Settings**
- **Framework Preset**: Next.js
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### 3. **Environment Variables** (if needed)
```
NEXT_PUBLIC_SITE_URL=https://meublux.vercel.app
```

### 4. **Deploy**
- Click "Deploy"
- Vercel will automatically build and deploy

## 🔧 **Local Development**
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 **Responsive Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 **SEO Features**
- **Title**: Meublux - Design your Dream Space
- **Description**: Arabic furniture description
- **Keywords**: furniture, interior design, Algeria
- **Locale**: ar_DZ (Algeria)
- **Open Graph**: Configured for social sharing

## 📞 **Contact Information**
- **Phone**: 0561 00 91 94
- **Email**: walidmessaoudi178@gmail.com
- **Location**: الجزائر (Algeria)
- **Business Hours**: Monday-Friday 9:00-19:00

## 🎨 **Design Features**
- **Color Scheme**: Luxury gold and black
- **Typography**: Inter + Playfair Display
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Layout**: RTL support for Arabic

## ✅ **Ready for Production**
- ✅ All images optimized and in correct locations
- ✅ Video background working
- ✅ Arabic content implemented
- ✅ Responsive design tested
- ✅ SEO metadata configured
- ✅ Contact information updated
- ✅ Pricing structure finalized

## 🔗 **Deployment Links**
- **GitHub**: https://github.com/autonomyowner/Meublux.git
- **Vercel**: Will be available after deployment
- **Live Site**: Will be provided by Vercel

## 📝 **Next Steps**
1. Deploy to Vercel
2. Configure custom domain (optional)
3. Set up analytics (Google Analytics)
4. Configure email forms
5. Add payment integration (if needed)

---
**Last Updated**: January 2025
**Status**: Ready for Deployment ✅ 