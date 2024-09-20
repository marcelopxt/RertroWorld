// Ativa os Tooltips do Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Ativa os Popovers do Bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// Adiciona a funcionalidade de embaçamento ao passar o mouse sobre o card
document.querySelectorAll('.infojogo').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('blur-overlay');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('blur-overlay');
    });
});

// Adiciona a funcionalidade de embaçamento ao exibir os botões
document.querySelectorAll('.infojogo').forEach(card => {
    const buttonsContainer = card.querySelector('.buttons-container');
    if (buttonsContainer) {
        buttonsContainer.addEventListener('mouseenter', () => {
            card.classList.add('blur-overlay');
        });

        buttonsContainer.addEventListener('mouseleave', () => {
            card.classList.remove('blur-overlay');
        });
    }
});
