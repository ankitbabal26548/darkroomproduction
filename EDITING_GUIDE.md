
# 🎨 Website Editing Guide for Beginners

Welcome! This guide will help you edit your Darkroom Production website without any coding knowledge. Everything is organized to make editing as simple as possible.

## 📁 File Organization

Your website is organized into easy-to-edit configuration files:

```
src/config/
├── content.js     ← Edit ALL website text here
├── images.js      ← Change ALL images here  
└── styling.js     ← Adjust spacing and layout here
```

## 📝 How to Edit Text Content

### Step 1: Open the Content File
- Navigate to `src/config/content.js`
- This file contains ALL text on your website

### Step 2: Find the Section You Want to Edit
- **Hero Section** (main banner): Look for `hero: {`
- **About Section**: Look for `about: {`
- **Portfolio**: Look for `portfolio: {`
- **Services**: Look for `services: {`
- **Contact**: Look for `contact: {`

### Step 3: Edit the Text
```javascript
// ✅ CORRECT - Change text between quotes
mainTitle: "Your New Company Name",

// ❌ WRONG - Don't remove quotes or structure
mainTitle: Your New Company Name,
```

### Common Text Changes:
- **Company Name**: Edit `companyName: "Darkroom Production"`
- **Main Headline**: Edit `hero.mainTitle: "Darkroom Production"`
- **Phone Number**: Edit `contact.phone: "+91 98765 43210"`
- **Email**: Edit `contact.email: "hello@darkroomproduction.com"`

## 🖼️ How to Change Images

### Step 1: Open the Images File
- Navigate to `src/config/images.js`
- This file controls ALL images on your website

### Step 2: Replace Image URLs
```javascript
// ✅ CORRECT - Replace the URL between quotes
slide1: "https://your-new-image-url.jpg",

// ✅ ALSO CORRECT - Use local images
slide1: "/src/assets/your-image.jpg",
```

### Where to Get Images:
1. **Your Own Images**: Upload to `src/assets/` folder
2. **Stock Photos**: Use Unsplash.com (free)
3. **External URLs**: Any image hosting service

### Image Requirements:
- **Hero Images**: 1920x1080px or larger
- **Portfolio Covers**: 800x600px
- **Gallery Images**: 1200x800px
- **File Size**: Keep under 2MB each

## 📏 How to Adjust Spacing and Layout

### Step 1: Open the Styling File
- Navigate to `src/config/styling.js`
- This file controls spacing, sizes, and layout

### Step 2: Common Adjustments
```javascript
// Make sections have more space between them
sectionPadding: "py-32",  // Bigger number = more space

// Make text bigger
sectionTitle: "text-5xl md:text-7xl",  // Bigger numbers = larger text

// Add more space between elements
elementGap: "gap-12",  // Bigger number = more space
```

### Spacing Reference:
- `py-4` = Small space (16px)
- `py-8` = Medium space (32px)
- `py-16` = Large space (64px)
- `py-20` = Extra large space (80px)

## 📱 Mobile Responsiveness

The website automatically adjusts for mobile devices. The settings work like this:

- `sm:` = Small screens (phones)
- `md:` = Medium screens (tablets)
- `lg:` = Large screens (laptops)
- `xl:` = Extra large screens (desktops)

## 🎯 Common Editing Tasks

### Change Company Information
1. Open `src/config/content.js`
2. Edit these fields:
   - `companyName`
   - `contact.phone`
   - `contact.email`
   - `contact.address`

### Add New Wedding Collection
1. Open `src/data/weddingCollections.ts`
2. Copy an existing collection object
3. Change the details:
   - `coupleName`
   - `weddingDate`
   - `location`
   - `images` array

### Change Hero Images
1. Open `src/config/images.js`
2. Replace `hero.slide1` and `hero.slide2` URLs
3. Update the `slide1Alt` and `slide2Alt` descriptions

### Adjust Section Spacing
1. Open `src/config/styling.js`
2. Change `spacing.sectionPadding` value
3. Bigger numbers = more space between sections

## ⚠️ Important Rules

### ✅ DO:
- Change text between quotes: `"Your text here"`
- Replace image URLs completely
- Adjust number values for spacing
- Save files after making changes
- Test on mobile after editing

### ❌ DON'T:
- Remove quotes or commas
- Delete entire sections
- Change variable names (left side of colons)
- Edit files outside the `config/` folder
- Remove the file structure

## 🔧 Development Setup

### First Time Setup:
1. Install Node.js from nodejs.org
2. Open terminal/command prompt
3. Navigate to your project folder
4. Run: `npm install`
5. Run: `npm run dev`
6. Open browser to `http://localhost:3000`

### Making Changes:
1. Edit files in `src/config/`
2. Save the file
3. Check browser - changes appear automatically
4. Test on mobile using browser developer tools

## 🆘 Troubleshooting

### Website Won't Load:
- Check for missing quotes in config files
- Make sure all commas are in place
- Restart development server: `npm run dev`

### Images Not Showing:
- Check image URLs are correct
- Ensure images are accessible
- Try using Unsplash URLs for testing

### Text Appears Broken:
- Check for missing quotes around text
- Ensure commas separate items in lists
- Compare your structure to working examples

### Getting Help:
1. Check the console for error messages
2. Compare your changes to original files
3. Revert recent changes if needed
4. Ask for help with specific error messages

## 📋 Quick Reference

### File Purposes:
- **content.js**: All website text
- **images.js**: All image URLs and paths
- **styling.js**: Spacing, sizes, and layout
- **weddingCollections.ts**: Portfolio data

### Safe Editing Zones:
- Anything between quotes `""`
- Number values for spacing
- Array items (list items)
- Image URLs and paths

### Protected Areas:
- Variable names (left side of colons)
- File structure and syntax
- Import statements
- Component logic

Remember: When in doubt, make small changes and test frequently!
