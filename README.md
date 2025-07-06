# 🎂 Age Calculator

A modern, responsive Age Calculator built with React, Vite, and Tailwind CSS. Calculate your exact age in years, months, days, and get additional insights like total hours, minutes, seconds lived, and days until your next birthday.

## ✨ Features

- **Precise Age Calculation**: Calculate exact age in years, months, and days
- **Detailed Statistics**: View total days, hours, minutes, and seconds lived
- **Live Counter**: Real-time seconds counter that updates every second
- **Next Birthday Countdown**: Shows days remaining until your next birthday
- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI**: Beautiful gradient backgrounds and card-based layouts
- **Smooth Animations**: Engaging count-up animations and hover effects
- **Error Handling**: User-friendly error messages and validation

## 🚀 Demo

[Live Demo](https://rijoan-age-calculator.netlify.app/) - Replace with your actual Vercel URL

## 📱 Screenshots

### Desktop View
<!-- ![Desktop Screenshot](./screenshots/desktop.png) -->
![alt text](image.png)


## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features
- **Vercel** - Deployment platform

## 🏗️ Project Structure

```
src/
├── components/
│   ├── AgeCalculatorHeader.jsx    # Header component with title
│   ├── AgeInputSection.jsx        # Date input fields (Day, Month, Year)
│   ├── AgeResultsSection.jsx      # Results display with cards
│   ├── ErrorNotification.jsx     # Error popup component
│   └── Footer.jsx                 # Footer with attribution
├── hooks/
│   └── useAgeCalculator.js        # Custom hook for age calculations
├── App.jsx                        # Main app component
├── App.css                        # Custom animations and styles
├── main.jsx                       # React DOM entry point
└── index.css                      # Global styles and Tailwind imports
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/age-calculator.git
   cd age-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎯 Key Features Explained

### Age Calculation Algorithm
- Accurately handles leap years and varying month lengths
- Considers edge cases like February 29th birthdays
- Provides precise day-by-day calculations

### Real-time Updates
- Live seconds counter updates every second
- Includes total hours and minutes that also update
- Smooth animations for better user experience

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Adaptive layouts for different screen sizes
- Touch-friendly interface for mobile devices

### Component Architecture
- Modular components for better maintainability
- Custom hooks for business logic separation
- Reusable and testable code structure

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple to indigo gradients
- **Card-based Layout**: Individual cards for each statistic
- **Hover Effects**: Interactive elements with smooth transitions
- **Icon Integration**: Relevant emojis for visual appeal
- **Modern Typography**: Poppins font for clean readability

## 🌐 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it as a Vite project
3. Deploy with default settings

### Manual Deployment
```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Md Rijoan Maruf**
- Website: [rijoan.com](https://rijoan.com)
- GitHub: [@YourGitHubUsername](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the blazing fast build tool
- Vercel for seamless deployment

---

⭐ If you found this project helpful, please give it a star on GitHub!
