# 🎮 Adhi's Tic Tac Toe Game

A fun, fully responsive **Tic Tac Toe** game built with pure HTML, CSS, and JavaScript — featuring a live score dashboard, draw detection, animations, and background music.

---

## 🚀 Live Deployed 

> 🌐 [Play it here → https://zingy-hotteok-789d98.netlify.app/)

---

## ✨ Features

| Feature | Description |
|---|---|
| 📊 **Score Dashboard** | Tracks X wins, O wins, and Draws across games |
| 💾 **Session Persistence** | Scores are saved in `sessionStorage` — survive game resets |
| 🤝 **Draw Detection** | Detects when all 9 cells are filled with no winner |
| 🟢 **Win Highlight** | Winning cells flash green with animation |
| 🟡 **Draw Flash** | All cells pulse gold when a draw occurs |
| 🔢 **Score Bump** | Score numbers animate when they increase |
| 🎵 **Sound Effects** | Background music + click sound + game over audio |
| 📱 **Mobile Responsive** | Fully optimised for phones, tablets, and desktops |
| 🔁 **Reset Button** | Resets the board while keeping session scores |

---

## 📁 Project Structure

```
tic tac toe/
│
├── index.html       ← Main HTML structure & scoreboard UI
├── style.css        ← All styling, animations & responsive layout
├── script.js        ← Game logic, score tracking, win/draw detection
│
├── music.mp3        ← Background music (plays on load)
├── ting.mp3         ← Sound played on each move
├── gameover.wav     ← Sound played when game ends (win or draw)
├── excited.gif      ← GIF shown when someone wins
│
└── .vscode/
    └── launch.json  ← VS Code browser launch config
```

---

## 🖥️ Terminal Commands

### ▶️ Run the project locally

```bash
# Option 1 — Using npx serve (recommended, no install needed)
npx serve .

# Option 2 — On a specific port
npx serve . -p 3000
```

Then open your browser at → **http://localhost:3000**

---

### 📦 Git Commands

```bash
# Check current file changes
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "your message here"

# Push to GitHub
git push origin main

# Pull latest from GitHub
git pull origin main

# View commit history
git log --oneline
```

---

### 🌐 Deploy to GitHub Pages

```bash
# After pushing your code to GitHub:
# 1. Go to your repo on GitHub
# 2. Settings → Pages
# 3. Source: Deploy from branch → main → / (root)
# 4. Save → Your site is live!
```

---

## 🎮 How to Play

1. **Player X** always goes first
2. Click any empty cell to place your mark (**X** or **O**)
3. First player to get **3 in a row** (horizontal, vertical, or diagonal) **wins!**
4. If all 9 cells fill up with no winner → it's a **Draw!** 🤝
5. Click **Reset** to start a new round — scores are kept until you close the tab

---

## 📱 Responsive Breakpoints

| Screen Size | Layout |
|---|---|
| 🖥️ Desktop (> 768px) | Board + Info side by side |
| 📱 Tablet (≤ 768px) | Stacked vertically, centered |
| 📱 Mobile (≤ 480px) | Compact layout, full-width buttons, GIF hidden |

---

## 🛠️ Built With

- **HTML5** — Semantic structure
- **CSS3** — Animations, Grid layout, Media queries
- **Vanilla JavaScript** — Game logic, DOM manipulation, sessionStorage
- **Google Fonts** — Roboto & Baloo Bhaina 2

---

## 👨‍💻 Author

**Adieshwar Reddy**
- GitHub: [@AdieshwarReddy](https://github.com/AdieshwarReddy)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
