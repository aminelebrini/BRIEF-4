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

let numbers = [];
for(let n = 1 ; n <= 8 ; n++)
{
    numbers.push(n);
    numbers.push(n);

    console.log(numbers);
}
numbers.sort(()=> Math.random() - 0.5);
for(let i = 1 ; i < 17 ; i++)
{
    let cards = [];
    const display = document.getElementById('display');
    let card = document.createElement('button');
    card.className = `card${i}`;

    let text = document.createElement('h2');
    text.className = `one${i}`;
    text.textContent = numbers[i];
    text.id = `one${i}`;
    text.style.display = 'none';
    text.style.color = 'white';

    cards[i] = text.textContent;

    console.log(cards);
    card.appendChild(text);
    display.appendChild(card);


    card.addEventListener('click', function onclick(){
    if(text.style.display === 'none')
    {
        text.style.display = 'block';
    }
    if(cards[i].textContent === cards[i+1].textContent)
    {
        document.getElementById('score').innerText = 1;
    }
}, {once : true});
}


