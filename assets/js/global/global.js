(function (){

  // Proibe o usuário de arrastar imagens do site 

  function desativarDragDrop () {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }

  // Só carrega as imagens quando elas aparecerem na tela (usar o data-src="" na imagem)
  
  function ativarLazyLoading () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY + window.innerHeight + 500
      const imagens = document.querySelectorAll('img[data-src]')

      for (const imagem of Array.from([...imagens])) {
        const bodyRect = document.body.getBoundingClientRect()
        const imagemRect = imagem.getBoundingClientRect()
        const posicaoImagem = imagemRect.top - bodyRect.top
        if (alturaPagina <= posicaoImagem) return

        const src = imagem.getAttribute('data-src')
        imagem.src = src
        imagem.removeAttribute('data-src')
      }
    })
  }

  // Faz a tela arrastar até o ID que tiver no botão

  function habilitarCliqueRolarAteSeletor () {
    window.addEventListener('click', (evento) => { 
      const seletor = evento.target.getAttribute('data-scroll')
      if (!seletor) return
  
      rolarAteSeletor(seletor)
    })
  }
  
  function rolarAteSeletor (seletor) {
    const elemento = document.querySelector(seletor)
  
    window.scrollTo({
      top: elemento.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  // Faz um <button> virar botão igual a tag <a>

  function paraPaginaExterna (url) {
    if (!url) return

    const a = document.createElement('a')
    a.rel = 'noopener noreferrer nofollow'
    a.target = '_blank'
    a.href = url
    a.click()
  }

  function paraPaginaInterna (url) {
    if (!url) return

    const a = document.createElement('a')
    a.rel = 'noopener noreferrer nofollow'
    a.target = '_self'
    a.href = url
    a.click()
  }

  function cliqueBotaoExterno () {
    window.addEventListener('click', (evento) => {
      if (evento.target.nodeName !== 'BUTTON') return

      const url = evento.target.getAttribute('data-url')
      if (!url) return

      paraPaginaExterna(url)
    })
  }

  function cliqueBotaoInterno () {
    window.addEventListener('click', (evento) => {
      if (evento.target.nodeName !== 'BUTTON') return

      const url = evento.target.getAttribute('data-pagina')
      if (!url) return

      paraPaginaInterna(url)
    })
  }

  // Ativando TUDO

  cliqueBotaoExterno()
  cliqueBotaoInterno()
  habilitarCliqueRolarAteSeletor()
  desativarDragDrop()
  ativarLazyLoading()

}())