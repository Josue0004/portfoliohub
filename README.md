# PortfolioHub - Professional Portfolio Platform

A comprehensive, modern portfolio platform designed for professionals and students across all career fields. Built with vanilla HTML, CSS, and JavaScript.

![PortfolioHub Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=PortfolioHub+Preview)

##  Features

###  **User Authentication**
- Secure registration and login system
- Support for multiple career fields
- Persistent user sessions with local storage

###  **Social Home Feed**
- Post composer for sharing updates and achievements
- Activity feed with social interactions
- Quick stats dashboard
- Like, comment, and share functionality

###  **Comprehensive Profile System**
- Professional header with cover photo and avatar
- Detailed sections: About, Skills, Experience, Education
- Contact information and social links
- Language proficiency tracking
- CV viewer and download functionality

###  **Modern Design**
- Professional and minimalistic UI
- Dark mode support with smooth transitions
- Responsive design for all devices
- Clean typography and consistent spacing

###  **Advanced Project Management**
- Rich project details with images and documents
- Project categories by profession
- Detailed project viewer pages
- Technology tags and participant tracking

###  **Professional Network**
- User discovery and connection system
- Career-based filtering (CS, Engineering, Design, Business)
- Professional networking features

###  **Multi-Career Support**
- **Engineering**: CS, EE, IE, ME, AE, CE, ChE
- **Design**: Graphic Design, UX/UI, Digital Art, Photography
- **Business**: Marketing, Management, Finance
- **Other**: Any professional field

##  Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfoliohub.git
   cd portfoliohub
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

3. **Create your account**
   - Click "Create Account" on the login screen
   - Select your profession
   - Fill in your basic information

##  Usage

### Creating Your Profile
1. **Complete Registration**: Select your profession and fill in basic info
2. **Edit Profile**: Click "Edit Profile" to add detailed information
3. **Upload Photos**: Add profile picture and cover photo
4. **Add Skills**: Include relevant skills for your field
5. **Experience**: Add your work history and education
6. **Contact Info**: Add email, phone, social media links

### Managing Projects
1. **Add Projects**: Click "Add Project" from the Projects section
2. **Project Details**: Include title, description, technologies, images
3. **Team Members**: Add participants and collaborators
4. **Documents**: Upload project reports, presentations, etc.
5. **View Details**: Click "View Details" to see the full project page

### Social Features
1. **Create Posts**: Share updates, achievements, and project milestones
2. **Build Network**: Connect with other professionals
3. **Discover Users**: Browse professionals by career field
4. **Engage**: Like, comment, and share posts

### Customization
1. **Theme Toggle**: Switch between light and dark modes
2. **Profile Customization**: Personalize your profile appearance
3. **Content Management**: Add, edit, and organize your content

##  Technical Details

### Built With
- **HTML5**: Semantic markup and modern structure
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: ES6+ features, classes, modules
- **Font Awesome**: Professional icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Data Storage
- **Local Storage**: All data stored locally in browser
- **No Backend**: Completely client-side application
- **Data Persistence**: Information saved between sessions
- **Export/Import**: Data can be exported and imported

##  Project Structure

```
portfoliohub/
 index.html          # Main application file
 project.html        # Individual project page template
 styles.css          # Complete styling with dark mode
 script.js           # Application logic and functionality
 README.md           # This file
```

##  Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Slate (#64748b)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

### Components
- **Cards**: Clean, elevated design with subtle shadows
- **Buttons**: Consistent styling with hover effects
- **Forms**: Accessible and user-friendly
- **Modals**: Smooth animations and backdrop blur

##  Customization

### Adding New Career Fields
1. Update the profession options in `index.html`
2. Add specific skills or categories in the JavaScript
3. Customize the UI elements as needed

### Styling Modifications
1. Edit CSS custom properties in `:root`
2. Modify component styles in `styles.css`
3. Update dark theme variables in `[data-theme="dark"]`

### Feature Extensions
1. Add new sections to the profile
2. Create additional post types
3. Implement new networking features

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- **Font Awesome** for the comprehensive icon library
- **Google Fonts** for the Inter font family
- **Modern CSS** techniques for responsive design
- **Vanilla JavaScript** for clean, maintainable code

##  Support

If you have any questions or need help:

1. Check the [Issues](https://github.com/yourusername/portfoliohub/issues) page
2. Create a new issue with detailed description
3. Contact the maintainers

##  Future Enhancements

- [ ] Real-time collaboration features
- [ ] Advanced search and filtering
- [ ] Mobile app development
- [ ] Backend integration options
- [ ] Advanced analytics
- [ ] Team collaboration tools
- [ ] Job board integration
- [ ] Mentorship matching

---

**Built with  for professionals and students worldwide**

*PortfolioHub - Where your career story begins*
