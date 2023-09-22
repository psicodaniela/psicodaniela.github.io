(function (){

  // Variáveis

  const nav = document.querySelector('nav')
  const opcoes = nav.querySelector('div.opcoes')
  const botaoMenu = nav.querySelector('button.menu')

  // Abre o navbar clicando no botão de menu MOBILE

  function abrirOpcoes () {
    botaoMenu.addEventListener('click', () => {
      const menuAberto = opcoes.classList.contains('mostrar')

      if (menuAberto) opcoes.classList.remove('mostrar'), botaoMenu.classList.remove('ativo')
      else opcoes.classList.add('mostrar'),
      botaoMenu.classList.add('ativo')
    })
  }

  // Ativar tudo
  abrirOpcoes()

}())

