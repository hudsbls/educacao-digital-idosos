/* Controles de acessibilidade do protótipo.
   Existem para validar a ideia com o público: aumentar a letra e
   alternar alto contraste, lembrando a preferência entre as páginas.
   No produto final, isso será reimplementado no portal. */
(function () {
  var raiz = document.documentElement;
  var MIN = 16, MAX = 32, PASSO = 2;

  function ler(chave) {
    try { return localStorage.getItem(chave); } catch (e) { return null; }
  }
  function gravar(chave, valor) {
    try { localStorage.setItem(chave, valor); } catch (e) { /* file:// pode bloquear */ }
  }

  function aplicarTamanho(px) {
    var v = Math.max(MIN, Math.min(MAX, px));
    raiz.style.fontSize = v + 'px';
    gravar('wf-tamanho', String(v));
  }

  var salvo = parseInt(ler('wf-tamanho'), 10);
  if (salvo) aplicarTamanho(salvo);

  document.querySelectorAll('[data-acao="aumentar"]').forEach(function (b) {
    b.addEventListener('click', function () {
      aplicarTamanho(parseInt(getComputedStyle(raiz).fontSize, 10) + PASSO);
    });
  });

  document.querySelectorAll('[data-acao="diminuir"]').forEach(function (b) {
    b.addEventListener('click', function () {
      aplicarTamanho(parseInt(getComputedStyle(raiz).fontSize, 10) - PASSO);
    });
  });

  var btnContraste = document.querySelector('[data-acao="contraste"]');
  if (btnContraste) {
    if (ler('wf-contraste') === '1') document.body.classList.add('alto-contraste');
    btnContraste.setAttribute('aria-pressed', document.body.classList.contains('alto-contraste') ? 'true' : 'false');
    btnContraste.addEventListener('click', function () {
      var ativo = document.body.classList.toggle('alto-contraste');
      gravar('wf-contraste', ativo ? '1' : '0');
      btnContraste.setAttribute('aria-pressed', ativo ? 'true' : 'false');
    });
  }
})();
