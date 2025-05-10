// 
const container = document.getElementById("project-list");
const pagination = document.getElementById("pagination");

const projectsPerPage = 3;
let currentPage = 1;

const projects = [
  {
    title: "API do Brasileirão",
    badge: "Backend",
    description: "API RESTful de alta performance para dados do Campeonato Brasileiro, construída com arquitetura modular e padrões industry-grade. Oferece desde informações básicas até análises estatísticas avançadas para aplicações esportivas profissionais.",
    tags: [
      "Java", 
      "Spring Boot", 
      "Git"
    ],
    image: "../../assets/image/brasileirao-logo-ouro.png",
    detailsLink: "brasileirao-API",
    githubLink: "https://github.com/carlos0ff/Brasileirao-API"
  },
 {
  title: "Pokedex API",
  badge: "Frontend",
  description: "Aplicação web interativa que consome a PokeAPI para exibir informações completas sobre Pokémon. Interface moderna, responsiva e com animações suaves em CSS.",
  tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  features: [
    "Consulta dinâmica de mais de 150 Pokémon",
    "Layout responsivo adaptado a dispositivos móveis e desktop",
    "Sistema de busca eficiente por nome ou número",
    "Visualização completa com tipos, habilidades e estatísticas base"
  ],
  image: "../../assets/image/pokedex-project.jpg",
  detailsLink: "/projetos/pokedex",
  githubLink: "https://github.com/seu-usuario/pokedex"
}
,
  {
    title: "DriveFlex Básico - Aluguel de Carros",
    badge: "Backend",
    description: "Sistema simples de aluguel de veículos desenvolvido com PHP puro para aprendizagem dos conceitos fundamentais.",
    tags: [
      "PHP",
      "MySQL", 
      "Bootstrap",
      "jQuery"
    ],
    features: [
      "Cadastro de veículos e clientes",
      "Sistema básico de reservas",
      "Painel administrativo simples",
      "Relatórios em PDF básicos"
    ],
    image: "../../assets/image/driveflex.png",
    detailsLink: "/projetos/driveflex",
    githubLink: "#",
    technicalSpecs: {
      frontend: "HTML/CSS + Bootstrap",
      backend: "PHP procedural",
      database: "MySQL básico",
      security: "Proteção SQL básica",
      hosting: "Local/XAMPP"
    }
  }
];

function displayRelatedProjects() {
  const projectsList = document.getElementById('projects-list');
  const limitedProjects = projects.slice(0, 3);

  limitedProjects.forEach(project => {
    const projectElement = document.createElement('a');
    projectElement.href = project.detailsLink;
    projectElement.classList.add(
      'relative', 'flex', 'items-start', 'group', 'hover:bg-gray-100/50', 'dark:hover:bg-dark-700/50',
      'p-2', 'rounded-lg', 'transition-colors', 'duration-200'
    );

    // Container da thumbnail
    const imageContainer = document.createElement('div');
    imageContainer.classList.add(
      'relative', 'w-16', 'h-16', 'flex-shrink-0', 'rounded-md', 'overflow-hidden', 
      'bg-gray-200', 'dark:bg-dark-600'
    );

    const imageElement = document.createElement('img');
    imageElement.src = project.thumbnail || project.image || '/assets/image/default-thumb.jpg';
    imageElement.alt = project.title;
    imageElement.classList.add('w-full', 'h-full', 'object-cover');
    imageContainer.appendChild(imageElement);

    // Imagem grande no hover
    const hoverImage = document.createElement('img');
    hoverImage.src = project.image;
    hoverImage.alt = project.title;
    hoverImage.classList.add(
      'hidden', 'group-hover:block', 'absolute', 'top-0', 'left-20', 'z-50',
      'w-56', 'h-56', 'rounded-lg', 'object-cover', 'shadow-lg', 'transition', 'duration-200'
    );

    imageContainer.appendChild(hoverImage);

    // Container de texto
    const textContainer = document.createElement('div');
    textContainer.classList.add('ml-3', 'flex-1');

    const projectTitle = document.createElement('h4');
    projectTitle.classList.add('text-sm', 'font-medium', 'text-gray-800', 'dark:text-gray-100', 'group-hover:text-primary-600', 'dark:group-hover:text-primary-400');
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement('p');
    projectDescription.classList.add('text-xs', 'text-gray-500', 'dark:text-gray-400', 'line-clamp-2');
    projectDescription.textContent = project.description;

    textContainer.appendChild(projectTitle);
    textContainer.appendChild(projectDescription);

    projectElement.appendChild(imageContainer);
    projectElement.appendChild(textContainer);

    projectsList.appendChild(projectElement);
  });
}


function getBadgeColor(badge) {
  if (!badge) return 'bg-gray-800/50 text-gray-300';

  switch (badge.toLowerCase()) {
    case "backend":
      return "bg-blue-600/50 text-blue-100";
    case "frontend":
      return "bg-pink-600/50 text-pink-100";
    case "fullstack":
      return "bg-purple-600/50 text-purple-100";
    case "eletrônica":
    case "eletronica":
      return "bg-green-600/50 text-green-100"; // Nova cor para projetos de eletrônica
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
      `<span class="inline-block px-2 py-1 bg-gray-700/80 text-gray-100 text-xs rounded-md mr-1 mb-1">${tag}</span>`
    ).join("");

    container.innerHTML += `
      <div class="flex flex-col bg-gray-800/70 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
        <!-- Cabeçalho com imagem fixa -->
        <div class="relative h-48 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center overflow-hidden">
          <img src="${project.image}" alt="${project.title}" 
               class="project-image w-full h-full object-cover transition-transform duration-500 hover:scale-105">
          <span class="absolute top-3 right-3 text-xs ${getBadgeColor(project.badge)} px-2 py-1 rounded-full shadow-md">
            ${project.badge || "Null"}
          </span>
        </div>

        <!-- Corpo do card com altura fixa -->
        <div class="flex flex-col p-5 flex-grow">
          <h3 class="text-xl font-bold text-white line-clamp-2 min-h-[2em]">${project.title}</h3>
          
          <p class="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">${project.description}</p>

          <!-- Tags com scroll se necessário -->
          <div class="flex flex-wrap mb-5 max-h-16 overflow-y-auto">
            ${tagHTML}
          </div>

          <!-- Rodapé fixo -->
          <div class="flex justify-between items-center pt-3 border-t border-gray-700/50">
            <a href="${project.detailsLink}" class="text-primary-400 hover:text-primary-300 font-medium text-sm inline-flex items-center transition-colors">
              Ver detalhes
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="${project.githubLink}" target="_blank" class="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
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
