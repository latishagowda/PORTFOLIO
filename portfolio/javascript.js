// Example JavaScript to fetch and display projects
const projectList = document.getElementById('projectList');

// Simulated project data (replace with your actual data)
const projects = [
    { name: 'Book My Tickets', description: 'This is my first front-end project based on html and css where the user can book movie tickets online.' , way: 'Click here to check the website'},
    //{ name: 'Project 2', description: 'This is the second project' },
    //{ name: 'Project 3', description: 'This is the third project' }
    
];

// Display projects
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md');
    projectCard.innerHTML = `
        <h3 class="text-xl font-bold"><U>${project.name}</U></h3>
        <p class="mt-2">${project.description}</p>
        <p class="text-xl>${project.way}</p>
    `;
    projectList.appendChild(projectCard);
});
