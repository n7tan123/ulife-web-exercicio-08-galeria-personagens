// Dados separados da apresentação facilitam adicionar personagens.
const characters = {
  "lia": {
    "name": "Lia Sol",
    "role": "Exploradora",
    "description": "Lê constelações e protege a equipe com seu escudo de luz. Sua missão é devolver os mapas às cidades do céu."
  },
  "nox": {
    "name": "Nox Vetor",
    "role": "Tecnomante",
    "description": "Constrói portais espelhados e esconde rotas espaciais. Acredita que o conhecimento deve permanecer sob seu controle."
  },
  "bento": {
    "name": "Bento Byte",
    "role": "Robô de suporte",
    "description": "Conserta equipamentos com peças encontradas e transforma ruídos em música. É o primeiro a oferecer ajuda."
  },
  "iris": {
    "name": "Íris Fluxo",
    "role": "Navegadora",
    "description": "Sente mudanças nas correntes de energia. Guia a nave por caminhos que ainda não aparecem nos mapas."
  }
};
const dialog = document.querySelector('#details');
document.querySelectorAll('.character').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.character;
    const character = characters[key];
    document.querySelector('#detail-name').textContent = character.name;
    document.querySelector('#detail-role').textContent = character.role;
    document.querySelector('#detail-description').textContent = character.description;
    const image = document.querySelector('#detail-image');
    image.src = `assets/${key}.svg`;
    image.alt = `Retrato geométrico de ${character.name}`;
    dialog.showModal(); // O dialog nativo mantém o foco dentro da janela.
  });
});
document.querySelector('#close-details').addEventListener('click', () => dialog.close());
// Escape já fecha um dialog modal nativo; não precisamos recriar esse comportamento.
