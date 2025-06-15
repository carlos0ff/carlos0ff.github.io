/**
 * Certificados.js - Sistema completo de exibição de certificados profissionais
 * com filtros, busca e visualização de PDF
 */

document.addEventListener('DOMContentLoaded', function() {
    // Banco de dados de certificados
    const certificates = [
        {
            id: 1,
            title: "Java Cloud Native",
            institution: "Bradesco - 2025",
            description: "Formação voltada para o desenvolvimento de aplicações Java modernas com foco em ambientes cloud-native. Abrange microserviços, Docker, Kubernetes, CI/CD e melhores práticas para aplicações escaláveis em nuvem.",
            icon: "java",
            iconColor: "red",
            category: "Back-end",
            hours: 90,
            pdfLink: "https://drive.google.com/file/d/1_WQC8fO2oU2RZ6mjcOMLFzmtt16QHNt3/preview",
            technologies: [
                { name: "Java", color: "red" },
                { name: "Spring Boot", color: "green" },
                { name: "JPA", color: "indigo" }
            ]
        },
        {
            id: 2,
            title: "Backend com Java",
            institution: "Santander - 2025",
            description: "Curso com foco em construção de APIs e sistemas backend utilizando Java. Envolve arquitetura em camadas, acesso a bancos de dados relacionais e não relacionais, testes e padrões de projeto aplicados ao contexto corporativo.",
            icon: "java",
            iconColor: "purple",
            category: "Back-end",
            hours: 80,
            pdfLink: "https://drive.google.com/file/d/1Kt98BygshJcM8FNtCw3UkTpTP8B2zh-0/preview",
            technologies: [
                { name: "Java", color: "red" },
                { name: "Spring Boot", color: "green" },
                { name: "JPA", color: "indigo" }
            ]
        },
        {
            id: 3,
            title: "Java and AI in Europe",
            institution: "TONNIE - 2025",
            description: "Programa internacional que combina desenvolvimento em Java com fundamentos e aplicações práticas de inteligência artificial. Inclui machine learning, uso de bibliotecas e frameworks de IA, além de práticas voltadas à inovação tecnológica no mercado europeu.",
            icon: "java",
            iconColor: "blue",
            category: "Back-end",
            hours: 60,
            pdfLink: "https://drive.google.com/file/d/1nWsMUEQnOjRo6a5IeAlaI-_ll8W8NLJs/preview",
            technologies: [
                { name: "Java", color: "red" },
                { name: "Spring Boot", color: "green" },
                { name: "JPA", color: "indigo" }
            ]
        },
        {
            id: 4,
            title: "Formação em Cibersegurança",
            institution: "Escola Superior Redes - 2024",
            description: "Capacitação completa em fundamentos da segurança da informação, abordando redes, criptografia, análise de vulnerabilidades, testes de intrusão (pentest) e melhores práticas em segurança ofensiva e defensiva.",
            icon: "user-shield",
            iconColor: "purple",
            category: "Cybersecurity",
            hours: 70,
            pdfLink: "https://drive.google.com/file/d/1TNujpu_EAAp1xigj9kvXZ4neZOgrb9ur/preview",
            technologies: [
                { name: "Segurança", color: "purple" }
            ]
        },
        {
            id: 5,
            title: "CTF – Capture The Flag",
            institution: "Escola Superior Redes - 2024",
            description: "Treinamento prático em desafios de CTF voltados para cibersegurança. Desenvolvimento de habilidades em exploração de vulnerabilidades, engenharia reversa, criptografia e raciocínio lógico aplicado à segurança ofensiva.",
            icon: "flag", 
            iconColor: "blue",
            category: "Cybersecurity",
            hours: 120,
            pdfLink: "https://drive.google.com/file/d/1ZdtVjqglnRRrOHAtQgSx0qoCKfLbPrel/preview",
            technologies: [
                { name: "CTF", color: "blue" },
                { name: "Eng. Reversa", color: "yellow" }
            ]
        },
        {
            id: 6,
            title: "Introdução ao Linux",
            institution: "Santander - 2025",
            description: "Curso completo de administração Linux cobrando segurança, hardening, scripting em Bash, gerenciamento de serviços e configuração de redes em ambientes corporativos.",
            icon: "linux",
            iconColor: "red",
            category: "Cybersecurity",
            hours: 120,
            pdfLink: "https://drive.google.com/file/d/1kKBSB8ePSbtyEdGYR9qT8kgDZQU6G0fL/preview",
            technologies: [
                { name: "Shell Script", color: "gray" },
                { name: "Servidores", color: "blue" }
            ]
        }
    ];

    /**
     * Mapeamento completo de ícones para Font Awesome
     */
    const iconClasses = {
        // Linguagens de programação
        'java': 'fab fa-java',
        'php': 'fab fa-php',
        'c': 'fas fa-file-code', 
        'csharp': 'fab fa-microsoft',
        'python': 'fab fa-python',
        'javascript': 'fab fa-js-square',
        
        // Frameworks e tecnologias
        'react': 'fab fa-react',
        'docker': 'fab fa-docker',
        'leaf': 'fas fa-leaf', // Spring
        'laravel': 'fab fa-laravel',
        'node': 'fab fa-node-js',
        'angular': 'fab fa-angular',
        'vue': 'fab fa-vuejs',
        
        // Sistemas operacionais e infraestrutura
        'linux': 'fab fa-linux',
        'ubuntu': 'fab fa-ubuntu',
        'windows': 'fab fa-windows',
        'apple': 'fab fa-apple',
        'aws': 'fab fa-aws',
        'digital-ocean': 'fab fa-digital-ocean',
        
        // Segurança cibernética
        'shield-alt': 'fas fa-shield-alt',
        'lock': 'fas fa-lock',
        'lock-open': 'fas fa-lock-open',
        'fingerprint': 'fas fa-fingerprint',
        'user-shield': 'fas fa-user-shield',
        'eye': 'fas fa-eye',
        'eye-slash': 'fas fa-eye-slash',
        'bug': 'fas fa-bug',
        'search': 'fas fa-search', 
        'shield-virus': 'fas fa-shield-virus',
        'hacker': 'fas fa-user-secret', 
        
        // Redes e infraestrutura
        'server': 'fas fa-server',
        'database': 'fas fa-database',
        'network-wired': 'fas fa-network-wired',
        'ethernet': 'fas fa-ethernet',
        'wifi': 'fas fa-wifi',
        
        // Ferramentas de desenvolvimento
        'code': 'fas fa-code',
        'terminal': 'fas fa-terminal',
        'keyboard': 'fas fa-keyboard',
        'microchip': 'fas fa-microchip',
        'robot': 'fas fa-robot',
        
        // Ícones gerais
        'cloud': 'fas fa-cloud',
        'certificate': 'fas fa-certificate',
        'graduation-cap': 'fas fa-graduation-cap', 
        'book': 'fas fa-book', 
        'tools': 'fas fa-tools' 
    };

    /**
     * Elementos DOM
     */
    const DOM = {
        container: document.getElementById('certificates-container'),
        filterButtons: document.querySelectorAll('.filter-btn'),
        searchInput: document.getElementById('search-input'),
        resultsCounter: document.getElementById('results-counter'),
        resultsCount: document.getElementById('results-count'),
        noResults: document.getElementById('no-results'),
        pagination: document.getElementById('pagination'),
        prevPageBtn: document.getElementById('prev-page'),
        nextPageBtn: document.getElementById('next-page'),
        pageNumbers: document.getElementById('page-numbers'),
        pdfModal: document.getElementById('pdf-modal'),
        pdfIframe: document.getElementById('pdf-iframe')
    };

    /**
     * Estado da aplicação
     */
    const state = {
        currentFilter: 'all',
        currentSearch: '',
        currentPage: 1,
        itemsPerPage: 6,
        filteredCertificates: [...certificates],
        totalPages: Math.ceil(certificates.length / 6)
    };

    // Inicialização
    init();

    function init() {
        renderCertificates();
        setupEventListeners();
        updateYear();
        updateFilterButtons();
    }

    function renderCertificates() {
        DOM.container.innerHTML = '';
        
        filterCertificates();
        updateResultsCounter();
        
        if (state.filteredCertificates.length === 0) {
            showNoResults();
            return;
        }
        
        hideNoResults();
        renderCertificateCards();
        updatePagination();
    }
    
    /**
     * 
     */
    function filterCertificates() {

        state.filteredCertificates = certificates.filter(cert => {
            const matchesCategory = state.currentFilter === 'all' || cert.category === state.currentFilter;
            const matchesSearch = searchInCertificate(cert);
            return matchesCategory && matchesSearch;
        });
        
        state.totalPages = Math.ceil(state.filteredCertificates.length / state.itemsPerPage);
        state.currentPage = Math.min(state.currentPage, state.totalPages);
    }
    
    /**
     * 
     * @param {*} cert 
     * @returns 
     */
    function searchInCertificate(cert) {
        if (!state.currentSearch) return true;
        
        const searchTerm = state.currentSearch.toLowerCase();
        const inTitle = cert.title.toLowerCase().includes(searchTerm);
        const inInstitution = cert.institution.toLowerCase().includes(searchTerm);
        const inDescription = cert.description.toLowerCase().includes(searchTerm);

        const inTechnologies = cert.technologies.some(tech => 
            tech.name.toLowerCase().includes(searchTerm)
        );

        return inTitle || inInstitution || inDescription || inTechnologies;
    }
    
    /**
     * 
     */
    function renderCertificateCards() {
        const paginatedCertificates = paginateCertificates();
        
        paginatedCertificates.forEach(cert => {
            const card = createCertificateCard(cert);
            DOM.container.appendChild(card);
        });
    }
    
    /**
     * 
     * @param {*} cert 
     * @returns 
     */
    function createCertificateCard(cert) {
        const card = document.createElement('div');
        card.className = 'demo-card bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300';
        
        const mainIconClass = iconClasses[cert.icon.toLowerCase()] || iconClasses['certificate'];
        const secondaryIconClass = cert.secondaryIcon ? 
            (iconClasses[cert.secondaryIcon.toLowerCase()] || iconClasses['code']) : '';
        
        card.innerHTML = `
            <div class="h-48 bg-${cert.iconColor}-900/30 flex items-center justify-center relative">
                <i class="${mainIconClass} text-9xl text-${cert.iconColor}-400 opacity-20"></i>
                ${secondaryIconClass ? 
                  `<i class="${secondaryIconClass} text-6xl text-white opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>` 
                  : ''}
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h3 class="text-xl font-bold text-white">${cert.title}</h3>
                        <p class="text-gray-400 text-sm">${cert.institution}</p>
                    </div>
                    <div class="flex space-x-2">
                        ${renderTechnologyBadges(cert.technologies)}
                    </div>
                </div>
                <p class="text-gray-400 text-sm mb-4">
                    ${cert.description}
                </p>
                <div class="flex justify-between items-center">
                    ${renderCertificateButton(cert)}
                    ${renderDemoButton(cert)}
                    ${renderRepoButton(cert)}
                </div>
            </div>
        `;
        
        return card;
    }
    
    /**
     * 
     * @param {*} technologies 
     * @returns 
     */
    function renderTechnologyBadges(technologies) 
    {
        return technologies.map(tech => `
            <span class="tech-badge bg-${tech.color}-900 text-${tech.color}-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                ${tech.name}
            </span>
        `).join('');
    }
    
    /**
     * 
     * @param {*} cert 
     * @returns 
     */
    function renderCertificateButton(cert) 
    {
        return `
            <button onclick="openPdfModal('${cert.pdfLink}', '${cert.title}')" 
                    class="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center group">
                Ver Certificado
                <i class="fas fa-external-link-alt ml-1 text-xs group-hover:translate-x-1 transition-transform"></i>
            </button>
        `;
    }
    
    /**
     * 
     * @param {*} cert 
     * @returns 
     */
    function renderDemoButton(cert) 
    {
        return cert.demoLink ? `
            <a href="${cert.demoLink}" target="_blank" 
               class="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center group">
                Demonstração
                <i class="fas fa-external-link-alt ml-1 text-xs group-hover:translate-x-1 transition-transform"></i>
            </a>
        ` : '';
    }
    
    /**
     * 
     * @param {*} cert 
     * @returns 
     */
    function renderRepoButton(cert) {
        return cert.repoLink ? `
            <a href="${cert.repoLink}" target="_blank" 
               class="text-gray-400 hover:text-white text-sm flex items-center">
                <i class="fab fa-github mr-1"></i> Código
            </a>
        ` : '';
    }
    
    /**
     * 
     * @returns 
     */
    function paginateCertificates() {
        const start = (state.currentPage - 1) * state.itemsPerPage;
        const end = start + state.itemsPerPage;

        return state.filteredCertificates.slice(start, end);
    }

    /**
     * 
     */
    function updateResultsCounter() {
        const showCounter = !(state.filteredCertificates.length === certificates.length && 
                             state.currentFilter === 'all' && 
                             !state.currentSearch);
        
        if (showCounter) {
            DOM.resultsCounter.classList.remove('hidden');
            DOM.resultsCount.textContent = state.filteredCertificates.length;
        } else {
            DOM.resultsCounter.classList.add('hidden');
        }
    }
    
    /**
     * 
     */
    function showNoResults() {
        DOM.noResults.classList.remove('hidden');
        DOM.pagination.classList.add('hidden');
    }
    
    /**
     * 
     */
    function hideNoResults() {
        DOM.noResults.classList.add('hidden');
        if (state.totalPages > 1) {
            DOM.pagination.classList.remove('hidden');
        } else {
            DOM.pagination.classList.add('hidden');
        }
    }
    
    /**
     * 
     * @returns 
     */
    function updatePagination() {
        DOM.pageNumbers.innerHTML = '';
        
        if (state.totalPages <= 1) {
            DOM.pagination.classList.add('hidden');
            return;
        }
        
        DOM.prevPageBtn.disabled = state.currentPage === 1;
        DOM.nextPageBtn.disabled = state.currentPage === state.totalPages;
        
        renderPageNumbers();
    }
    
    /**
     * 
     */
    function renderPageNumbers() {
        const maxVisiblePages = 5;

        let startPage = Math.max(1, state.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(state.totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        // Primeira página e ellipsis
        if (startPage > 1) {
            createPageButton(1);

            if (startPage > 2) {
                createEllipsis();
            }
        }
        
        // Páginas visíveis
        for (let i = startPage; i <= endPage; i++) {
            createPageButton(i);
        }
        
        // Última página e ellipsis
        if (endPage < state.totalPages) {
            if (endPage < state.totalPages - 1) {
                createEllipsis();
            }

            createPageButton(state.totalPages);
        }
    }
    
    /**
     * 
     * @param {*} page 
     */
    function createPageButton(page) {
        const pageBtn = document.createElement('button');

        pageBtn.className = `px-4 py-2 border border-gray-600 ${
            page === state.currentPage ? 'text-blue-400 font-medium' : 'text-gray-300'
        } hover:bg-gray-600 transition-colors`;

        pageBtn.textContent = page;
        pageBtn.addEventListener('click', () => goToPage(page));

        DOM.pageNumbers.appendChild(pageBtn);
    }
    
    /**
     * 
     */
    function createEllipsis() {
        const ellipsis = document.createElement('span');

        ellipsis.className = 'px-2 py-2 text-gray-400';
        ellipsis.textContent = '...';

        DOM.pageNumbers.appendChild(ellipsis);
    }
    
    /**
     * 
     * @param {*} page 
     */
    function goToPage(page) {
        state.currentPage = page;
        renderCertificates();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    /**
     * 
     */
    function setupEventListeners() {
        setupFilterButtons();
        setupSearchInput();

        setupPaginationButtons();
        setupModalEvents();
    }
    
    /**
     * 
     */
    function setupFilterButtons() {
        DOM.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                state.currentFilter = btn.dataset.filter;
                state.currentPage = 1;

                updateFilterButtons();
                renderCertificates();
            });
        });
    }
    
    /**
     * 
     */
    function updateFilterButtons() {
        DOM.filterButtons.forEach(btn => {
            const isActive = btn.dataset.filter === state.currentFilter;

            btn.classList.toggle('bg-blue-600', isActive);
            btn.classList.toggle('text-white', isActive);
            btn.classList.toggle('bg-gray-700', !isActive);
        });
    }
    
    /**
     * 
     */
    function setupSearchInput() {
        DOM.searchInput.addEventListener('input', () => {
            state.currentSearch = DOM.searchInput.value.trim();
            state.currentPage = 1;

            renderCertificates();
        });
    }
    
    /**
     * 
     */
    function setupPaginationButtons() {
        DOM.prevPageBtn.addEventListener('click', () => {
            if (state.currentPage > 1) {
                state.currentPage--;

                renderCertificates();
            }
        });
        
        DOM.nextPageBtn.addEventListener('click', () => {
            if (state.currentPage < state.totalPages) {
                state.currentPage++;

                renderCertificates();
            }
        });
    }
    
    /**
     * 
     */
    function setupModalEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && DOM.pdfModal.style.display === 'block') {
                closePdfModal();
            }
        });
        
        DOM.pdfModal.addEventListener('click', (e) => {
            if (e.target === DOM.pdfModal) {
                closePdfModal();
            }
        });
    }
    
    /**
     * 
     */
    function updateYear() {
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }
});

/**
 * Funções globais para o modal de PDF
 * @param {*} url 
 * @param {*} title 
 */
function openPdfModal(url, title) {
    const modal = document.getElementById('pdf-modal');
    const iframe = document.getElementById('pdf-iframe');
    
    iframe.src = url;
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
    document.title = `${title} | Visualização`;
    
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

/**
 * 
 */
function closePdfModal() {
    const modal = document.getElementById('pdf-modal');
    const iframe = document.getElementById('pdf-iframe');
    
    modal.classList.remove('active');
    
    setTimeout(() => {
        modal.style.display = 'none';
        iframe.src = '';

        document.body.classList.remove('modal-open');
        document.title = "Certificados | José Carlos";
    }, 300);
}