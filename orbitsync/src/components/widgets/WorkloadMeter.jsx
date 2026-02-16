import React from 'react';
import clsx from 'clsx';

const WorkloadMeter = ({ percentage, collisions }) => {
    // Calculate stroke dasharray for the circle
    // r=40, circumference = 2 * pi * 40 ≈ 251.2
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // Determine color based on load
    const getColor = (p) => {
        if (p < 50) return 'text-success-green';
        if (p < 75) return 'text-solar-yellow';
        return 'text-critical-red';
    };

    const colorClass = getColor(percentage);

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-[--text-secondary] text-xs uppercase tracking-widest mb-4">Workload Pressure Meter</h3>

            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="transform -rotate-90 w-full h-full">
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-[--text-primary] opacity-10"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className={clsx("transition-all duration-1000 ease-out drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]", colorClass)}
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-[--text-primary]">{percentage}%</span>
                    <span className={clsx("text-[10px] font-bold uppercase", colorClass)}>High Load</span>
                </div>
            </div>

            <div className="mt-2 text-center">
                <span className="text-critical-red text-sm font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-critical-red animate-pulse"></span>
                    {collisions} Collisions Predicted
                </span>
            </div>
        </div>
    );
};

export default WorkloadMeter;
