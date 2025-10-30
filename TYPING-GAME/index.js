// const phraselvl1 = [
//     "Le soleil brille sur la mer calme.",
//     "Coder, c’est créer avec la logique et l’imagination.",
//     "Chaque erreur est une leçon déguisée.",
//     "La vitesse vient avec la pratique.",
//     "Les grands projets commencent toujours petits."
// ];

// const phraselvl2 = [
//     "Les développeurs rêvent en code, et résolvent des problèmes dans leur sommeil.",
//     "La précision est plus importante que la rapidité. Dactylographie lente, mais sans fautes.",
//     "Chaque touche pressée te rapproche de la perfection. Continue d’écrire, encore et encore.",
//     "L’écran ne juge pas tes erreurs,il te montre seulement la voie pour t’améliorer."
// ]
const texts = 
    "Dans le monde du code, chaque caractère compte. Un simple point peut tout changer. C’est la précision qui transforme un bon code en œuvre d’art.";
    // "Apprendre à taper vite, c’est comme apprendre à jouer du piano. Tes doigts dansent, ton esprit dirige, et le clavier devient ton instrument.",
    // "Certains écrivent des poèmes, d’autres des lignes de code. Mais dans les deux cas, c’est une question de rythme et d’inspiration."


document.getElementById('display-txt').innerText = texts;
const input = document.getElementById('input-text');

    input.addEventListener('keypress', ()=>{
    let html = '';
    const value = input.value;
    for(let i = 0; i < texts.length; i++)
    {
        if (value[i] == null) {
      html += `<span>${texts[i]}</span>`;
    } else if (value[i] === texts[i]) {
      html += `<span style="color:green">${texts[i]}</span>`;
    } else {
      html += `<span style="color:red">${texts[i]}</span>`;
    }
    }
  document.getElementById('display-txt').innerHTML = html;
});

