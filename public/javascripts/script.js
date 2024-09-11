
//Esse é um Script do BootsTrap para ativar o Tooltip, que por padrão vem desativado para evitar travamentos por excesso de Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]') //Declara uma variavel que irá buscar todos os elementos com o data-bs-toglle de tooltip
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)) // e aqui ele "ativa" esse elemento

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

