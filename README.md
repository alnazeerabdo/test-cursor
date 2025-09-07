# AirFresh Pro - Modern Landing Page

A beautiful, modern, and fully responsive landing page for an air spray product designed to improve home smell. Built with HTML5, CSS3, and vanilla JavaScript.

## 🚀 Features

### Design & UX
- **Modern, Clean Design**: Contemporary layout with beautiful gradients and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging animations
- **Performance Optimized**: Fast loading with optimized assets and smooth animations

### Sections Included
1. **Navigation Bar**: Sticky header with smooth scroll navigation
2. **Hero Section**: Eye-catching banner with product showcase and call-to-action
3. **Features Section**: 6 key product benefits with icons and descriptions
4. **Benefits Section**: Room-by-room benefits with visual scent showcase
5. **Testimonials**: Customer reviews with ratings and photos
6. **Call-to-Action**: Compelling offer section with pricing and guarantees
7. **Footer**: Complete footer with links, social media, and company info

### Technical Features
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Scroll Effects**: Navbar changes on scroll, progress indicator
- **Animations**: Fade-in effects, floating particles, hover animations
- **Interactive Elements**: Button ripple effects, card hover states
- **Mobile-First**: Responsive design that works on all devices

## 📁 File Structure

```
/workspace/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript for interactions
└── README.md           # This documentation
```

## 🎨 Customization Guide

### Colors
The landing page uses a modern color palette. Main colors can be changed in `styles.css`:

- **Primary Blue**: `#2563eb` - Used for buttons, icons, and accents
- **Secondary Blue**: `#3b82f6` - Used for gradients and hover states
- **Orange/Yellow**: `#f59e0b` - Used for CTA buttons and pricing
- **Dark Gray**: `#1e293b` - Used for text and dark backgrounds
- **Light Gray**: `#64748b` - Used for secondary text

### Content
1. **Product Name**: Change "AirFresh Pro" throughout the files
2. **Pricing**: Update the pricing in the CTA section
3. **Features**: Modify the 6 feature cards in the features section
4. **Testimonials**: Replace with real customer reviews and photos
5. **Scents**: Update the 4 scent options in the benefits section

### Images
- **Customer Photos**: Replace Unsplash URLs with actual customer photos
- **Product Images**: Add real product images in the hero section
- **Icons**: Uses Font Awesome icons (can be replaced with custom SVGs)

## 🛠️ Setup & Usage

1. **Local Development**:
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

2. **Deployment**:
   - Upload all files to your web server
   - Ensure all file paths are correct
   - Test on different devices and browsers

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features Used**: CSS Grid, Flexbox, CSS Custom Properties, ES6 JavaScript

## 🔧 Customization Examples

### Change Primary Color
```css
/* In styles.css, replace all instances of #2563eb with your color */
.nav-logo { color: #YOUR_COLOR; }
.btn-primary { background: linear-gradient(135deg, #YOUR_COLOR, #YOUR_SECONDARY); }
```

### Add New Section
```html
<!-- Add after existing sections in index.html -->
<section class="your-section">
    <div class="container">
        <!-- Your content here -->
    </div>
</section>
```

### Modify Animations
```css
/* In styles.css, adjust animation durations and effects */
@keyframes yourAnimation {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

## 📊 Performance Tips

1. **Optimize Images**: Compress customer photos and product images
2. **Lazy Loading**: Add lazy loading for images below the fold
3. **CDN**: Consider using CDN for Font Awesome and Google Fonts
4. **Minification**: Minify CSS and JavaScript for production

## 🎯 SEO Considerations

- **Meta Tags**: Add appropriate meta descriptions and keywords
- **Alt Text**: Add descriptive alt text for images
- **Schema Markup**: Consider adding product schema for better search results
- **Page Speed**: Optimize images and minimize HTTP requests

## 🤝 Support

This landing page is designed to be easily customizable and maintainable. All code is well-commented and organized for easy modification.

For questions or customization help, refer to the code comments in each file.

---

**Built with ❤️ for modern web experiences**