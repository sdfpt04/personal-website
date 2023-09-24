document.addEventListener('DOMContentLoaded', (event) => {
    const projectList = document.getElementById('project-list');

    const projects = [
        {name: 'personal-website', description: 'a personal website to showcase my developer skills.', image: 'images/project1.png'},
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const projectName = document.createElement('h3');
        projectName.textContent = project.name;
        projectDiv.appendChild(projectName);

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.name;
        projectDiv.appendChild(projectImage);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);

        projectList.appendChild(projectDiv);
    });
});

