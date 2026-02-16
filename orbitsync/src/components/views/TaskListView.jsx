import React, { useState } from 'react';
import clsx from 'clsx';
import { ArrowUpDown, CheckCircle } from 'lucide-react';

const TaskListView = ({ tasks }) => {
    const [sortConfig, setSortConfig] = useState({ key: 'dueDate', direction: 'ascending' });

    // Sorted Tasks Logic
    const sortedTasks = React.useMemo(() => {
        let sortableTasks = [...tasks];
        sortableTasks.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        return sortableTasks;
    }, [tasks, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="w-full h-full p-8 flex flex-col overflow-hidden">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-black text-white tracking-wider flex items-center gap-4">
                    <span className="text-neon-cyan">STAR LOG</span>
                    <span className="text-white/20">|</span>
                    <span className="text-white/60 text-xl">All Tasks</span>
                </h1>
                <div className="text-white/40 text-sm">
                    {tasks.length} Active Missions
                </div>
            </header>

            <div className="flex-1 glass-card overflow-hidden flex flex-col">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white/50">
                    <div className="col-span-1 text-center">ID</div>
                    <div
                        className="col-span-4 cursor-pointer hover:text-neon-cyan flex items-center gap-2"
                        onClick={() => requestSort('title')}
                    >
                        Mission Name <ArrowUpDown size={12} />
                    </div>
                    <div
                        className="col-span-2 cursor-pointer hover:text-neon-cyan flex items-center gap-2"
                        onClick={() => requestSort('type')}
                    >
                        Type <ArrowUpDown size={12} />
                    </div>
                    <div
                        className="col-span-2 cursor-pointer hover:text-neon-cyan flex items-center gap-2"
                        onClick={() => requestSort('dueDate')}
                    >
                        Deadline <ArrowUpDown size={12} />
                    </div>
                    <div
                        className="col-span-2 cursor-pointer hover:text-neon-cyan flex items-center gap-2"
                        onClick={() => requestSort('priority')}
                    >
                        Mass <ArrowUpDown size={12} />
                    </div>
                    <div className="col-span-1 text-center">Action</div>
                </div>

                {/* Table Body */}
                <div className="overflow-y-auto flex-1 p-2 space-y-2">
                    {sortedTasks.map(task => (
                        <div key={task.id} className="grid grid-cols-12 gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors items-center border border-transparent hover:border-white/10 group">
                            <div className="col-span-1 text-center text-white/30 text-xs font-mono">{task.id}</div>
                            <div className="col-span-4 font-medium text-white group-hover:text-neon-cyan transition-colors">{task.title}</div>
                            <div className="col-span-2">
                                <span className={clsx(
                                    "px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider",
                                    task.type === 'project' ? "bg-blue-500/20 text-blue-300" :
                                        task.type === 'quiz' ? "bg-orange-500/20 text-orange-300" :
                                            "bg-white/10 text-white/50"
                                )}>
                                    {task.type}
                                </span>
                            </div>
                            <div className="col-span-2 text-sm text-white/70 font-mono">
                                {task.dueDate}
                            </div>
                            <div className="col-span-2">
                                {task.priority >= 5 ? (
                                    <span className="text-purple-400 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" /> Gas Giant</span>
                                ) : task.priority >= 3 ? (
                                    <span className="text-green-400 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> Planet</span>
                                ) : (
                                    <span className="text-orange-400 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500" /> Asteroid</span>
                                )}
                            </div>
                            <div className="col-span-1 flex justify-center">
                                <button className="text-white/20 hover:text-neon-cyan transition-colors" title="Complete Mission">
                                    <CheckCircle size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskListView;
