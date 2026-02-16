import React from 'react';
import { X, Calendar, AlertTriangle, ExternalLink } from 'lucide-react';

const PlanetDetails = ({ task, onClose, onComplete }) => {
    if (!task) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
            <div className="glass-card max-w-md w-full p-6 relative">

                {/* ... existing code ... */}

                <div className="flex gap-3">
                    <button className="flex-1 py-2.5 px-4 bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/50 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                        Open in LMS <ExternalLink size={16} />
                    </button>
                    <button
                        onClick={onComplete}
                        className="flex-1 py-2.5 px-4 bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/50 text-[--text-primary] border border-[--text-primary]/10 rounded-lg font-medium transition-all"
                    >
                        Mark Complete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlanetDetails;
