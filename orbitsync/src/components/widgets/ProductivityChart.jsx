import React from 'react';

const ProductivityChart = ({ data }) => {
    const maxVal = Math.max(...data.map(d => d.xp));

    return (
        <div className="w-full">
            <h3 className="text-[--text-secondary] text-xs uppercase tracking-widest mb-4">Productivity Points</h3>

            <div className="flex items-end justify-between h-24 gap-2 w-full px-2">
                {data.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1 group w-full">
                        <div
                            className="w-full bg-[--text-primary] opacity-10 rounded-t-sm relative transition-all duration-500 hover:bg-neon-cyan/50 group-hover:shadow-[0_0_10px_rgba(0,247,255,0.4)]"
                            style={{ height: `${(item.xp / maxVal) * 100}%` }}
                        >
                            {/* Tooltip */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-space-900 border border-white/20 px-2 py-1 rounded text-xs text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {item.xp} XP
                            </div>
                        </div>
                        <span className="text-[10px] text-[--text-secondary]">{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductivityChart;
