import React from 'react';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarView = ({ tasks }) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // Simulation: Uses current month
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    // Helper to check if a date has tasks
    const getTasksForDay = (day) => {
        // Simplified logic: Check if any task's due date matches this day number (approximate for demo)
        // In a real app we'd compare full date objects.
        return tasks.filter(t => {
            const d = new Date(t.dueDate);
            return d.getDate() === day && d.getMonth() === currentDate.getMonth();
        });
    };

    // Generate grid (approximate 30 days)
    const gridDays = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div className="w-full h-full flex flex-col p-8 overflow-y-auto">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-black text-white tracking-wider flex items-center gap-4">
                    <span className="text-neon-cyan">MISSION TIMELINE</span>
                    <span className="text-white/20">|</span>
                    <span className="text-white/60 text-xl">{currentMonth} {currentYear}</span>
                </h1>
                <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </header>

            <div className="flex-1 glass-card p-6 flex flex-col">
                {/* Weekday Headers */}
                <div className="grid grid-cols-7 mb-4">
                    {days.map(day => (
                        <div key={day} className="text-center text-white/40 text-sm font-bold uppercase tracking-widest py-2">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 flex-1 gap-4">
                    {gridDays.map(day => {
                        const dayTasks = getTasksForDay(day);
                        const isToday = day === currentDate.getDate();

                        return (
                            <div key={day} className={clsx(
                                "relative min-h-[100px] rounded-xl border p-3 flex flex-col gap-2 transition-all duration-300",
                                isToday ? "bg-white/10 border-neon-cyan/50 shadow-[0_0_15px_rgba(0,247,255,0.1)]" : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                            )}>
                                <span className={clsx("text-sm font-bold", isToday ? "text-neon-cyan" : "text-white/60")}>{day}</span>

                                {dayTasks.map(task => (
                                    <div key={task.id} className={clsx(
                                        "text-[10px] px-2 py-1 rounded w-full truncate font-medium",
                                        task.priority >= 5 ? "bg-purple-500/20 text-purple-200 border border-purple-500/30" :
                                            task.priority >= 3 ? "bg-blue-500/20 text-blue-200 border border-blue-500/30" :
                                                "bg-white/10 text-white/70"
                                    )}>
                                        {task.title}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CalendarView;
