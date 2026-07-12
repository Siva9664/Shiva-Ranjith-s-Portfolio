# NeuralOS v2.4.1 — Siva Ranjith Portfolio

An immersive, cinematic "AI Neural Operating System" digital experience presenting **Siva Ranjith**, an AI Engineer specializing in Agentic AI, Multi-Agent Systems, Computer Vision, Robotics, LLM & RAG, and Modern Backend Systems.

Designed to feel like an interactive, futuristic operating system rather than a traditional static developer portfolio.

---

## ⚡ Core Features

- **Cinematic Neural Particle Intro**: A GSAP-driven introductory sequence transitioning from complete darkness into floating particles that connect to form a neural network, assemble into a logo, and explode to reveal the interface.
- **3D Universe Background**: A React Three Fiber (R3F) and Three.js ambient background featuring reactive space star fields, glowing dust nebulae, wireframe geometry, and a perspective camera rigged to mouse movement.
- **Custom Energy Orb Cursor**: High-performance interactive cursor utilizing Canvas trails, magnetic hover snapping to active elements, click ripples, and smooth spring physics.
- **Dynamic AI Agent Pipeline**: An interactive visualization of an agentic workflow with real-time energy packets flowing through step-by-step processing nodes.
- **Interactive Skill Matrix**: A 6-domain tech cluster interface featuring accordion expansion and deep-dive categories.
- **Holographic Projects & Architecture**: Project cards that reveal complete pipeline system architectures on hover.
- **Space Journey Timeline**: Planet-based horizontal journey timeline representing career milestones and academic highlights.
- **Interactive Easter Eggs**: 
  - **Konami Code (`↑↑↓↓←→←→BA`)**: Triggers holographic "AI Mode" featuring a digital rain canvas overlay.
  - **Type `"hello"`**: Prompts an interactive AI chat assistant panel to slide out.
  - **Click logo 5x**: Slides up a Developer Console showcasing system logs.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Runtime**: React 19, TypeScript
- **Styling**: Tailwind CSS, CSS Custom Properties (Design Tokens)
- **3D Engine**: Three.js, React Three Fiber (R3F), Drei
- **Animations**: GSAP (GreenSock), Framer Motion, Lenis (Smooth physics scroll)

---

## 📁 Repository Structure

```
Shiva-Ranjith-s-Portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css       # Core design system & animations
│   ├── layout.tsx        # Next.js Metadata, Viewports, Providers
│   └── page.tsx          # OS component assembler
├── components/
│   ├── 3d/
│   │   └── Background.tsx     # R3F Space nebula & camera rig
│   ├── cursor/
│   │   └── CustomCursor.tsx   # Canvas trail & cursor particles
│   ├── intro/
│   │   └── IntroSequence.tsx  # GSAP particle intro
│   ├── navigation/
│   │   └── Navbar.tsx         # Holographic navbar
│   ├── providers/
│   │   └── SmoothScrollProvider.tsx # Lenis scrolling wrapper
│   ├── sections/
│   │   ├── About.tsx          # Specializations & Bio
│   │   ├── Achievements.tsx   # Stat counters & internship status
│   │   ├── Contact.tsx        # Floating label form & social portals
│   │   ├── Hero.tsx           # Typewriter role cycler & domain chips
│   │   ├── Projects.tsx       # Holographic cards & architecture pipeline
│   │   ├── Research.tsx       # Research papers card
│   │   ├── Skills.tsx         # Domain accordion skill matrix
│   │   ├── Timeline.tsx       # Planet-per-year journey track
│   │   └── Workflow.tsx       # GSAP agent pipeline flow
│   └── ui/
│       └── EasterEggs.tsx     # AI assistant chat, Konami code, Dev console
├── hooks/
│   ├── useMouseParallax.ts
│   └── useScrollProgress.ts
├── lib/
│   └── data.ts                # Main resume and portfolio content data
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.
- Node.js (v18.x or higher recommended)
- npm or yarn

### Installation
1. Clone this repository to your local workspace:
   ```bash
   git clone https://github.com/Siva9664/Shiva-Ranjith-s-Portfolio.git
   cd Shiva-Ranjith-s-Portfolio
   ```

2. Install the system dependencies:
   ```bash
   npm install
   ```

### Running Locally
Run the development server using:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser. The Next.js dev server running on Turbopack will compile pages on the fly.

### Building for Production
To build the application for production use:
```bash
npm run build
```
This runs TypeScript validations, checks CSS directives, and compiles an optimized static build of the portfolio in the `.next/` output directory.

Start the production server using:
```bash
npm run start
```

---

## 🎨 Theme & Customization

The portfolio is driven by the centralized config file `/lib/data.ts` and style declarations in `/app/globals.css`. 

To change personal details, projects, skills, or timeline items, simply update `/lib/data.ts`. The custom CSS properties defined in `/app/globals.css` can be adjusted to change theme colors, fonts, or particle glow sizes.