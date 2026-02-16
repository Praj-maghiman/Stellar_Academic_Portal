# 🌌 Stellar Academic Portal (OrbitSync)

A high-fidelity, gamified task management dashboard built with React and Tailwind CSS.

## 📚 Documentation
For a comprehensive guide on how this project was built, its architecture, and feature breakdown, please refer to the **Walkthrough Artifact** generated in the project brain: `walkthrough.md`.

## 🚀 Quick Start
1.  `npm install`
2.  `npm run dev`
3.  Open `http://localhost:5173`

![Stellar Academic Portal](https://raw.githubusercontent.com/google-deepmind/orbit-sync/main/preview.png)

##  Features

### The Observatory (Centerpiece)
- **Celestial Logic:** Tasks are planets orbiting a central "Today" sun.
    - **Radial Positioning:** Distance determined by **Due Date** (Inner Rings = Urgent).
    - **Variable Sizing:** Size determined by **Priority** (Gas Giants = High Priority).
- **Visuals:**
    - **Gas Giants:** Striped, massive planets for major projects.
    - **Ringed Planets:** Saturn-style visuals for research papers.
    - **Black Holes:** Overdue tasks are banished to the outer edge (Event Horizon).
- **Golden Angle:** Planets are distributed using the Golden Angle (137.5°) to prevent clumping.
- **Interactive:** Click on any planet to open a Glassmorphism details modal.
- **Functional**: "Mark Complete" removes the planet from orbit.

### Functional Command Center
- **Sidebar Navigation:** Switch between Dashboard, Calendar, Star Log (Task List), and Flight Recorder (Analytics).
- **Calendar View:** A glassmorphism month grid highlighting mission deadlines.
- **Star Log:** A sortable data table for managing all missions.
- **Flight Recorder:** Deep-dive stats on mission velocity and backlog gravity.

### Smart Widgets
- **Workload Pressure Meter:** Dynamically calculates academic load based on active orbits.
- **Overdue Detection:** Automatically identifies and visualizes missed deadlines.

## �️ Tech Stack
-   **Framework:** React (Vite)
-   **Styling:** Tailwind CSS v4 (Glassmorphism, Animations)
-   **Icons:** Lucide React
-   **Utilities:** clsx, tailwind-merge

## 🏃‍♂️ How to Run

1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd orbitsync
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Local Server:**
    ```bash
    npm run dev
    ```

4.  **Explore the Cosmos:**
    Open your browser to `http://localhost:5173`.

## 🎨 customizable Tokens
You can adjust the "Celestial Logic" in `src/components/observatory/SolarSystem.jsx`:
-   `CENTER_X`, `CENTER_Y`: Adjust the center point of the system.
-   `getOrbitRadius`: Modify the distance logic for rings.
-   `getPlanetStyle`: Customize planet textures and sizes.

---
*Built with React & Tailwind CSS for the Stellar Academic Initiative.*