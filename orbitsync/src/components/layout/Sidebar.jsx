import React from 'react';
import {
    LayoutDashboard,
    Calendar,
    ListTodo,
    BarChart2,
    FolderOpen,
    Network,
    Settings
} from 'lucide-react';
import clsx from 'clsx';

const Sidebar = ({ isOpen, activeView = 'dashboard', onNavigate }) => {
    const navItems = [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'calendar', icon: Calendar, label: 'Calendar' },
        { id: 'tasks', icon: ListTodo, label: 'Task List' },
        { id: 'analytics', icon: BarChart2, label: 'Analytics' },
        { id: 'network', icon: Network, label: 'Dependency Graph' },
    ];

    return (
        <aside
            className={clsx(
                "fixed left-0 top-16 h-[calc(100vh-64px)] bg-space-900/50 backdrop-blur-md border-r border-white/5 z-40 transition-all duration-300 overflow-hidden flex flex-col justify-between pb-6",
                isOpen ? "w-64" : "w-20"
            )}
        >
            <div className="flex flex-col gap-2 p-3 mt-4">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate && onNavigate(item.id)}
                        className={clsx(
                            "flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group text-sm font-medium relative",
                            activeView === item.id
                                ? "bg-white/10 text-neon-cyan shadow-[0_0_15px_rgba(0,247,255,0.1)]"
                                : "text-[--text-secondary] hover:bg-white/5 hover:text-[--text-primary]"
                        )}
                    >
                        <item.icon size={20} className={clsx("min-w-[20px]", activeView === item.id && "text-neon-cyan")} />
                        <span className={clsx(
                            "whitespace-nowrap transition-opacity duration-300",
                            isOpen ? "opacity-100 delay-100" : "opacity-0 w-0 overflow-hidden"
                        )}>
                            {item.label}
                        </span>

                        {/* Active Indicator Line */}
                        {activeView === item.id && (
                            <div className="absolute left-0 w-1 h-6 bg-neon-cyan rounded-r-full shadow-[0_0_10px_#00f7ff]" />
                        )}
                    </button>
                ))}
            </div>

            <div className="p-3">
                <button className="flex items-center gap-4 p-3 rounded-xl text-[--text-secondary] hover:text-[--text-primary] hover:bg-white/5 w-full transition-colors">
                    <Settings size={20} className="min-w-[20px]" />
                    <span className={clsx(
                        "whitespace-nowrap transition-opacity duration-300 text-sm font-medium",
                        isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                    )}>
                        Settings
                    </span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
