# Backline

Just-in-time support for retail fulfillment workers under timer pressure.

## 🎯 Overview

Backline is a CS 185 (Human-Computer Interaction) project from UC Santa Barbara that provides real-time support for first-time deli workers and retail fulfillment associates facing "breakdown moments" that training doesn't prepare them for.

**Live Site:** [notaryaman.github.io/backline](https://notaryaman.github.io/backline/)

---

## 💡 The Problem

First-time deli workers face breakdown moments that training doesn't cover:
- **Missing ingredients** - Turkey sandwich but no turkey?
- **Unclear requests** - "Light mayo" - how light is light?
- **Customer interruptions** - Lose track of order progress
- **Substitution decisions** - Which replacement is acceptable?
- **Help-seeking stigma** - Ask for help vs. looking incompetent

### Key Insight
> "Training covers the official process, but real performance depends on judgment."

---

## ✨ The Solution

Backline provides three core features:

### 01 · Edge-Case Decision Support
Quick reference for unusual situations: substitutions, special requests, out-of-stock items.

### 02 · Low-Friction Escalation
Easy, judgment-free way to get help from experienced colleagues.

### 03 · Interruption Recovery
Resume tasks seamlessly after customer interruptions or multitasking.

---

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom properties, responsive grid
- **JavaScript** - Scroll animations, interactive features
- **Fonts** - Barlow Condensed, Manrope (Google Fonts)

---

## 🎨 Features

### Interactive Elements
- ✅ Scroll reveal animations
- ✅ Card hover and click effects
- ✅ Active navigation highlighting
- ✅ Smooth scroll with offset
- ✅ Header background on scroll
- ✅ Ripple click effects
- ✅ Stats counter animation

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

---

## 🚀 Development

### Local Setup
```bash
# Clone the repository
git clone https://github.com/notaryaman/backline.git

# Navigate to directory
cd backline

# Start local server
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

### File Structure
```
backline/
├── index.html    # Main HTML structure
├── styles.css    # Styling and animations
└── script.js     # Interactive features
```

---

## 📊 Project Context

- **Course:** CS 185 - Human-Computer Interaction
- **Institution:** UC Santa Barbara
- **Quarter:** Winter 2026
- **Team:** Aman Notary, Kush Upadhyay, Eshan Singhal, Rishi Meka

---

## 🎓 Design Process

1. **Needfinding** - User interviews with deli workers
2. **POV Development** - Identified core user needs
3. **Ideation** - Storyboarding and concept development
4. **Prototyping** - Paper → Digital → High-fidelity
5. **Testing** - User feedback and iterations
6. **Implementation** - Final web prototype

---

## 📱 Platform Decision

**Why phone-first?**
- Workers are constantly moving around the workspace
- Phone in pocket is more practical than tablet at fixed station
- One-handed operation while holding food items
- Bottom navigation for thumb accessibility

---

## 🌐 Live Demo

Visit the live site: **[notaryaman.github.io/backline](https://notaryaman.github.io/backline/)**

### Try These Features:
1. Scroll down - watch cards fade in
2. Hover over deliverable cards - see them lift
3. Click a card - ripple effect + expand
4. Click nav links - smooth scroll + highlighting
5. Scroll past hero - header gets background

---

## 📄 License

This project was created for educational purposes as part of CS 185 at UCSB.

---

## 👥 Team

- **Aman Notary** - Lead Designer & Researcher
- **Kush Upadhyay** - UX Designer & Developer
- **Eshan Singhal** - Researcher & Content Designer
- **Rishi Meka** - Designer & Video Producer

---

## 🔗 Links

- **Live Site:** https://notaryaman.github.io/backline/
- **Repository:** https://github.com/notaryaman/backline/

---

Made with ❤️ for CS 185 at UC Santa Barbara
