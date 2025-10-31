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


let second = 60;
let timer = null;
let wpm = 0;
function timepersecond()
{
  timer = setInterval(()=>{
    if(second >= 0)
    {
      second--;
      document.getElementById("timer").innerText = `${second}`;
      //console.log(second);
    }
    if(second == 0)
    {
      input.disabled = true;
      //console.log("time out");
      alert('Le temps est écoulé.');
      clearInterval(timer);
    }
  },1000);
  
}
    // counter_mistakes = counter(value, texts);
    // document.getElementById('mistakes').innerText = counter_mistakes;
    function typing(userInput, textToType)
    {
        let html = '';
        let counter_mistakes = 0;
        let counter_correct = 0;
        let allText = textToType;
        const words = userInput.trim().split(/\s+/).length;
        const wpm = Math.round(words / (25 / 60));
        document.getElementById('wpm').innerText = wpm;

        if(wpm <= 30)
        {
          document.getElementById('wpm').innerText = "Slow";
        }
        else if(wpm > 30 && wpm <= 40)
        {
          document.getElementById('wpm').innerText = "Moyen";
        }
        else if(wpm > 40 && wpm <= 60)
        {
          document.getElementById('wpm').innerText = "Rapide";
        }
        else if(wpm > 60 && wpm <= 80)
        {
          document.getElementById('wpm').innerText = "Très rapide";
        }
        else if(wpm > 80)
        {
          document.getElementById('wpm').innerText = "Excellent";
        }

        for(let i = 0; i < allText.length; i++)
        {
          
        const userinput = userInput[i];
        const textTro = allText[i];

        if (userinput == null) {
          html += `<span>${textTro}</span>`;
        } else if (userinput === textTro) {
          html += `<span style="color:green">${textTro}</span>`; 
          counter_correct++;
        }else {
          html += `<span style="color:red">${textTro}</span>`;
          counter_mistakes++;
        }
    }
    let total_char = counter_correct;
    let taux_reaussite = Math.floor((total_char / allText.length) * 100);
    document.getElementById('display-txt').innerHTML = html;
    document.getElementById('mistakes').innerText = counter_mistakes;
    document.getElementById('pourcentage').innerText = taux_reaussite;

    if(userInput.length >= allText.length) {
        input.disabled = true;
    }
  }
  //-------------------
    input.addEventListener('keyup', ()=>{
      if(!timer)
    {
      timepersecond();
    }
    typing(input.value, texts);
  });

