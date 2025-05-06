// 
const container = document.getElementById("project-list");
const pagination = document.getElementById("pagination");

const projectsPerPage = 6;
let currentPage = 1;

const projects = [
  {
    title: "API do Brasileirão",
    badge: "Backend",
    description: " API RESTful para acesso a dados do Campeonato Brasileiro de Futebol (Séries A-D). Desenvolvida em Java com Spring Boot, fornece informações atualizadas sobre times, jogadores, partidas e classificações.",
    tags: ["Java", "Spring Boot", "Git"],
    image: "../../assets/image/brasileirao-logo-ouro.png", 
    detailsLink: "#",
    githubLink: "https://github.com/carlos0ff/Brasileirao-API"
  },
  {
    title: "Pokédex",
    badge: "Frontend",
    description: "A Pokédex é um dispositivo eletrônico que cataloga e fornece informações sobre todas as espécies Pokémon conhecidas.",
    tags: ["HTML5", "CSS3", "Javascript"],
    image: "../../assets/image/brasileirao-logo-ouro.png", 
    detailsLink: "/projetos/okedex ",
    githubLink: "#"
  },
  {
    title: "Localizza",
    badge: "Backend",
    description: "Um projeto de teste",
    tags: ["PHP", "MySQL", "HTML5", "CSS3"],
    image: "../../assets/image/brasileirao-logo-ouro.png",
    detailsLink: "#",
    githubLink: "#"
  }
];

function getBadgeColor(badge) {
  switch (badge.toLowerCase()) {
    case "backend":
      return "bg-blue-600/50 text-blue-100";
    case "frontend":
      return "bg-pink-600/50 text-pink-100";
    case "infraestrutura":
      return "bg-yellow-500/20 text-yellow-200";
    default:
      return "bg-gray-600/50 text-gray-100";
  }
}
  
function renderProjects() {
  container.innerHTML = "";
  const start = (currentPage - 1) * projectsPerPage;
  const end = start + projectsPerPage;
  const currentProjects = projects.slice(start, end);
  
  currentProjects.forEach(project => {
    const tagHTML = project.tags.map(tag =>
      `<span class="px-3 py-1 bg-gray-700 text-gray-100 text-xs rounded-full">${tag}</span>`
    ).join("");

    container.innerHTML += `
      <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
        <div class="h-48 bg-indigo-900 flex items-center justify-center">
          <img src="${project.image}" alt="Logo do projeto" class="w-full h-full object-cover">
        </div>

        <div class="p-6">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-bold">${project.title}</h3>
            <span class="text-xs ${getBadgeColor(project.badge)} px-2 py-1 rounded">${project.badge}</span>
          </div>

          <p class="text-gray-400 mb-4">${project.description}</p>

          <div class="flex flex-wrap gap-2 mb-4">
            ${tagHTML}
          </div>

          <div class="flex justify-between items-center">
            <a href="${project.detailsLink}" class="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
              Ver detalhes <i class="fas fa-arrow-right ml-2"></i>
            </a>
            <a href="${project.githubLink}" target="_blank" class="text-gray-500 hover:text-gray-700">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  });
  
  renderPagination();
}
  

function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  if (totalPages <= 1) {
    pagination.style.display = "none";
    return;
  } else {
    pagination.style.display = "flex";
  }

  // Botão "Anterior"
  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = `<i class="fas fa-chevron-left mr-1"></i> Anterior`;
  prevBtn.disabled = currentPage === 1;

  prevBtn.className = `px-3 py-2 rounded ${
    currentPage === 1
      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
      : "bg-gray-700 text-white hover:bg-gray-600"
  }`;

  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderProjects();
    }
  };

  pagination.appendChild(prevBtn);

  // Botões numerados
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");

    btn.textContent = i;
    btn.className = `px-3 py-2 rounded ${
      i === currentPage
        ? "bg-blue-600 text-white"
        : "bg-gray-700 text-gray-200 hover:bg-gray-600"
    }`;

    btn.onclick = () => {
      currentPage = i;
      renderProjects();
    };

    pagination.appendChild(btn);
  }

  // Botão "Próximo"
  const nextBtn = document.createElement("button");

  nextBtn.innerHTML = `Próximo <i class="fas fa-chevron-right ml-1"></i>`;
  nextBtn.disabled = currentPage === totalPages;

  nextBtn.className = `px-3 py-2 rounded ${
    currentPage === totalPages
      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
      : "bg-gray-700 text-white hover:bg-gray-600"
  }`;

  nextBtn.onclick = () => {
      if (currentPage < totalPages) {
          currentPage++;
          renderProjects();
      }
  };

  pagination.appendChild(nextBtn);
}

renderProjects();