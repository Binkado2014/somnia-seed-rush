# somnia-seed-rush
Mini Web3 farming game built for Somnia Testnet Hackathon
# Somnia Seed Rush 🌱

A lightweight onchain farming mini-game built for the [Somnia Testnet Hackathon](https://dorahacks.io/hackathon/somnia-minigame/detail), where players can plant, water, and harvest digital seeds to earn Somnia Points and climb the leaderboard. Built to simulate simple real-time activities and support the Somnia ecosystem with fun gameplay.

---

## 🚀 Play Now

> Coming Soon: [https://your-deployment-link.vercel.app](https://your-deployment-link.vercel.app)

---

## 🎮 How to Play

1. Click “Plant” to begin your farm.
2. Click “Water” every few seconds to keep your crop healthy.
3. Click “Harvest” to collect your points.
4. Each successful harvest increases your Somnia Points.
5. Points reset if you don’t water in time (adds urgency).
6. Connect wallet (Simulated or Real) to store progress.

🪙 Bonus: Future version may include rewards in $SOM or NFTs for top players.

---

## 🎥 Demo Video

> 📺 Watch a short demo: [https://your-demo-link.com](https://your-demo-link.com)

---

## 💾 Deployment

Game is deployed fully on the Somnia Testnet.

- All interactions stored onchain.
- No backend server required.
- Lightweight and mobile-friendly.

---

## 📁 Files Included

| File          | Description                             |
|---------------|-----------------------------------------|
| `index.html`  | Game UI and layout                      |
| `style.css`   | Styling and visual design               |
| `game.js`     | Game logic (plant, water, harvest)      |
| `demo-guide.txt` | Instructions for recording the demo  |
| `assets/`     | Image or sound files used in game       |

---

## 👨🏽‍💻 Built By

**Bin Kado Team**  
🇳🇬 Katsina, Nigeria  
Twitter: [@Amg_k3Hub](https://twitter.com/Amg_k3Hub)  
Email: amgk3hotline@gmail.com  

---

## 🧩 Tech Stack

- HTML, CSS, JavaScript
- Somnia Testnet APIs
- GitHub Pages or Vercel

---

## 📜 License

MIT License - open source and free to build upon.

---

> 🚧 This project is under active development as part of the Somnia Hackathon (July 21 - Aug 4, 2025).
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Somnia Seed Rush 🌱</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>🌱 Somnia Seed Rush</h1>
    <p>Plant, Water, and Harvest to earn points on the Somnia Testnet.</p>

    <div id="game">
      <button id="plantBtn">🌾 Plant Seed</button>
      <button id="waterBtn" disabled>💧 Water Plant</button>
      <button id="harvestBtn" disabled>🧺 Harvest</button>

      <div id="status">No seed planted yet.</div>
      <div id="points">🌟 Points: 0</div>
    </div>

    <footer>
      <p>Built with ❤️ by <a href="https://twitter.com/Amg_k3Hub" target="_blank">@Amg_k3Hub</a></p>
    </footer>
  </div>

  <script src="game.js"></script>
</body>
</html>
body {
  background: #f0f9f0;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
}

h1 {
  color: #2e7d32;
}

button {
  margin: 0.5rem;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

#plantBtn {
  background-color: #81c784;
}

#plantBtn:hover {
  background-color: #66bb6a;
}

#waterBtn {
  background-color: #4fc3f7;
}

#waterBtn:hover {
  background-color: #29b6f6;
}

#harvestBtn {
  background-color: #fff176;
}

#harvestBtn:hover {
  background-color: #ffee58;
}

#status, #points {
  margin-top: 1rem;
  font-weight: bold;
}

footer {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #888;
}
let points = 0;
let stage = 0;
const statusText = document.getElementById('status');
const pointsText = document.getElementById('points');

function updateStatus(msg) {
  statusText.textContent = msg;
}

function updatePoints(val) {
  points += val;
  pointsText.textContent = "🌟 Points: " + points;
}

function plantSeed() {
  if (stage === 0) {
    updateStatus("🌱 Seed planted! Water it now.");
    stage = 1;
    updatePoints(5);
  } else {
    updateStatus("⛔ You’ve already planted. Continue...");
  }
}

function waterPlant() {
  if (stage === 1) {
    updateStatus("💧 Watered! Time to harvest.");
    stage = 2;
    updatePoints(10);
  } else if (stage < 1) {
    updateStatus("🌱 You need to plant first!");
  } else {
    updateStatus("⛔ Already watered.");
  }
}

function harvestCrop() {
  if (stage === 2) {
    updateStatus("🎉 Harvested successfully! Plant again?");
    stage = 0;
    updatePoints(20);
  } else {
    updateStatus("⛔ You can't harvest yet!");
  }
}# 🌱 Somnia Seed Rush

**Somnia Seed Rush** is a mini Web3 farming game built for the [Somnia Testnet](https://somnia.io).  
Plant seeds, water them, and harvest for rewards — all while tracking your progress in real-time!

---

## 🎮 How to Play

1. **Click “Plant Seed”** – to begin your farming session  
2. **Click “Water Plant”** – after planting  
3. **Click “Harvest Crop”** – to gain the full reward  
4. Each successful round gives you more 🌟 points!

> 🔁 Repeat the process to keep earning and farming.

---

## 🛠️ Features

- Simple farming mechanics  
- Real-time game logic using JavaScript  
- Clean, responsive UI  
- Optimized for Web3 deployment  
- Can be expanded with wallet integration and onchain events

---

## 💻 Built With

- HTML + CSS + JavaScript  
- Somnia Web3 Testnet  
- GitHub + Vercel (for hosting)  

---

## 🔗 Live Game Link

> Coming Soon... *(To be deployed on Vercel or Netlify)*

---

## 📹 Demo Video

> [Watch on YouTube](#) *(Link will be added after recording)*

---

## 🪪 License

MIT License – Free to use, modify, and build upon.

---

## 🙌 Contribution

Pull requests and ideas are welcome!  
For questions, contact us via [Telegram](https://t.me/amg_k3hub) or open an issue in this repo.

---

## 📌 Developed by

**Amg_k3Hub** & team  
For the [DoraHacks x Somnia Mini Games Hackathon](https://dorahacks.io)
MIT License

Copyright (c) 2025 Amg_k3Hub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN  
THE SOFTWARE.
