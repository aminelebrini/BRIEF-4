//const display = document.getElementsByClassName('display');
// const btn1 = document.querySelector('.card1');
// const btn2 = document.getElementsByClassName('tow');
// const btn3 = document.getElementsByClassName('three');
// const btn4 = document.getElementsByClassName('four');
// const btn5 = document.getElementsByClassName('five');
// const btn6 = document.getElementsByClassName('six');
// const btn7 = document.getElementsByClassName('seven');
// const btn8 = document.getElementsByClassName('eight');
// const btn9 = document.getElementsByClassName('nine');
// const btn10 = document.getElementsByClassName('ten');
// const btn11 = document.getElementsByClassName('eleven');
// const btn12 = document.getElementsByClassName('twelve');
// const btn13 = document.getElementsByClassName('therteen');
// const btn14 = document.getElementsByClassName('fourteen');
// const btn15 = document.getElementsByClassName('fiveteen');
// const btn16 = document.getElementsByClassName('sixteen');
let score = 0;
let numbers = [];
let cards = [];
let firstEvent = null;
let secondEvent = null;
for(let n = 1 ; n < 9 ; n++)
{
    numbers.push(n);
    numbers.push(n);
}

numbers.sort(()=> Math.random() - 0.5);

console.log(numbers)
const display = document.getElementById('display');
const congra = document.querySelector('.dis');
for(let i = 1 ; i <= 16 ; i++)
{
    let card = document.createElement('button');
    card.className = `card${i}`;
    card.style.backgroundImage = "url('https://cdn.wallpapersafari.com/54/28/qOxN6n.png')";
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
    let text = document.createElement('h2');
    text.className = `one${i}`;
    text.textContent = numbers[i - 1];
    text.id = `one${i}`;
    text.style.display = 'none';
    text.style.color = 'rgb(43, 41, 41)';
    text.style.fontSize = '50px';


    card.appendChild(text);
    display.appendChild(card);

    document.getElementById('score').innerText = 0;
    card.addEventListener('click', function onclick(){

        text.style.display = 'block';
        if(!firstEvent)
        {
            firstEvent = card;
        }else{
            secondEvent = card;
        }
        if(firstEvent.textContent === secondEvent.textContent)
        {
            score += 1;
            firstEvent.querySelector('h2').style.display = 'block';
            secondEvent.querySelector('h2').style.display = 'block';
            document.getElementById('score').innerText = score;
            if(score == 8)
            {
                const cong = document.createElement('div');
                cong.className = 'congratulations';
                cong.textContent = "🎉 Congratulations! You have finished the game with an 8-point score.";
                cong.style.position = 'fixed';
                cong.style.top = '60px';
                cong.style.left = '50%';
                cong.style.transform = 'translateX(-50%)';
                cong.style.backgroundColor = '#4caf50';
                cong.style.color = 'white';
                cong.style.padding = '15px 25px';
                cong.style.borderRadius = '10px';
                cong.style.fontSize = '18px';
                cong.style.fontWeight = 'bold';
                cong.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
                cong.style.zIndex = '9999';
                cong.style.textAlign = 'center';
                cong.style.transition = 'opacity 1s ease';
                cong.style.opacity = '1';
                congra.appendChild(cong);
            }
        }else{
            setTimeout(()=>{
                firstEvent.querySelector('h2').style.display = 'none';
                secondEvent.querySelector('h2').style.display = 'none';
            }, 800);
        }
        setTimeout(()=>{
            firstEvent = null;
            secondEvent = null;
        }, 800);
    });
    
}