import React, { useMemo } from 'react';
import WorkloadMeter from './WorkloadMeter';
import ProductivityChart from './ProductivityChart';
import TaskCard from './TaskCard';
import { productivityData } from '../../data/mockData';

const RightPanel = ({ tasks = [] }) => {

    // Metrics Calculation
    const metrics = useMemo(() => {
        const today = new Date();
        const overdue = [];
        const urgent = [];

        let pressureScore = 0;

        tasks.forEach(task => {
            const dueDate = new Date(task.dueDate);
            const diffTime = dueDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // Overdue Logic
            if (diffDays < 0) {
                overdue.push({ id: task.id, title: task.title, subtext: `${Math.abs(diffDays)} days overdue` });
                pressureScore += 20; // High penalty for overdue
            } else if (diffDays <= 2) {
                urgent.push(task);
                pressureScore += 15; // High pressure for urgent
            } else if (diffDays <= 7) {
                pressureScore += 5; // Moderate pressure
            } else {
                pressureScore += 1; // Low pressure
            }
        });

        // Cap pressure at 100
        const percentage = Math.min(Math.round(pressureScore), 100);

        // Generate Random Graph Data for "Demo" feel
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const randomData = days.map(day => ({
            day,
            xp: Math.floor(Math.random() * 80) + 20 // Random XP between 20 and 100
        }));

        return { overdue, percentage, collisions: urgent.length > 1 ? Math.floor(urgent.length / 2) : 0, graphData: randomData };
    }, [tasks]);

    const completedTasks = [
        { id: '3', title: 'Essay Draft', subtext: 'Quiz 1' },
        { id: '4', title: 'Stats', subtext: 'Quiz 1' },
    ];

    return (
        <div className="flex flex-col gap-8 w-full">
            <WorkloadMeter percentage={metrics.percentage} collisions={metrics.collisions} />
            <ProductivityChart data={metrics.graphData} />

            <div className="flex flex-col gap-4 mt-auto">
                <TaskCard type="overdue" tasks={metrics.overdue} />
                <TaskCard type="completed" tasks={completedTasks} />
            </div>
        </div>
    );
};

export default RightPanel;
