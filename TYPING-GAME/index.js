const texts = 
    "Le soleil se levait doucement à l’horizon, illuminant les toits de la ville d’une lumière dorée. Les oiseaux chantaient dans les arbres, tandis que le vent léger apportait avec lui le parfum des fleurs. Chaque matin est une nouvelle chance d’apprendre, de créer et de se dépasser. Le clavier devient alors le prolongement de l’esprit, et chaque touche pressée rapproche un peu plus de la maîtrise et de la vitesse. Écrire vite, mais surtout écrire avec précision, est un art qui se perfectionne à force de pratique et de patience. Même les erreurs sont des enseignements précieux, et chaque phrase tapée correctement apporte une satisfaction unique. Profite du moment, respire profondément, et laisse tes doigts danser sur les touches.";
    
document.getElementById('display-txt').innerText = texts;
const input = document.getElementById('input-text');
const repload = document.getElementById('restart-btn');

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

repload.addEventListener('click', ()=>{
  input.textContent = "";
  document.getElementById('mistakes').innerText = "";
  document.getElementById('pourcentage').innerText = "";
  document.getElementById('wpm').innerText = "";
  document.getElementById("timer").innerText = 60;
});