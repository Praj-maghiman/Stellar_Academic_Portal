import React, { useState } from 'react';
import clsx from 'clsx';
import PlanetDetails from './PlanetDetails';

// Constants matching the visual spacing in the reference
const CENTER_X = 500;
const CENTER_Y = 500;

// Helper: Calculate Days Due to determine Orbit Ring
const getDaysDue = (dateStr) => {
    const today = new Date();
    const due = new Date(dateStr);
    const diffTime = due - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Helper: Map Time to Orbit Radius (Concentric Rings)
// Inner = Urgent, Outer = Distant
const getOrbitRadius = (daysUntilDue) => {
    if (daysUntilDue < 0) return 420; // Overdue (Outer Edge)
    if (daysUntilDue <= 2) return 140; // Ring 1
    if (daysUntilDue <= 5) return 210; // Ring 2
    if (daysUntilDue <= 10) return 280; // Ring 3
    return 350; // Ring 4 (Distant)
};

// Helper: Get Planet Visual Style (Texture/Size) based on Task Type/Priority
const getPlanetStyle = (task) => {
    const isGasGiant = task.priority >= 5;
    // Styles based on reference image planets
    if (task.type === 'project') {
        // "Jupiter Style" - Striped Orange/Brown
        return {
            size: isGasGiant ? "w-24 h-24" : "w-16 h-16",
            className: "bg-[conic-gradient(at_top,_#ea580c_0%,_#fb923c_25%,_#c2410c_50%,_#fdba74_75%,_#ea580c_100%)] shadow-[inset_-8px_-8px_20px_rgba(0,0,0,0.6)]",
            hasRings: false // Jupiter has faint rings, but let's make Saturn the ringed one
        };
    }
    if (task.type === 'essay' || task.type === 'research') {
        // "Saturn Style" - Ringed Planet (Pale colors)
        return {
            size: "w-16 h-16",
            className: "bg-[radial-gradient(circle_at_30%_30%,_#e2e8f0_0%,_#94a3b8_100%)] shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.5)]",
            hasRings: true
        };
    }
    if (task.type === 'quiz') {
        // "Green/Blue Style" - Earth/Neptune-like
        return {
            size: "w-12 h-12",
            className: "bg-[radial-gradient(circle_at_40%_40%,_#4ade80_0%,_#166534_100%)] shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.6)]",
            hasRings: false
        };
    }
    // Default / Overdue / Asteroid
    return {
        size: "w-10 h-10",
        className: "bg-[radial-gradient(circle_at_30%_30%,_#64748b_0%,_#0f172a_100%)] shadow-sm",
        hasRings: false
    };
};

// Helper: Fixed Golden Angle Positioning
const getPosition = (index, radius) => {
    const angleDeg = index * 137.5; // Golden angle for perfect distribution
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
        x: CENTER_X + radius * Math.cos(angleRad),
        y: CENTER_Y + radius * Math.sin(angleRad)
    };
};

const SolarSystem = ({ tasks = [], onComplete, viewMode = 'fit', onToggleView }) => {
    const [selectedTask, setSelectedTask] = useState(null);

    return (
        <div className={clsx(
            "relative w-full h-full flex items-center justify-center bg-transparent perspective-1000",
            viewMode === 'explore' ? "min-w-[1000px] min-h-[1000px] m-auto overflow-visible" : "overflow-hidden"
        )}>

            {/* View Toggle Controls */}
            <div className="absolute top-4 right-4 z-[100] flex gap-2 bg-black/20 p-1 rounded-lg backdrop-blur-sm border border-white/10">
                <button
                    onClick={() => onToggleView && onToggleView('fit')}
                    className={clsx(
                        "px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all",
                        viewMode === 'fit' ? "bg-neon-cyan text-black shadow-[0_0_10px_#00f7ff]" : "text-[--text-secondary] hover:text-[--text-primary]"
                    )}
                >
                    Fit Orbit
                </button>
                <button
                    onClick={() => onToggleView && onToggleView('explore')}
                    className={clsx(
                        "px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all",
                        viewMode === 'explore' ? "bg-neon-cyan text-black shadow-[0_0_10px_#00f7ff]" : "text-[--text-secondary] hover:text-[--text-primary]"
                    )}
                >
                    Explore
                </button>
            </div>

            {/* SolarSystem Container */}
            <div
                className={clsx(
                    "flex items-center justify-center transition-transform duration-500",
                    // Fix: Use absolute centering for 'fit' to prevent layout overflow of the 1000px box
                    viewMode === 'fit'
                        ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] transform scale-[0.40] md:scale-[0.50] lg:scale-[0.60] xl:scale-[0.70] 2xl:scale-0.90 origin-center"
                        : "relative w-[1000px] h-[1000px]"
                )}
            >

                {/* 1. Orbit Rings (The Cyan Lines) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {[140, 210, 280, 350, 420].map((r, i) => (
                        <div
                            key={i}
                            className={clsx(
                                "absolute rounded-full border",
                                "border-[--text-secondary] opacity-20", // Generalized theme border
                                i === 4 && "border-dashed opacity-30" // Outer rim hint
                            )}
                            style={{ width: r * 2, height: r * 2 }}
                        />
                    ))}
                </div>

                {/* 2. Central Sun (Glowing Yellow Center) */}
                {/* 2. Central Sun (Glowing Yellow Center) - Centering Fix */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-40 h-40 rounded-full bg-yellow-400 shadow-[0_0_100px_rgba(250,204,21,0.8)] flex items-center justify-center">
                    {/* Core Glow */}
                    <div className="absolute inset-0 bg-yellow-300 rounded-full blur-sm" />
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md" />
                    <span className="relative text-white font-black text-2xl tracking-widest z-30 drop-shadow-lg">TODAY</span>
                </div>

                {/* 3. Planets (Stationary, Mapped to Orbits) */}
                {tasks.filter(t => getDaysDue(t.dueDate) >= 0).map((task, index) => {
                    const daysDue = getDaysDue(task.dueDate);
                    const radius = getOrbitRadius(daysDue);
                    const pos = getPosition(index, radius);
                    const style = getPlanetStyle(task);

                    // Note: isOverdue is always false here due to filter, but keeping logic clean
                    const isOverdue = daysDue < 0;


                    return (
                        <div
                            key={task.id}
                            onClick={() => setSelectedTask(task)}
                            className="absolute flex items-center justify-center cursor-pointer group z-30 transition-all duration-700 ease-out"
                            style={{
                                left: pos.x,
                                top: pos.y,
                                width: 0, height: 0,
                            }}
                        >
                            <div className="relative flex items-center justify-center hover:scale-110 transition-transform duration-300">

                                {/* Planet Body */}
                                <div className={clsx(
                                    style.size,
                                    "rounded-full relative z-20",
                                    style.className,
                                    isOverdue && "shadow-[0_0_40px_rgba(168,85,247,0.8)] animate-pulse" // Black hole pulse
                                )}>
                                    {/* Stripes visual trick for Jupiter/Gas Giants */}
                                    {task.priority >= 5 && task.type === 'project' && (
                                        <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(0deg,transparent,transparent_5px,#000_5px,#000_10px)] rounded-full mix-blend-overlay" />
                                    )}
                                </div>

                                {/* Saturn Rings (Visual Only) */}
                                {style.hasRings && (
                                    <div className="absolute w-[160%] h-[40%] border-[6px] border-slate-400/40 rounded-[50%] z-10 transform rotate-12 top-1/2 -mt-[20%] pointer-events-none shadow-sm" />
                                )}

                                {/* Floating Label (Text Only, like Reference) */}
                                <div className={clsx(
                                    "absolute left-full ml-3 whitespace-nowrap z-40 transition-all duration-300",
                                    "text-[--text-secondary] font-medium text-sm tracking-wide group-hover:text-neon-cyan group-hover:scale-105"
                                )}>
                                    {task.title}
                                </div>

                            </div>
                        </div>
                    );
                })}

            </div>

            {/* Details Modal */}
            {selectedTask && (
                <PlanetDetails
                    task={selectedTask}
                    onClose={() => setSelectedTask(null)}
                    onComplete={() => {
                        if (onComplete) onComplete(selectedTask.id);
                        setSelectedTask(null);
                    }}
                />
            )}
        </div>
    );
};

export default SolarSystem;
