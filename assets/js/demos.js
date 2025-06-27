/**
 * PROJECT DATA
 */
const projects = [
    {
        id: 1,
        title: "Localiza - Aluguel de Carros",
        category: "backend",
        description: "Sistema de aluguel de veículos desenvolvido em PHP puro, focado no aprendizado dos conceitos básicos de programação web, incluindo manipulação de formulários, gerenciamento de sessões e interação com banco de dados.",
        tags: ["PHP", "MySQL","HTML5", "CSS3"],
        image: "../../assets/image/admin.png",
        iframeUrl: null,
        link: "localiza/",
        github: "https://github.com/carlos0ff/driveflex",
        customClass: "driveflex-iframe"
    },
    {
        id: 2,
        title: "Computador de 8 bit",
        category: "hardware",
        description: "Simulador de computador de 8-bit construído com lógica digital, demonstrando os princípios fundamentais de arquitetura de computadores, incluindo ALU, registradores e unidade de controle.",
        tags: ["Arquitetura", "C/C++", "Assembly", "Eletrônica Digital"],
        image: "https://external-preview.redd.it/build-an-8-bit-computer-from-scratch-v0-MuXs5RX-cmwj4OMH2S8GrfuHXDIogl1bJEeNA_zJbsU.jpg?width=640&crop=smart&auto=webp&s=adb210d4e7753eecab21b269f94759956ab15ec9",
        iframeUrl: null,
        link: "8bit-computer/",
        github: "https://github.com/carlos0ff/8bit-computer",
        customClass: "bitcomputer-iframe"
    },
    {
        id: 3,
        title: "Pokédex Digital",
        category: "frontend",
        description: "Aplicação web interativa que consome a PokeAPI para exibir informações detalhadas sobre Pokémon, com recursos de busca, filtragem e visualização de estatísticas.",
        tags: ["JavaScript", "API REST", "CSS3", "HTML5"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        iframeUrl: null,
        link: "pokedex/",
        github: "https://github.com/carlos0ff/pokedex"
    },
    {
        id: 4,
        title: "Fada Group",
        category: "backend",
        description: "Aplicação web interativa que consome a PokeAPI para exibir informações detalhadas sobre Pokémon, com recursos de busca, filtragem e visualização de estatísticas.",
        tags: ["PHP", "Laravel", "API REST", "MySQL", "JavaScript"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        iframeUrl: null,
        link: "fadagroup/",
        github: "https://github.com/carlos0ff/pokedex"
    },
    {
        id: 5,
        title: "Plataforma EAD",
        category: "backend",
        description: "Aplicação web interativa que consome a PokeAPI para exibir informações detalhadas sobre Pokémon, com recursos de busca, filtragem e visualização de estatísticas.",
        tags: ["PHP", "Laravel", "API REST", "MySQL", "JavaScript"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        iframeUrl: null,
        link: "ead/",
        github: "https://github.com/carlos0ff/pokedex"
    }
];

// Tag Colors
const tagColors = {
    "PHP": "bg-purple-900 text-purple-200",
    "HTML5": "bg-orange-900 text-orange-200",
    "CSS3": "bg-blue-900 text-blue-200",
    "MySQL": "bg-cyan-900 text-cyan-200",
    "Java": "bg-red-900 text-red-200",
    "Eletrônica Digital": "bg-emerald-900 text-emerald-200",
    "Arquitetura": "bg-indigo-900 text-indigo-200",
    "Assembly": "bg-fuchsia-900 text-fuchsia-200",
    "JavaScript": "bg-yellow-900 text-yellow-200",
    "API REST": "bg-green-900 text-green-200",
    "Spring Boot": "bg-green-900 text-green-200",
    "Orientação a objetos": "bg-amber-900 text-amber-200",
    "SGBD": "bg-sky-900 text-sky-200",
    "SQL": "bg-emerald-900 text-emerald-200",
    "DML": "bg-lime-900 text-lime-200",
    "DDL": "bg-teal-900 text-teal-200",
    "MySQL WorkBanch": "bg-violet-900 text-violet-200",
    "C/C++": "bg-rose-900 text-rose-200",
    "Estruturas de Dados": "bg-pink-900 text-pink-200",
    "Algoritmos": "bg-cyan-900 text-cyan-200"
};

// Technology Icons
const techIcons = {
    "PHP": "fab fa-php",
    "Java": "fab fa-java",
    "Logisim": "fas fa-project-diagram",
    "JavaScript": "fab fa-js-square",
    "Spring Boot": "fas fa-leaf",
    "HTML5": "fab fa-html5",
    "CSS3": "fab fa-css3-alt",
    "MySQL": "fas fa-database",
    "C/C++": "fas fa-file-code",
    "default": "fas fa-code"
};

/**
 * Current filter state
 */
let currentFilter = "all";
let searchTerm = "";

/**
 * Render Projects
 * @returns 
 */
function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    const filteredProjects = projects.filter(project => {
    const categoryMatch = currentFilter === "all" || project.category.toLowerCase() === currentFilter.toLowerCase();

    // Apply search filter
    const searchMatch = searchTerm === "" || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        return categoryMatch && searchMatch;
    });

    if (filteredProjects.length === 0) {
    container.innerHTML = `
        <div class="col-span-full text-center py-12">
            <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>
            <h3 class="text-xl font-medium text-gray-300">Nenhum projeto encontrado</h3>
            <p class="text-gray-500 mt-2">Tente ajustar seus filtros ou termos de busca</p>
        </div>
    `;
    return;
}

/**
 * 
 */
filteredProjects.forEach(project => {
    const mainIcon1 = techIcons[project.tags[0]] || techIcons.default;
    const mainIcon2 = project.tags[1] ? (techIcons[project.tags[1]] || techIcons.default) : "fas fa-server";
    const iframeClass = project.customClass ? `project-iframe ${project.customClass}` : 'project-iframe';

    const projectCard = document.createElement('div');
    projectCard.className = 'project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300';

    projectCard.innerHTML = `
        <div class="h-[420px] w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col overflow-hidden">

            <div class="relative h-48 w-full bg-gray-900 overflow-hidden">
            ${
                project.iframeUrl
                ? `
                <div class="iframe-container w-full h-full">
                <iframe src="${project.iframeUrl}"
                        class="${iframeClass} w-full h-full"
                        title="Prévia do projeto ${project.title}"
                        loading="lazy"
                        scrolling="no"
                        sandbox="allow-same-origin allow-scripts allow-forms"></iframe>
                <div class="iframe-overlay absolute inset-0"></div>
                </div>`
                : project.image
                ? `<img src="${project.image}" alt="Imagem do projeto ${project.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">`
                : `<i class="${mainIcon1} text-8xl text-blue-400 opacity-20"></i>
                    <i class="${mainIcon2} text-5xl text-white opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>`
            }
            </div>

            <div class="flex flex-col justify-between flex-grow p-5 space-y-4">
            <div>
                <h3 class="text-lg font-semibold text-white mb-2 truncate" title="${project.title}">
                    ${project.title}
                </h3>
                <p class="text-sm text-gray-400 line-clamp-3 mb-3">
                    ${project.description}
                </p>

                <div class="flex flex-wrap gap-2">
                ${project.tags.slice(0, 4).map(tag => `
                    <span class="${tagColors[tag] || 'bg-gray-700 text-gray-200'} text-xs font-medium px-2.5 py-0.5  whitespace-nowrap">
                    ${tag}
                    </span>`).join('')}
                </div>
            </div>

            <div class="flex justify-between items-center pt-2 border-t border-gray-700/50">
                <a href="${project.link}" 
                    ${project.link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}
                    class="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group transition-colors duration-200">
                    <i class="fas fa-external-link-alt mr-2 text-xs group-hover:translate-x-1 transition-transform"></i> Ver Demo
                </a>

                <a href="${project.github}" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-gray-400 hover:text-white text-sm flex items-center transition-colors duration-200"
                    title="Ver código no GitHub">
                    <i class="fab fa-github mr-1"></i> Código
                </a>
            </div>
            </div>
        </div>
        `;

        container.appendChild(projectCard);
    });
}

/**
 * Initialize filters and search
 */
function initFilters() {
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-600');
        btn.classList.add('bg-gray-700');
    });
        
        button.classList.add('active', 'bg-blue-600');
        button.classList.remove('bg-gray-700');
        
        currentFilter = button.dataset.filter;
        
        renderProjects();
    });
});

/**
 * Search input
 */
const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        searchTerm = searchInput.value.trim();
        renderProjects();
    });
}

/**
 * Initialize when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initFilters();
});