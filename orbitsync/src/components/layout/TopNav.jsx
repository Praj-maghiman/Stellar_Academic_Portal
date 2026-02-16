import React from 'react';
import { Menu, Sun, Moon, User } from 'lucide-react';
import clsx from 'clsx';

const TopNav = ({ onToggleSidebar, theme, toggleTheme, onNavigate }) => {
    return (
        <nav className="h-16 w-full fixed top-0 z-50 bg-space-900/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={onToggleSidebar}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[--text-primary]"
                >
                    <Menu size={24} />
                </button>
                <span className="text-[--text-primary] font-bold tracking-widest text-sm md:text-base uppercase">
                    Stellar Academic Portal
                </span>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[--text-secondary] hover:text-[--text-primary] transition-colors border border-white/10"
                    title="Toggle Theme"
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <div
                    onClick={() => onNavigate && onNavigate('login')}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                >
                    <div className="bg-white/20 p-1.5 rounded-full">
                        <User size={16} className="text-[--text-primary]" />
                    </div>
                    <span className="text-[--text-primary] text-sm font-medium mr-1">Log In</span>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
