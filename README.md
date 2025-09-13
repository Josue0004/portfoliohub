# Portfolio Builder

A modern, responsive portfolio website builder that allows users to showcase their projects to potential employers. Built with vanilla HTML, CSS, and JavaScript.

## Features

-  **Modern Design**: Clean, professional interface with smooth animations
-  **Responsive**: Works perfectly on desktop, tablet, and mobile devices
-  **Easy to Use**: Simple interface for adding, editing, and managing projects
-  **Auto-Save**: Projects are automatically saved to your browser's local storage
-  **Project Showcase**: Display project images, descriptions, tech stacks, and links
-  **Contact Form**: Built-in contact form for potential employers
-  **Social Links**: Easy integration with LinkedIn, GitHub, and Twitter
-  **Interactive**: Hover effects, smooth scrolling, and modal dialogs

## Getting Started

1. **Download the files**: Save all three files (`index.html`, `styles.css`, `script.js`) in the same folder
2. **Open in browser**: Double-click `index.html` or open it in your web browser
3. **Start building**: Click "Add Your First Project" to begin creating your portfolio

## How to Use

### Adding Projects

1. Click the "Add Project" button
2. Fill in the project details:
   - **Project Title**: Name of your project
   - **Description**: Brief description of what the project does
   - **Image URL**: Link to a project screenshot or logo (optional)
   - **Technologies Used**: Comma-separated list of technologies
   - **Live Demo URL**: Link to the live version of your project
   - **GitHub Repository**: Link to your source code
3. Click "Save Project"

### Editing Projects

1. Hover over any project card
2. Click the edit (pencil) icon
3. Modify the project details
4. Click "Save Project"

### Deleting Projects

1. Hover over any project card
2. Click the delete (trash) icon
3. Confirm the deletion

### Customizing Your Portfolio

- **Contact Information**: Edit the contact details in the HTML file
- **Social Media Links**: Update the social media URLs in the contact section
- **Personal Information**: Modify the about section to reflect your background

## File Structure

```
portfolio-builder/
 index.html          # Main HTML file
 styles.css          # CSS styling
 script.js           # JavaScript functionality
 README.md           # This file
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Data Storage

Your projects are stored locally in your browser using localStorage. This means:
-  Your data persists between browser sessions
-  No server required - works offline
-  Data is tied to the specific browser and device
-  Clearing browser data will remove your projects

## Customization Tips

### Changing Colors
Edit the CSS variables in `styles.css` to match your brand:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #f3f4f6;
    --text-color: #1f2937;
}
```

### Adding More Sections
You can easily add new sections by:
1. Adding HTML structure in `index.html`
2. Adding corresponding CSS in `styles.css`
3. Adding navigation links in the header

### Styling Modifications
The CSS is well-organized with clear sections:
- Base styles and resets
- Header and navigation
- Hero section
- About section
- Projects section
- Contact section
- Modal dialogs
- Responsive design

## Troubleshooting

### Projects Not Saving
- Ensure JavaScript is enabled in your browser
- Check that localStorage is available (some private browsing modes disable it)

### Images Not Loading
- Verify that image URLs are correct and accessible
- Use HTTPS URLs when possible
- Consider using a service like Imgur or Cloudinary for hosting

### Contact Form Not Working
- The contact form currently logs data to the console
- To make it functional, you'll need to integrate with a backend service
- Consider using services like Formspree, Netlify Forms, or EmailJS

## Future Enhancements

Potential features for future versions:
- Export/import portfolio data
- Multiple portfolio themes
- PDF generation
- Backend integration for data persistence
- User authentication
- Project categories and filtering
- Analytics and visitor tracking

## Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure all files are in the same directory
3. Try refreshing the page
4. Clear browser cache if needed

## License

This project is open source and available under the MIT License.

---

**Happy portfolio building!** 
