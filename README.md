# 08. Galeria de personagens

**Rascunho assistido para estudo.** Revise, execute e explique o código antes de usar em atividade acadêmica. Este exemplo não declara autoria independente do estudante. A publicação do código não equivale à entrega da atividade acadêmica.

## Executar
Abra `index.html` no navegador, mantendo os arquivos desta pasta juntos. Funciona offline; não exige instalação, servidor, dependências ou conta.

## Requisitos cobertos
- Quatro imagens locais organizadas em CSS Grid responsivo
- Clique em qualquer personagem abre mais detalhes com JavaScript
- Janela fecha por botão ou Escape

## O que observar no código
- `data-character` liga cada botão ao objeto de dados
- `textContent` insere texto sem interpretar HTML
- `showModal` e `close` controlam um `dialog` nativo

## Testes manuais
1. Clique nos quatro cards, um por vez; nome, imagem e descrição devem corresponder
2. Feche pelo botão e depois por Escape
3. Use Tab e Enter para abrir um card; ao fechar o foco volta ao card
4. Em 375 px o grid deve ter uma coluna; em desktop, várias
5. Abra e feche o mesmo card três vezes para conferir que não duplica janelas

## Alteração sugerida para aprender
Personalize nomes, cores e conteúdo; explique em suas palavras a função de cada elemento, seletor e evento usado. Teste novamente depois de alterar.

## Créditos e limites
Os exercícios 1 e 3 usam referências a obras existentes: Link (Nintendo) e The Mandalorian (Star Wars). Link e The Legend of Zelda pertencem à Nintendo; Star Wars e The Mandalorian pertencem à Lucasfilm/Disney. A representação SVG de Link foi desenhada para o exemplo e não é arte oficial. As demais artes e personagens Aurora são originais. Não há dados pessoais, rastreamento ou carregamento externo; links de referência só abrem quando clicados. Menções no quiz não usam imagens ou logos de franquias.

## Estado da verificação
Em 02/10/2026, o conjunto dos nove exercícios passou por 68 verificações de lógica em DOM simulado, verificações de sintaxe dos seis scripts e de estrutura e referências locais. Testes visuais e comportamentos nativos de navegador ainda não foram concluídos: o navegador de teste não iniciou e a prévia local não abriu. Os testes automatizados não substituem os testes manuais acima.
