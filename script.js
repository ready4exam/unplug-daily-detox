const TASK_BANK = [
    { id: 't1', title: 'Brain Dump', description: 'Clear your mind', instructions: 'Write everything on your mind for 5 minutes.', category: 'journaling', time: 5, difficulty: 'easy', ageGroups: ['young', 'prime'] },
    { id: 't2', title: 'Silent Sitting', description: 'Find inner peace', instructions: 'Sit for 5 minutes without any screens or noise.', category: 'mindfulness', time: 5, difficulty: 'easy', ageGroups: ['teen', 'young', 'prime', 'seasoned', 'golden'] },
    { id: 't3', title: 'Desk Tidy', description: 'Organize your space', instructions: 'Clear your desk completely.', category: 'home', time: 10, difficulty: 'easy', ageGroups: ['teen', 'young', 'prime'] },
    { id: 't4', title: 'Nature Walk', description: 'Observe the world', instructions: 'Walk for 15 minutes without phone.', category: 'nature', time: 15, difficulty: 'medium', ageGroups: ['teen', 'young', 'prime', 'seasoned', 'golden'] },
    { id: 't5', title: 'Gratitude List', description: 'Focus on good', instructions: 'Write 3 specific things you are grateful for.', category: 'journaling', time: 5, difficulty: 'easy', ageGroups: ['teen', 'young', 'prime', 'seasoned', 'golden'] },
    { id: 't6', title: 'Read 10 pages', description: 'Expand your mind', instructions: 'Read any book for 10 pages.', category: 'reading', time: 15, difficulty: 'medium', ageGroups: ['teen', 'young', 'prime', 'seasoned', 'golden'] },
    { id: 't7', title: 'Stretch', description: 'Loosen up', instructions: 'Do simple neck and shoulder stretches.', category: 'physical', time: 10, difficulty: 'easy', ageGroups: ['young', 'prime', 'seasoned', 'golden'] },
    { id: 't8', title: 'Old Photo Label', description: 'Preserve history', instructions: 'Find an old photo and write a note on it.', category: 'home', time: 10, difficulty: 'easy', ageGroups: ['seasoned', 'golden'] }
];

const state = {
    ageGroup: localStorage.getItem('unplug_age') || null,
    streak: JSON.parse(localStorage.getItem('unplug_streak')) || { count: 0, lastDate: null },
    completed: JSON.parse(localStorage.getItem('unplug_completed')) || {}
};

function init() {
    if (!state.ageGroup) showScreen('age-screen');
    else showScreen('home-screen');
    setTimeout(() => {
        if (!state.ageGroup) return;
        document.getElementById('splash-screen').classList.remove('active');
        showScreen('home-screen');
    }, 1800);
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Logic to pick tasks based on date seed
function getDailyTasks() {
    const today = new Date().toISOString().split('T')[0];
    // Simplified logic for brevity: filter by age
    return TASK_BANK.filter(t => t.ageGroups.includes(state.ageGroup)).slice(0, 3);
}

document.addEventListener('DOMContentLoaded', init);