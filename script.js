const projects = [
  {
    title: "Modern Portfolio Website",
    description:
      "A visually rich and responsive portfolio website made entirely with HTML, CSS, and JavaScript.",
    link: "https://digishivam.github.io/portfolio/",
  },
  {
    title: "Interactive Branding Experience",
    description:
      "An immersive branding experience showcasing the power of design in storytelling.",
    link: "https://digishivam.github.io/anande-shop/",
  },
  {
    title: "Creative Profile Card",
    description:
      "A visually appealing profile card showcasing my skills and projects.",
    link: "https://digishivam.github.io/profile-card/",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card h-100 shadow">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
        </div>
      </div>
    `;
    projectList.appendChild(col);
  });
});
