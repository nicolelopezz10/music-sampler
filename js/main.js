let sound = document.querySelectorAll('.sound');
let album = document.querySelectorAll('.album');
let players = document.querySelectorAll('audio');

function hideAll() {
  sound.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();


album.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    switch (e.target.getAttribute('id')) {
      case 'dontSmile':
        document.querySelector('#dontSmileSound')
        	.style.display = 'block';
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
        break;

      case 'myFuture':
        document.querySelector('#myFutureSound')
        	.style.display = 'block';
          players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
          });
        break;

      case 'Therefore':
        document.querySelector('#thereforeSound')
        .style.display = 'block';
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
        break;

      case 'xanny':
        document.querySelector('#xannySound')
        .style.display = 'block';
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()
