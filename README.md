# 🚀 Social Media AI Agent

**Your complete AI-powered social media management platform** - Generate viral content, discover trending topics, find influencers, and optimize posts—all in one beautiful dashboard.

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 1. **💡 Content Ideas Generator**
   - AI-powered content ideas based on niche
   - Target audience analysis
   - Engagement-optimized suggestions
   - Industry-specific recommendations

### 2. **🔥 Trending Topics Analyzer**
   - Real-time trending topic discovery
   - Brand usage strategies
   - How to leverage trends for your niche
   - Engagement potential scoring

### 3. **✨ AI Post Generator**
   - One-click viral-ready post generation
   - Multiple content types (Educational, Entertaining, Promotional)
   - Tone customization (Professional, Casual, Witty, Motivational)
   - Engagement scoring

### 4. **🏷️ Keywords & Hashtags**
   - Platform-specific hashtag suggestions
   - SEO-optimized keywords
   - Trending tags for your niche
   - Caption generation

### 5. **👥 Influencer Finder**
   - Nano, Micro, and Macro influencer discovery
   - Verified creator recommendations
   - Engagement metrics
   - Category-based filtering

---

## 🎯 Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS + Custom CSS animations
- **Icons:** Lucide React
- **Deployment:** Vercel (Free)
- **State Management:** React Hooks
- **API:** Ready for Gemini/OpenAI integration

---

## ⚡ Quick Start

### Prerequisites
- Node.js 16+ and npm

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd social-media-ai-agent
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm run dev
```
Opens at `http://localhost:3000` automatically

### 4. Build for Production
```bash
npm run build
npm run preview
```

---

## 🚀 Deployment (Choose One)

### **Vercel** (Recommended - 1 minute)
```bash
npm install -g vercel
vercel
```
[Full Guide →](./DEPLOYMENT_GUIDE.md#option-1-vercel-recommended---30-seconds)

### **Netlify**
```bash
npm run build
netlify deploy --prod --dir=dist
```

### **Railway**
Connect GitHub → Auto deploy

### **Render**
Connect GitHub → Auto deploy

[Complete Deployment Guide →](./DEPLOYMENT_GUIDE.md)

---

## 🔌 API Integration

### Mock Mode (Current)
Currently uses mock responses for demonstration. Test all features instantly without API setup.

### Real Mode (Add AI APIs)

#### Option A: Google Gemini (FREE - 60 requests/min)
```bash
npm install @google/generative-ai
```

#### Option B: OpenAI API
```bash
npm install openai
```

#### Option C: Hugging Face
```bash
npm install @huggingface/inference
```

[See Integration Guide →](./DEPLOYMENT_GUIDE.md#-api-integration-making-it-real)

---

## 📁 Project Structure

```
social-media-ai-agent/
├── src/
│   ├── components/
│   │   └── SocialMediaAIAgent.jsx    (Main component)
│   ├── App.jsx                       (App wrapper)
│   ├── main.jsx                      (Entry point)
│   └── index.css                     (Global styles)
├── index.html                        (HTML template)
├── vite.config.js                    (Vite config)
├── tailwind.config.js                (Tailwind config)
├── postcss.config.js                 (PostCSS config)
├── package.json                      (Dependencies)
├── DEPLOYMENT_GUIDE.md               (Full deployment guide)
└── README.md                         (This file)
```

---

## 🎨 Customization

### Change Brand Name
Edit `src/components/SocialMediaAIAgent.jsx`:
```javascript
<div className="flex items-center gap-2">
  <Sparkles className="w-8 h-8" />
  Your Brand Name Here
</div>
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
}
```

### Add New Features
Follow the same pattern as existing features in the Dashboard component.

---

## 🔐 Environment Variables

Create `.env.local`:
```
VITE_GEMINI_KEY=your_key_here
VITE_OPENAI_KEY=your_key_here
VITE_API_BASE_URL=https://your-api.com
```

Never commit `.env.local` to git.

---

## 📊 Features Status

| Feature | Status | Free | Paid |
|---------|--------|------|------|
| Content Ideas | ✅ Ready | Unlimited | - |
| Trending Topics | ✅ Ready | 10/day | Unlimited |
| Post Generator | ✅ Ready | 5/day | Unlimited |
| Keywords & Hashtags | ✅ Ready | Unlimited | - |
| Influencer Finder | ✅ Ready | 10/day | Unlimited |
| User Accounts | 🔜 Soon | - | Premium |
| Content Calendar | 🔜 Soon | - | Premium |
| Advanced Analytics | 🔜 Soon | - | Premium |

---

## 🛠️ Development

### Add a New Feature
1. Create new tab in Dashboard
2. Add form inputs and state
3. Add mock response in `generateContent`
4. Style with Tailwind classes
5. Test locally with `npm run dev`

### Performance Optimization
```javascript
// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));

// Optimize images (use next/image or equivalent)
// Code split at route level
// Cache API responses
```

---

## 🤝 Contributing

Feel free to fork and submit PRs for:
- New features
- Bug fixes
- Better UX/animations
- API integrations
- Documentation improvements

---

## 📄 License

MIT License - Free for personal and commercial use.

---

## 🆘 Support & Troubleshooting

### Common Issues

**Port already in use?**
```bash
npx vite --port 3001
```

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Styles not working?**
```bash
npm run build && npm run preview
```

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#-troubleshooting) for more solutions.

---

## 🎯 Roadmap

- [ ] User authentication (Firebase)
- [ ] Content calendar/scheduling
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Browser extension
- [ ] AI image generation
- [ ] Video content suggestions

---

## 📞 Get Help

- 📧 Issues? Create a GitHub issue
- 💬 Have ideas? Start a discussion
- 🔗 Live demo: (your deployed URL here)

---

**Built with ❤️ for content creators and brands**

[Deploy Now →](./DEPLOYMENT_GUIDE.md) | [See Demo →](#) | [Star ⭐](##)