import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

const TaskCard = ({ type, tasks }) => {
    const isOverdue = type === 'overdue';

    return (
        <div className={clsx(
            "glass-panel rounded-xl p-4 w-full relative overflow-hidden",
            isOverdue ? "border-critical-red/30" : "border-success-green/30"
        )}>
            {/* Glow Effect */}
            <div className={clsx(
                "absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full opacity-20 pointer-events-none",
                isOverdue ? "bg-critical-red" : "bg-success-green"
            )} />

            <h3 className={clsx(
                "text-xs uppercase tracking-widest font-bold mb-3 flex items-center justify-between",
                isOverdue ? "text-critical-red" : "text-success-green"
            )}>
                {isOverdue ? "Overdue Projects" : "Completed Submissions"}
            </h3>

            <div className="space-y-3">
                {tasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-[--text-primary] group-hover:text-neon-cyan transition-colors line-clamp-1">
                                {task.title}
                            </span>
                            <span className="text-[10px] text-[--text-secondary]">{task.subtext}</span>
                        </div>

                        {isOverdue ? (
                            <AlertTriangle size={14} className="text-critical-red animate-pulse ml-2 flex-shrink-0" />
                        ) : (
                            <CheckCircle2 size={14} className="text-success-green ml-2 flex-shrink-0" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskCard;
