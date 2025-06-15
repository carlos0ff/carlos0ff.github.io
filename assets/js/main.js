/**
 * 
 * @param {*} project 
 * @returns 
 */
function getProjectLink(project) {
  if (project.link.includes('?')) 
    return project.link;

  return `/projetos/${project.link.replace(/^\//, '')}?id=${project.id}`;
}

/**
 * Função para registrar visualização quando o projeto é acessado
 * @param {*} projectId 
 * @returns 
 */
function registerProjectView(projectId) {
  const viewsKey = `project_${projectId}_views`;
  let views = localStorage.getItem(viewsKey);
  
  if (!views) {
    views = 0;
  }
  
  const newCount = parseInt(views) + 1;
  localStorage.setItem(viewsKey, newCount);
  
  return newCount.toLocaleString();
}

/**
 * Função para obter contagem de visualizações sem incrementar
 * @param {*} projectId 
 * @returns 
 */
function getViewCount(projectId) {
  const viewsKey = `project_${projectId}_views`;
  let views = localStorage.getItem(viewsKey);
  
  if (!views) {
    views = 0;
    localStorage.setItem(viewsKey, views);
  }
  
  return parseInt(views).toLocaleString();
}

/**
 * RELATED PROJECTS FUNCTIONALITY
 */
document.addEventListener('DOMContentLoaded', function() {
  const currentProjectId = getCurrentProjectId();
  renderRelatedProjects(currentProjectId, 3);
});

/**
 * 
 * @returns 
 */
function getCurrentProjectId() {
  const path = window.location.pathname;

  if (path.includes('driveflex')) return 1;
  if (path.includes('dashboard')) return 2;
  if (path.includes('ecommerce')) return 3;
  if (path.includes('gestao-escolar')) return 4;
  if (path.includes('app-receitas')) return 5;
  if (path.includes('painel-admin')) return 6;

  return 1; 
}

/**
 * 
 * @param {*} currentProjectId 
 * @param {*} count 
 * @returns 
 */
function renderRelatedProjects(currentProjectId = null, count = 3) {
  const container = document.getElementById("related-list");
  
  if (!container) {
    console.error("Elemento 'related-list' não encontrado");
    return;
  }

  container.innerHTML = '';

  const validProjects = projects.filter(p => 
    p.id !== currentProjectId && 
    p.link && 
    p.link !== "#" &&
    p.image
  );

  if (validProjects.length === 0) {
    container.innerHTML = '<p class="text-gray-500 text-sm">Nenhum projeto relacionado disponível.</p>';
    return;
  }

  const shuffled = [...validProjects].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.min(count, validProjects.length));

  selected.forEach(project => {
    const item = document.createElement("a");

    item.href = `/projetos/${project.link.replace(/^\//, '')}?id=${project.id}`;
    item.className = "flex items-start gap-3 p-3 hover:bg-gray-700/50 rounded-lg transition-colors group";
    
    item.innerHTML = `
      <div class="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
        <img src="${project.image}" alt="${project.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
      </div>
      <div class="flex-1 min-w-0">
        <h4 class="text-sm font-medium text-white group-hover:text-primary-500 truncate">${project.title}</h4>
        <div class="flex flex-wrap gap-1 mt-1">
          ${project.tags.slice(0, 2).map(tag => `
            <span class="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">${tag}</span>
          `).join('')}
        </div>
      </div>
    `;
    
    container.appendChild(item);
  });
}

/**
 * PROJECT DATA
 */
const projects = [
  {
    id: 1,
    title: "DriveFlex Básico - Aluguel de Carros",
    category: "backend",
    description: "Sistema de aluguel de veículos desenvolvido em PHP puro, focado no aprendizado dos conceitos básicos de programação web, incluindo manipulação de formulários, gerenciamento de sessões e interação com banco de dados.",
    tags: ["PHP", "HTML5", "CSS3", "MySQL"],
    image: "../../assets/image/thumb/thumb-driveflex.png",
    link: "driveflex/",
    github: "https://github.com/carlos0ff/driveflex"
  },
  {
    id: 2,
    title: "iPhone Simulator",
    category: "backend",
    description: "Simulador completo das funcionalidades de um iPhone, desenvolvido como projeto prático no Bootcamp Bradesco - Java Cloud Native, com foco em lógica de programação, orientação a objetos e boas práticas de desenvolvimento em Java.",
    tags: ["Java","Orientação a objetos"],
    image: "../../assets/image/thumb/thumb-iphone.png",
    link: "iPhoneSimulator/",
    github: "https://github.com/carlos0ff/driveflex"
  },
  {
    id: 3,
    title: "Brasileirão API",
    category: "backend",
    description: "Aplicação backend desenvolvida em Java, capaz de consumir e processar dados da API do Brasileirão, oferecendo informações atualizadas sobre times, partidas, classificações e estatísticas. Projeto prático realizado no Bootcamp Bradesco - Java Cloud Native, com foco em integração de APIs, tratamento de dados e boas práticas em desenvolvimento backend",
    tags: ["Java","Spring Boot", "APIs", "Restful", "Orientação a objetos"],
    image: "../../assets/image/thumb/thumb-brasileiraoAPI.png",
    link: "brasileirao-api/",
    github: "https://github.com/carlos0ff/brasileirao-api-java"
  },
  {
    id: 4,
    title: "Folha de pagamento",
    category: "backend",
    description: "Aplicação baseada no livro \"Java: Como Programar\" dos Deitel, voltada para a implementação de um sistema de folha de pagamento. O projeto explora conceitos fundamentais de Java como encapsulamento, herança, polimorfismo e tratamento de exceções, além da aplicação de boas práticas de programação orientada a objetos.",
    tags: ["Java", "Spring Boot", "Orientação a objetos"],
    image: "../../assets/image/payroll.png",
    link: "payroll/",
    github: "https://github.com/carlos0ff/"
  },
  {
    id: 5,
    title: "Banco de Dados - SQL e Modelagem",
    category: "banco de dados",
    description: "Estudo dos fundamentos de bancos de dados relacionais, incluindo modelagem de dados com diagramas entidade-relacionamento, normalização para integridade e eficiência, e criação e otimização de consultas SQL para manipulação e gerenciamento de dados.",
    tags: ["SGBD", "SQL", "DML", "DDL", "MySQL WorkBanch"],
    image: "https://www.opservices.com.br/wp-content/uploads/2016/10/Quais-as-principais-diferencas-entre-banco-de-dados.png",
    link: "database",
    github: "https://github.com/carlos0ff/ecommerce"
  },
  {
    id: 6,
    title: "Estrutura de Dados I & II",
    category: "Estrutura de Dados",
    description: "Disciplinas ministradas pelo professor Edkallen, que abordam desde estruturas básicas como vetores, listas encadeadas, pilhas e filas, até estruturas avançadas como árvores, tabelas hash e grafos.",
    tags: ["C/C++", "Estruturas de Dados", "Algoritmos"],
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*yOYRUM0jeimN32tcX7nLng.jpeg",
    link: "ecommerce",
    github: "https://github.com/carlos0ff/ecommerce"
  }
];

/**
 * CONFIGURATION
 */
const config = {
  projectsPerPage: 6,
  relatedProjectsCount: 3
};

/**
 * STATE MANAGEMENT
 */
let state = {
  currentPage: 1,
  currentFilter: "all",
  filteredProjects: []
};

/**
 * DOM ELEMENTS
 */
const elements = {
  projectGrid: document.getElementById('project-grid'),
  paginationContainer: document.getElementById('pagination'),
  paginationNav: document.getElementById('pagination-nav'),
  relatedList: document.getElementById('related-list'),
  filterButtons: document.querySelectorAll('.filter-btn')
};

/**
 * UTILITY FUNCTIONS
 */
const utils = {
  getCategoryIcon: (category) => {
    const icons = {
      'backend': 'fas fa-server',
      'frontend': 'fas fa-desktop',
      'fullstack': 'fas fa-layer-group',
      'mobile': 'fas fa-mobile-alt'
    };

    return icons[category] || 'fas fa-code';
  },

  scrollToTop: () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  },

  // Função para lidar com o clique no link do projeto
  handleProjectView: (projectId, event) => {
    registerProjectView(projectId);
  }
};

/**
 * RENDER FUNCTIONS
 */
const render = {
  projectCard: (project) => {
    const categoryClasses = {
      backend: 'bg-blue-600/80 text-blue-100',
      frontend: 'bg-pink-600/80 text-pink-100',
      fullstack: 'bg-purple-600/80 text-purple-100',
      mobile: 'bg-green-600/80 text-green-100'
    };

    return `
    <div class="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col h-[500px]">
      
      <div class="relative h-48 overflow-hidden">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
          <span class="text-xs px-2 py-1 rounded ${categoryClasses[project.category] || 'bg-gray-700/80 text-gray-300'}">
            ${project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
      </div>

      <div class="p-6 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-3">
          <h3 class="text-xl font-semibold text-white truncate">${project.title}</h3>
        </div>

        <p class="text-gray-400 text-sm mb-4 line-clamp-3">${project.description}</p>

        <div class="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
          ${project.tags.map(tag => `
            <span class="bg-gray-700/50 px-2 py-1 rounded">${tag}</span>
          `).join('')}
        </div>

        <div class="flex justify-between items-center pt-3 border-t border-gray-700/50 mt-auto">
          <a href="${getProjectLink(project)}"
            onclick="utils.handleProjectView(${project.id}, event)"
            class="text-sm text-blue-400 hover:text-blue-300 flex items-center">
            <i class="fas fa-external-link-alt mr-2"></i> Ver Projeto
          </a>
          <div class="flex items-center gap-3">
            <a href="${project.github}"
              target="_blank"
              class="text-gray-400 hover:text-white"
              onclick="event.stopPropagation()">
              <i class="fab fa-github"></i>
            </a>
            <span class="text-sm text-gray-400 flex items-center" title="Visualizações">
              <i class="fas fa-eye mr-1"></i> ${getViewCount(project.id)}
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
  },

  projectsGrid: () => {
    const startIdx = (state.currentPage - 1) * config.projectsPerPage;
    const paginatedProjects = state.filteredProjects.slice(
      startIdx, 
      startIdx + config.projectsPerPage
    );

    elements.projectGrid.innerHTML = paginatedProjects
      .map(project => render.projectCard(project))
      .join('');
  },

  pagination: () => {
    const totalPages = Math.ceil(state.filteredProjects.length / config.projectsPerPage);
    
    elements.paginationContainer.classList.toggle(
      'hidden', 
      state.filteredProjects.length <= config.projectsPerPage
    );

    if (totalPages <= 1) {
      elements.paginationNav.innerHTML = '';
      return;
    }

    let paginationHTML = `
      <button onclick="controller.changePage(${state.currentPage - 1})" 
        class="px-4 py-2 border border-gray-700 rounded-lg 
        ${state.currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-800'} 
        transition-colors">
        <i class="fas fa-chevron-left"></i>
      </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `
        <button onclick="controller.changePage(${i})" 
          class="px-4 py-2 
          ${i === state.currentPage ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'} 
          rounded-lg transition-colors">
          ${i}
        </button>
      `;
    }

    paginationHTML += `
      <button onclick="controller.changePage(${state.currentPage + 1})" 
        class="px-4 py-2 border border-gray-700 rounded-lg 
        ${state.currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-800'} 
        transition-colors">
        <i class="fas fa-chevron-right"></i>
      </button>
    `;

    elements.paginationNav.innerHTML = paginationHTML;
  },

  relatedProjects: () => {
    const currentProjectId = getCurrentProjectId();
    const availableProjects = projects.filter(p => 
      p.id !== currentProjectId && p.link && p.link !== "#" && p.image
    );

    if (availableProjects.length === 0) {
      elements.relatedList.innerHTML = '<p class="text-gray-500 text-sm">Nenhum projeto relacionado disponível.</p>';
      return;
    }

    const relatedProjects = [...availableProjects]
      .sort(() => 0.5 - Math.random())
      .slice(0, config.relatedProjectsCount);

    elements.relatedList.innerHTML = relatedProjects.map(project => `
      <a href="${getProjectLink(project)}" class="flex items-start gap-3 p-3 hover:bg-gray-700/50 r transition-colors group">
        <div class="flex-shrink-0 w-12 h-12 bg-gray-700 overflow-hidden border border-gray-600">
          <img src="${project.image}" alt="${project.title}" 
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-medium text-white group-hover:text-blue-500 truncate">${project.title}</h4>
          <div class="flex flex-wrap gap-1 mt-1">
            ${project.tags.slice(0, 2).map(tag => `
              <span class="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">${tag}</span>
            `).join('')}
          </div>
        </div>
      </a>
    `).join('');
  },

  updateFilterButtons: () => {

    elements.filterButtons.forEach(btn => {
      const btnCategory = btn.getAttribute('onclick')?.replace("controller.filterProjects('", "").replace("')", "");
      
      if (btnCategory === state.currentFilter) {
        btn.classList.remove('bg-gray-700');
        btn.classList.add('bg-blue-600', 'text-white');
      } else if (btnCategory && btnCategory !== 'all') {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-700');
      }
    });
  }
};

/**
 * CONTROLLER FUNCTIONS
 */
const controller = {
  init: () => {
    controller.filterProjects('all');
    render.relatedProjects();
  },

  filterProjects: (category) => {
    state.currentFilter = category;
    state.currentPage = 1;
    state.filteredProjects = category === 'all' 
      ? [...projects] 
      : projects.filter(p => p.category === category);
    
    render.updateFilterButtons();
    controller.updateView();
  },

  changePage: (page) => {
    const totalPages = Math.ceil(state.filteredProjects.length / config.projectsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    state.currentPage = page;
    controller.updateView();
    utils.scrollToTop();
  },

  updateView: () => {
    render.projectsGrid();
    render.pagination();
  }
};

/**
 * INITIALIZATION
 */
document.addEventListener('DOMContentLoaded', controller.init);
