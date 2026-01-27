# 🌈 Iris Dashboard

Monitor and preview 22+ websites in real-time with beautiful, responsive design.

[![Live Demo](https://img.shields.io/badge/→%20OPEN%20DASHBOARD-brightblue?style=for-the-badge&logo=github-pages)](https://YOUR_USERNAME.github.io/iris/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/YOUR_USERNAME/iris)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)]()

## 📸 Preview

**[→ Click to open live dashboard](https://whsu45.github.io/Iris/)**

---

## ✨ Features

- 🖼️ **Live Website Previews** - Real-time screenshots of each monitored website
- 📊 **Grid Dashboard** - Beautiful 4x3 grid layout with 12 sites per page
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔗 **Quick Links** - Direct access to each website with one click
- ⚡ **Fast Loading** - Optimized performance with lazy loading
- 📄 **Easy Management** - Update URLs in a simple JSON configuration
- 🎯 **Pagination** - Navigate through multiple pages of websites
- 🔄 **Refresh** - Manually refresh all previews
- 📂 **Perxona** - Open Perxona website on current page simultaneously

---

## 🌐 Monitored Websites

| # | Website | Link |
|---|---------|------|
| 1 | Perxona Console | https://console.perxona.ai/eu |
| 2 | Acropolis | https://reurl.cc/4bp5RY |
| 3 | Bounce | https://www.perxona.ai/bounce |
| 4 | Demo Site | https://demo.perxona.ai |
| 5 | Flatmedical | https://www.flatmedical.com/evi |
| 6 | JP Expo | https://live.perxona.ai/jp/jpmarketing/ |
| 7 | Nia | https://reurl.cc/R9YZDz |
| 8 | NPA | https://reurl.cc/VmYdnN |
| 9 | Perxona | https://www.perxona.ai/ |
| 10 | Rossi | https://reurl.cc/oKROR3 |
| 11 | Tribe | https://reurl.cc/W802yk |
| 12 | Yoli | https://reurl.cc/jm9nyq |
| 13 | Yushan Home | https://www.yushanhome.com/ |
| 14 | Sun Origin | https://sunorigin.com.tw/ |
| 15 | Riversoft | https://live.perxona.ai/jp/riversoft/Luka |
| 16 | Alzak | https://live.perxona.ai/eu/alza/Alzak |
| 17 | Lot Design | https://www.lotdesign.com.tw/ |
| 18 | Emma | https://reurl.cc/mk5e3W |
| 19 | Crescent | https://reurl.cc/3bEd7j |
| 20 | Boihomgo | https://www.boihomgo.com/ |
| 21 | Rexon | https://live.perxona.ai/jp/rexon/lily |
| 22 | Pashou | https://live.perxona.ai/jp/reptile/pashou_reptile |

---

## 🚀 Quick Start

### View the Dashboard

1. **[Click here to open the live dashboard](https://YOUR_USERNAME.github.io/iris/)**
2. Navigate between pages using Previous/Next buttons
3. Click any card to open the website
4. Use "Perxona" to open Perxona website on the current page

### For Developers

**Clone the repository:**
```bash
git clone https://github.com/whsu45/Iris.git
cd iris
```


---

## 📋 How It Works

1. **Frontend Dashboard** (GitHub Pages)
   - Beautiful responsive UI in `/docs`
   - Displays 12 websites per page
   - Pagination support

2. **Website Previews** (Vercel Backend)
   - Screenshots generated via Puppeteer
   - Serverless function on Vercel
   - Automatic caching for performance

3. **Easy Updates**
   - Edit `docs/js/app.js` to update URLs
   - Push to GitHub
   - Dashboard automatically updates

---

## ⚙️ Configuration

### Update Website URLs

Edit `docs/js/app.js`:

```javascript
const urls = {
  "base_url": "https://console.perxona.ai/eu",
  "acropolis_url": "https://reurl.cc/4bp5RY",
  // ... add more URLs
  "custom_url": "https://your-website.com"
};
```

### Customize Styling

Edit `docs/css/style.css` to change:
- Colors
- Grid layout
- Typography
- Responsiveness

---

## 🎨 Customize Icons

The dashboard automatically assigns icons to websites. Edit the `getIconForUrl()` function in `docs/js/app.js`:

```javascript
function getIconForUrl(name) {
  const icons = {
    console: '🖥️',
    demo: '🎯',
    live: '🎬',
    perxona: '💼',
    // Add your custom icons
  };
  // ...
}
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📊 Status Indicators

- 🟢 **Green** - Website preview loaded successfully
- 🟡 **Yellow** - Preview loading or blocked by CORS
- 🔴 **Red** - Failed to load preview

---

## 🌟 Why "Iris"?

In ancient Greek mythology, Iris was the goddess of communication and the messenger of the gods. This dashboard serves as a "messenger," helping you communicate with and monitor 22+ websites at once. Perfect fit! 🌈

---

## 🚀 Deployment

### GitHub Pages (Already Enabled!)

Your dashboard is automatically deployed to:
```
https://whsu45.github.io/iris/
```

Every time you push to the `main` branch, GitHub automatically updates your live dashboard!

### Custom Domain (Optional)

To use your own domain:

1. Go to Settings → Pages
2. Add your custom domain
3. Update DNS records (see GitHub documentation)

---

## ✅ Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📞 Contact

- GitHub: [@whsu45](https://github.com/YOUR_USERNAME)

---

**Made with 💜 using HTML, CSS, JavaScript & GitHub Pages**

