// Helper to get dates relative to today
const getRelativeDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
};

export const tasks = [
    // URGENT / IMMINENT (Inner Rings)
    {
        id: "task_01",
        title: "DBMS Normalization Quiz",
        priority: 1,
        status: "imminent",
        dueDate: getRelativeDate(1),
        type: "quiz",
        insight: "Review 3NF and BCNF definitions.",
        planetColor: "bg-orange-400"
    },
    {
        id: "task_06",
        title: "Math Problem Set 4",
        priority: 1,
        status: "imminent",
        dueDate: getRelativeDate(2),
        type: "assignment",
        insight: "Focus on partial derivatives.",
        planetColor: "bg-yellow-400"
    },
    {
        id: "task_09",
        title: "Physics Lab Data Analysis",
        priority: 3,
        status: "active",
        dueDate: getRelativeDate(1),
        type: "assignment",
        insight: "Plot error bars correctly.",
        planetColor: "bg-red-300"
    },
    {
        id: "task_16",
        title: "Submit Internship Resume",
        priority: 5,
        status: "imminent",
        dueDate: getRelativeDate(0),
        type: "career",
        insight: "Double check contact info.",
        planetColor: "bg-emerald-400"
    },

    // ACTIVE / MEDIUM TERM (Middle Rings)
    {
        id: "task_04",
        title: "Physics Lab Report",
        priority: 3,
        status: "active",
        dueDate: getRelativeDate(3),
        type: "assignment",
        insight: "Write conclusion first.",
        planetColor: "bg-red-400"
    },
    {
        id: "task_05",
        title: "History Essay: The Cold War",
        priority: 5, // Gas Giant
        status: "active",
        dueDate: getRelativeDate(5),
        type: "essay",
        insight: "Citations needed for primary sources.",
        planetColor: "bg-green-400"
    },
    {
        id: "task_08",
        title: "Literature Reading: Hamlet",
        priority: 1,
        status: "active",
        dueDate: getRelativeDate(7),
        type: "reading",
        insight: "Read Acts I and II.",
        planetColor: "bg-teal-400"
    },
    {
        id: "task_10",
        title: "Chemistry Prelab",
        priority: 1,
        status: "active",
        dueDate: getRelativeDate(6),
        type: "assignment",
        insight: "Safety quiz required.",
        planetColor: "bg-pink-400"
    },
    {
        id: "task_11",
        title: "Algorithms Worksheet",
        priority: 3,
        status: "active",
        dueDate: getRelativeDate(8),
        type: "assignment",
        insight: "Dynamic programming focus.",
        planetColor: "bg-emerald-500"
    },
    {
        id: "task_17",
        title: "Club Meeting Prep",
        priority: 1,
        status: "active",
        dueDate: getRelativeDate(4),
        type: "extracurricular",
        insight: "Print agenda.",
        planetColor: "bg-purple-400"
    },
    {
        id: "task_18",
        title: "Code Review: Group Project",
        priority: 3,
        status: "active",
        dueDate: getRelativeDate(5),
        type: "project",
        insight: "Check for merge conflicts.",
        planetColor: "bg-blue-400"
    },

    // DISTANT / LONG TERM (Outer Rings)
    {
        id: "task_02",
        title: "Final Project: The Observatory",
        priority: 5,
        status: "stable",
        dueDate: getRelativeDate(14),
        type: "project",
        insight: "Implement final polish phases.",
        planetColor: "bg-blue-500"
    },
    {
        id: "task_07",
        title: "Internship Application: NASA",
        priority: 5,
        status: "stable",
        dueDate: getRelativeDate(30),
        type: "career",
        insight: "Draft cover letter.",
        planetColor: "bg-indigo-500"
    },
    {
        id: "task_12",
        title: "Research Paper: Quantum Computing",
        priority: 5, // Ringed Planet
        status: "stable",
        dueDate: getRelativeDate(45),
        type: "research",
        insight: "Find 5 more IEEE papers.",
        planetColor: "bg-cyan-600"
    },
    {
        id: "task_13",
        title: "Semester Capstone Design",
        priority: 5,
        status: "stable",
        dueDate: getRelativeDate(60),
        type: "project",
        insight: "Prototype phase.",
        planetColor: "bg-violet-600"
    },
    {
        id: "task_14",
        title: "Study for Midterms",
        priority: 3, // Planet
        status: "stable",
        dueDate: getRelativeDate(20),
        type: "study",
        insight: "Create flashcards.",
        planetColor: "bg-amber-500"
    },
    {
        id: "task_19",
        title: "Hackathon Preparation",
        priority: 3,
        status: "stable",
        dueDate: getRelativeDate(25),
        type: "extracurricular",
        insight: "Form team.",
        planetColor: "bg-rose-500"
    },
    {
        id: "task_20",
        title: "Machine Learning Course",
        priority: 5,
        status: "stable",
        dueDate: getRelativeDate(35),
        type: "course",
        insight: "Complete Week 4 modules.",
        planetColor: "bg-teal-600"
    },
    {
        id: "task_21",
        title: "Portfolio Website Update",
        priority: 3,
        status: "stable",
        dueDate: getRelativeDate(18),
        type: "personal",
        insight: "Add recent projects.",
        planetColor: "bg-fuchsia-500"
    },
    {
        id: "task_22",
        title: "Read: The Pragmatic Programmer",
        priority: 1,
        status: "stable",
        dueDate: getRelativeDate(40),
        type: "reading",
        insight: "Chapter 5.",
        planetColor: "bg-sky-400"
    },

    // OVERDUE / BLACK HOLES
    {
        id: "task_03",
        title: "Backlog from Last Semester",
        priority: 5,
        status: "overdue",
        dueDate: getRelativeDate(-10),
        type: "backlog",
        insight: "Clear this ASAP.",
        planetColor: "bg-purple-900"
    },
    {
        id: "task_15",
        title: "Missed Calculus Quiz",
        priority: 1,
        status: "overdue",
        dueDate: getRelativeDate(-2),
        type: "quiz",
        insight: "Email professor.",
        planetColor: "bg-red-800"
    },
    {
        id: "task_23",
        title: "Return Library Books",
        priority: 1,
        status: "overdue",
        dueDate: getRelativeDate(-5),
        type: "admin",
        insight: "Fine is accumulating.",
        planetColor: "bg-gray-500"
    }
];

export const userProfile = {
    name: "Astronaut User",
    role: "Cadet",
    xp: 1250,
    level: 5
};

export const productivityData = [
    { day: "Mon", xp: 40 },
    { day: "Tue", xp: 65 },
    { day: "Wed", xp: 30 },
    { day: "Thu", xp: 80 },
    { day: "Fri", xp: 55 },
    { day: "Sat", xp: 20 },
    { day: "Sun", xp: 90 },
];
