// Animate skill bars upon scroll into view
const animateSkills = () => {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    bar.style.width = bar.getAttribute('style').split('width:')[1];
  });
};

window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection.getBoundingClientRect().top < window.innerHeight - 50) {
    animateSkills();
  }
});

// Example Projects—customize/add your own!
const projects = [
  {
    title: "Modern Brand Website",
    description: "A sleek and modern website for a fictional brand, showcasing products and services.",
    link: "https://digishivam.github.io/anande-shop/"
  },
  {
    title: "Modern Portfolio Website",
    description: "A visually stunning portfolio website showcasing my projects and skills.",
    link: "https://digishivam.github.io/portfolio/"
  },
  {
    title: "Creative Profile Card",
    description: "A visually appealing profile card component showcasing user information.",
    link: "https://digishivam.github.io/profile-card/"
  }
];

window.addEventListener("DOMContentLoaded", function () {
  // Render projects
  const projectList = document.getElementById("project-list");
  projects.forEach(project => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text flex-grow-1">${project.description}</p>
          <a href="${project.link}" class="btn btn-gradient mt-3" target="_blank">View Project</a>
        </div>
      </div>
    `;
    projectList.appendChild(col);
  });

  // Contact form interaction
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      document.getElementById('form-msg').innerText = 'Thank you for reaching out! I\'ll reply soon.';
      form.reset();
    });
  }
});
