import React, { useState } from 'react';
import TopNav from './TopNav';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, RightPanel, currentView, onNavigate, theme, toggleTheme, viewMode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-space-900 text-[--text-primary] font-sans overflow-hidden flex flex-col transition-colors duration-500">
            {/* Background Effects */}
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>

            {theme === 'dark' ? (
                <>
                    <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
                    <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
                </>
            ) : (
                <>
                    {/* Light Mode "Blueprint" Grid */}
                    <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-transparent to-orange-50/30 pointer-events-none z-0" />
                </>
            )}

            {/* Top Navigation */}
            <TopNav
                onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                theme={theme}
                toggleTheme={toggleTheme}
                onNavigate={onNavigate}
            />

            <div className="flex flex-1 pt-16 h-screen overflow-hidden relative z-10">
                {/* Sidebar */}
                <Sidebar isOpen={isSidebarOpen} activeView={currentView} onNavigate={onNavigate} />

                {/* Main Content Area */}
                {/* Main Content Area */}
                <main className={`flex-1 flex gap-6 p-6 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>

                    {/* Center Workspace (Orbits) - Scroll handling here */}
                    {/* Fix: Remove items-center justify-center in explore mode to allow scrolling */}
                    <div className={`flex-grow glass-panel rounded-2xl relative flex shadow-2xl border border-white/5 ${viewMode === 'explore' ? 'overflow-auto block' : 'overflow-hidden items-center justify-center'}`}>
                        {children}
                    </div>

                    {/* Right Panel (Widgets) */}
                    <aside className="w-80 flex-shrink-0 flex flex-col gap-6 overflow-y-auto pb-4 pr-2">
                        {RightPanel}
                    </aside>

                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
