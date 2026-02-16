import React, { useState } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import RightPanel from './components/widgets/RightPanel';
import SolarSystem from './components/observatory/SolarSystem';
import CalendarView from './components/views/CalendarView';
import TaskListView from './components/views/TaskListView';
import AnalyticsView from './components/views/AnalyticsView';
import LoginPage from './components/views/LoginPage';
import { tasks } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [allTasks, setAllTasks] = useState(tasks);
  const [theme, setTheme] = useState('dark');
  const [viewMode, setViewMode] = useState('fit'); // 'fit' or 'explore'

  // Theme Handling
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Completion Handler
  const handleCompleteTask = (taskId) => {
    setAllTasks(prev => prev.filter(t => t.id !== taskId));
  };

  const handleLogin = () => {
    setCurrentView('dashboard');
  };

  // Conditional View Rendering
  const renderView = () => {
    switch (currentView) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'dashboard':
        return (
          <div className="w-full h-full relative">
            <SolarSystem
              tasks={allTasks}
              onComplete={handleCompleteTask}
              viewMode={viewMode}
              onToggleView={setViewMode}
            />
            <div className="absolute bottom-4 left-4 pointer-events-none opacity-30">
              <h1 className="text-6xl font-black text-[--text-primary] opacity-10 uppercase">Observatory</h1>
            </div>
          </div>
        );
      case 'calendar':
        return <CalendarView tasks={allTasks} />;
      case 'tasks':
        return <TaskListView tasks={allTasks} />;
      case 'analytics':
        return <AnalyticsView tasks={allTasks} />;
      default: // Fallback to Dashboard
        return (
          <div className="w-full h-full relative">
            <SolarSystem
              tasks={allTasks}
              onComplete={handleCompleteTask}
              viewMode={viewMode}
              onToggleView={setViewMode}
            />
          </div>
        );
    }
  };

  return (
    <DashboardLayout
      RightPanel={<RightPanel tasks={allTasks} />}
      currentView={currentView}
      onNavigate={setCurrentView}
      theme={theme}
      toggleTheme={toggleTheme}
      viewMode={viewMode} // Pass to Layout for scrolling control
    >
      {renderView()}
    </DashboardLayout>
  );
}

export default App;
