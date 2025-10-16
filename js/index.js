(function() {
  function $(id) {
    return document.getElementById(id);
  }

  // Controle do cartão
  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;

  if (openB && card) {
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  }

  if (closeB && card) {
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  }

  // Controle do bloqueio e música
  var btnMusica = $('btn-musica');
  var bloqueioMusica = $('bloqueio-musica');
  var letraMusica = $('letra-musica');
  var audio = $('musica');
  var btnRecomecar = $('btn-recomecar');
  var btnPausar = $('btn-pausar');

  var versos = [
    "                                     ",
    "And I know I make the same mistakes every time",
    "Bridges burn, I never learn, at least I did one thing right",
    "I did one thing right!"
  ];
  var tempos = [2700, 2500, 5000, 3000]; // tempo em ms para cada verso

  function mostrarVersos(versos, tempos) {
    let i = 0;
    letraMusica.style.display = 'block';
    function mostrarProximo() {
      if (i < versos.length) {
        if (i === versos.length - 1) {
          letraMusica.innerHTML = `<p class="ultimo-verso">${versos[i]}</p>`;
        } else {
          letraMusica.innerHTML = `<p>${versos[i]}</p>`;
        }
        setTimeout(mostrarProximo, tempos[i]);
        i++;
      } else {
        letraMusica.style.display = 'none';
        bloqueioMusica.style.display = 'none';
      }
    }
    mostrarProximo();
  }

  if (btnMusica && bloqueioMusica && audio && letraMusica) {
    btnMusica.onclick = function() {
      audio.play();
      btnMusica.style.display = 'none';
      mostrarVersos(versos, tempos);
    };
  }

  if (btnRecomecar && audio) {
    btnRecomecar.onclick = function() {
      audio.currentTime = 0;
      audio.play();
    };
  }

  if (btnPausar && audio) {
    btnPausar.onclick = function() {
      audio.pause();
    };
  }

}());