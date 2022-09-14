

function cambiaColore(colore) {
  // .style ci permette di modificare il CSS da JavaScript
  // .style contiene tutte le proprietà CSS, solo che sono scritte in camelCase
  document.getElementById("box-colorata").style.backgroundColor = colore
}


cambiaColore('orange')
