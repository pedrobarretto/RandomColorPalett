const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function checkDarkness(rgb) {
    rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');
    r = rgb[0];
    g = rgb[1];
    b = rgb[2];
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
        );
    if (hsp<127.5) {
        return 'white';
    } else {
        return 'black';
    }
}

function algoColor() {
    const fh1 = document.querySelector('#first-color');
    const sh1 = document.querySelector('#second-color');
    const th1 = document.querySelector('#third-color');
    const fpalett = document.querySelector('.first');
    const spalett = document.querySelector('.second');
    const tpalett = document.querySelector('.third');

    const fcolor = randomColor();
    const scolor = randomColor();
    const tcolor = randomColor();
    
    fpalett.style.backgroundColor = fcolor
    spalett.style.backgroundColor = scolor
    tpalett.style.backgroundColor = tcolor

    fh1.innerHTML = fcolor
    sh1.innerHTML = scolor
    th1.innerHTML = tcolor

    if (checkDarkness(fcolor) == 'white') {
        fh1.style.color = 'white';
    } else {
        fh1.style.color = 'black';
    }

    if (checkDarkness(scolor) == 'white') {
        sh1.style.color = 'white';
    } else {
        sh1.style.color = 'black';
    }

    if (checkDarkness(tcolor) == 'white') {
        th1.style.color = 'white';
    } else {
        th1.style.color = 'black';
    }
}

function generateColor() {
    const btn = document.querySelector('#generator');
    btn.addEventListener('click', function () {
        algoColor()
    })
}

function startPage() {
    algoColor()
}
startPage()
generateColor()