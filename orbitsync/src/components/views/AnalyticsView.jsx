import React from 'react';
import clsx from 'clsx';
import { TrendingUp, Activity, AlertTriangle, CheckCircle } from 'lucide-react';

const AnalyticsView = () => {
    return (
        <div className="w-full h-full p-8 flex flex-col overflow-y-auto">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-black text-white tracking-wider flex items-center gap-4">
                    <span className="text-neon-cyan">FLIGHT RECORDER</span>
                    <span className="text-white/20">|</span>
                    <span className="text-white/60 text-xl">System Analytics</span>
                </h1>
            </header>

            <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Metric Card 1 */}
                <div className="glass-card p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Mission Velocity</span>
                        <TrendingUp size={20} className="text-neon-cyan" />
                    </div>
                    <div className="text-4xl font-black text-white">
                        12 <span className="text-sm font-normal text-white/40">tasks/week</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-2">
                        <div className="h-full w-[75%] bg-neon-cyan shadow-[0_0_10px_#00f7ff]" />
                    </div>
                </div>

                {/* Metric Card 2 */}
                <div className="glass-card p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Gravity Well</span>
                        <AlertTriangle size={20} className="text-purple-500" />
                    </div>
                    <div className="text-4xl font-black text-white">
                        3 <span className="text-sm font-normal text-white/40">overdue</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-2">
                        <div className="h-full w-[30%] bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                    </div>
                </div>
            </div>

            <div className="flex-1 glass-card p-8 flex flex-col">
                <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-6">Performance Trajectory</h3>

                {/* Simulated Chart */}
                <div className="flex-1 flex items-end gap-4 relative">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-px bg-white/5" />)}
                    </div>

                    {[40, 65, 30, 80, 55, 20, 90].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 z-10 group">
                            <div
                                className="w-full bg-gradient-to-t from-neon-cyan/20 to-neon-cyan rounded-t-sm transition-all duration-500 group-hover:opacity-100 opacity-80"
                                style={{ height: `${h}%` }}
                            />
                            <span className="text-xs text-white/30 font-mono">Day {i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnalyticsView;
