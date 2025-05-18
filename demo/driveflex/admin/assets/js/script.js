document.addEventListener('DOMContentLoaded', function () {
    // Menu dropdown
    const userProfile = document.getElementById('userProfile');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (userProfile && dropdownMenu) {
        userProfile.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });

        window.addEventListener('click', function (e) {
            if (!userProfile.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

    // Modal
    const modal = document.getElementById('comparisonModal');
    const closeBtn = document.querySelector('.close-btn');
    const compareBtns = document.querySelectorAll('.compare-btn');

    if (modal && closeBtn && compareBtns.length > 0) {
        compareBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Aviso de demo
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: 'Aviso Importante',
            html: 'Esta é uma <strong>versão demonstrativa</strong>. O sistema completo possui backend em PHP que não está disponível no GitHub Pages.',
            icon: 'info',
            confirmButtonText: 'Entendi',
            confirmButtonColor: '#036b2e',
            backdrop: `
                rgba(0,0,0,0.7)
                url("assets/images/car-animation.gif")
                center top
                no-repeat
            `,
            allowOutsideClick: false
        });
    }

    // Paginação e exibição de cards
    const cardContainer = document.getElementById('cardContainer');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');

    // Exemplo de dados fictícios
    const cardsData = Array.from({ length: 23 }, (_, i) => ({
        titulo: `Veículo ${i + 1}`,
        descricao: `Descrição do veículo ${i + 1}`,
        imagem: `https://via.placeholder.com/300x150?text=Carro+${i + 1}`
    }));

    const cardsPorPagina = 5;
    let paginaAtual = 1;
    const totalPaginas = Math.ceil(cardsData.length / cardsPorPagina);

    function exibirCards() {
        cardContainer.innerHTML = '';

        const inicio = (paginaAtual - 1) * cardsPorPagina;
        const fim = inicio + cardsPorPagina;
        const cardsPagina = cardsData.slice(inicio, fim);

        cardsPagina.forEach(card => {
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
                <img src="${card.imagem}" alt="${card.titulo}" />
                <h3>${card.titulo}</h3>
                <p>${card.descricao}</p>
            `;
            cardContainer.appendChild(div);
        });

        pageInfo.textContent = `Página ${paginaAtual} de ${totalPaginas}`;
        prevBtn.disabled = paginaAtual === 1;
        nextBtn.disabled = paginaAtual === totalPaginas;
    }

    if (prevBtn && nextBtn && cardContainer) {
        prevBtn.addEventListener('click', () => {
            if (paginaAtual > 1) {
                paginaAtual--;
                exibirCards();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (paginaAtual < totalPaginas) {
                paginaAtual++;
                exibirCards();
            }
        });

        exibirCards();
    }
});
// Exemplo de veículos simulados – você pode gerar dinamicamente com PHP no backend
const vehicles = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: 'assets/images/vehicles/PEUA.png',
    title: 'Peugeot 208',
    model: 'GT Pack 1.6 Turbo',
    fuel: 'Flex',
    transmission: 'Automático 6v',
    passengers: 5,
    bags: 3,
    daily: 'R$ 420',
    weekly: 'R$ 2.520',
    tags: ['Teto Panorâmico', 'Tela 10"', 'Assistente de Direção', 'Park Assist']
}));

const cardsPerPage = 6;
let currentPage = 1;

function renderCards(page = 1) {
    const listContainer = document.getElementById('vehicle-list');
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const pageVehicles = vehicles.slice(start, end);

    listContainer.innerHTML = pageVehicles.map(vehicle => `
        <article class="vehicle-card">
            <div class="vehicle-badge">NOVO</div>
            <img src="${vehicle.image}" alt="${vehicle.title}" class="vehicle-image">
            <div class="vehicle-content">
                <div class="vehicle-header">
                    <div class="category-container">
                        <div class="category-label">Categoria</div>
                        <div class="category">Hatch <span>• Premium</span></div>
                    </div>
                    <div class="availability-container">
                        <div class="availability-label">Disponibilidade</div>
                        <div class="availability available">Últimas Unidades</div>
                    </div>
                </div>
                <h2 class="vehicle-brand">${vehicle.title}
                    <small class="vehicle-model">${vehicle.model}</small>
                </h2>
                <div class="vehicle-specs">
                    <div class="spec-item"><i class="fas fa-gas-pump spec-icon"></i><span class="spec-value">${vehicle.fuel}</span><span class="spec-label">Combustível</span></div>
                    <div class="spec-item"><i class="fas fa-car spec-icon"></i><span class="spec-value">${vehicle.transmission}</span><span class="spec-label">Câmbio</span></div>
                    <div class="spec-item"><i class="fas fa-users spec-icon"></i><span class="spec-value">${vehicle.passengers}</span><span class="spec-label">Passageiros</span></div>
                    <div class="spec-item"><i class="fas fa-suitcase-rolling spec-icon"></i><span class="spec-value">${vehicle.bags}</span><span class="spec-label">Malas</span></div>
                </div>
                <div class="rental-price">
                    <div class="daily-price">
                        <span class="price-label">Diária:</span>
                        <span class="price-value">${vehicle.daily}</span>
                        <small class="price-discount">(10% OFF)</small>
                    </div>
                    <div class="weekly-price">
                        <span class="price-label">Semanal:</span>
                        <span class="price-value">${vehicle.weekly}</span>
                    </div>
                </div>
                <div class="vehicle-features">
                    ${vehicle.tags.map(tag => `<span class="feature-tag">${tag}</span>`).join('')}
                </div>
                <button class="rent-btn pulse-effect" data-vehicle-id="${vehicle.id}">
                    <i class="fas fa-bolt"></i> Reserva Rápida
                </button>
            </div>
        </article>
    `).join('');
}

function renderPagination() {
    const totalPages = Math.ceil(vehicles.length / cardsPerPage);
    const paginationContainer = document.getElementById('pagination');
    let buttons = '';

    for (let i = 1; i <= totalPages; i++) {
        buttons += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }

    paginationContainer.innerHTML = buttons;

    document.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage = parseInt(btn.dataset.page);
            renderCards(currentPage);
            renderPagination();
        });
    });
}

// Chamada inicial
renderCards(currentPage);
renderPagination();
