var i = 0;
function dibujarecur() {
    i += 1;
    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');

    if (i >= 1) {
        ctx.fillStyle = "#ff7e00"; //color del zorro
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(1500, 0);
        ctx.lineTo(1500, 1300);
        ctx.lineTo(0, 1300);
        ctx.fill();
    }

    if (i >= 2) {
        ctx.fillStyle = "#22b14c";//Color de fondo
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 1000);
        ctx.lineTo(100, 1000);
        ctx.lineTo(100, 800);
        ctx.lineTo(200, 800);
        ctx.lineTo(200, 100);
        ctx.lineTo(300, 100);
        ctx.lineTo(300, 0);
        ctx.fill();
    }


    if (i >= 3) {
        ctx.beginPath();
        ctx.moveTo(400, 0);
        ctx.lineTo(400, 100);
        ctx.lineTo(500, 100);
        ctx.lineTo(500, 200);
        ctx.lineTo(600, 200);
        ctx.lineTo(600, 300);
        ctx.lineTo(900, 300);
        ctx.lineTo(900, 200);
        ctx.lineTo(1000, 200);
        ctx.lineTo(1000, 100);
        ctx.lineTo(1100, 100);
        ctx.lineTo(1100, 0);
        ctx.fill();
    }

    if (i >= 4) {
        ctx.beginPath();
        ctx.moveTo(1200, 0);
        ctx.lineTo(1200, 100);
        ctx.lineTo(1300, 100);
        ctx.lineTo(1300, 800);
        ctx.lineTo(1400, 800);
        ctx.lineTo(1400, 1000);
        ctx.lineTo(1500, 1000);
        ctx.lineTo(1500, 0);
        ctx.fill();
    }
    if (i >= 5) {
        ctx.beginPath();
        ctx.moveTo(1500, 1300);
        ctx.lineTo(1500, 1100);
        ctx.lineTo(1400, 1100);
        ctx.lineTo(1400, 1200);
        ctx.lineTo(1200, 1200);
        ctx.lineTo(1200, 1300);
        ctx.fill();
    }
    if (i >= 6) {
        ctx.beginPath();
        ctx.moveTo(0, 1300);
        ctx.lineTo(0, 1100);
        ctx.lineTo(100, 1100);
        ctx.lineTo(100, 1200);
        ctx.lineTo(300, 1200);
        ctx.lineTo(300, 1300);
        ctx.fill();
    }


    if (i >= 7) {
        ctx.fillStyle = 'white';
        x = 300;
        y = 500;
        alto = 400;
        largo = 100;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - alto);
        ctx.lineTo(x + largo, y - alto)
        ctx.lineTo(x + largo, y)
        ctx.fill();
    }
    if (i >= 8) {
        //oreja derecha
        x = 1100;
        y = 500;
        alto = 400;
        largo = 100;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - alto);
        ctx.lineTo(x + largo, y - alto)
        ctx.lineTo(x + largo, y)
        ctx.fill();

    }


    if (i >= 9) {
        ctx.beginPath();
        ctx.moveTo(400, 1200);
        ctx.lineTo(400, 1100);
        ctx.lineTo(500, 1100);
        ctx.lineTo(500, 1000);
        ctx.lineTo(600, 1000);
        ctx.lineTo(600, 900);
        ctx.lineTo(700, 900);
        ctx.lineTo(700, 1000);
        ctx.lineTo(800, 1000);
        ctx.lineTo(800, 900);
        ctx.lineTo(900, 900);
        ctx.lineTo(900, 1000);
        ctx.lineTo(1000, 1000);
        ctx.lineTo(1000, 1100);
        ctx.lineTo(1100, 1100);
        ctx.lineTo(1100, 1200);
        ctx.fill();
    }
    if (i >= 10) {
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(300, 1300);
        ctx.lineTo(300, 1200);
        ctx.lineTo(1200, 1200);
        ctx.lineTo(1200, 1300);
        ctx.lineTo(300, 1300);
        ctx.fill();
    }
    if (i >= 11) {
        ctx.moveTo(1200, 1200);
        ctx.lineTo(1200, 1100);
        ctx.lineTo(1400, 1100);
        ctx.lineTo(1400, 1200);
        ctx.fill();
    }
    if (i >= 12) {
        ctx.moveTo(1400, 1100);
        ctx.lineTo(1400, 1000);
        ctx.lineTo(1500, 1000);
        ctx.lineTo(1500, 1100);
        ctx.fill();
    }
    if (i >= 13) {
        ctx.moveTo(1300, 1000);
        ctx.lineTo(1300, 800);
        ctx.lineTo(1400, 800);
        ctx.lineTo(1400, 1000);
        ctx.fill();
    }
    if (i >= 14) {
        ctx.moveTo(1200, 800);
        ctx.lineTo(1200, 100);
        ctx.lineTo(1300, 100);
        ctx.lineTo(1300, 800);
        ctx.fill();
    }
    if (i >= 15) {
        x = 1100;
        y = 100;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 100);
        ctx.lineTo(x + 100, y - 100)
        ctx.lineTo(x + 100, y)
        ctx.fill();
    }
    if (i >= 16) {
        x = 1000;
        y = 200;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 100);
        ctx.lineTo(x + 100, y - 100)
        ctx.lineTo(x + 100, y)
        ctx.fill();
    }
    if (i >= 17) {
        x = 900;
        y = 300;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 100);
        ctx.lineTo(x + 100, y - 100)
        ctx.lineTo(x + 100, y)
        ctx.fill();
    }
    if (i >= 18) {
        x = 600;
        y = 400;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 100);
        ctx.lineTo(x + 300, y - 100)
        ctx.lineTo(x + 300, y)
        ctx.fill();
    }

    if (i >= 19) {
        x = 500;
        y = 300;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 100);
        ctx.lineTo(x + 100, y - 100)
        ctx.lineTo(x + 100, y)
        ctx.fill();
    }

    if (i >= 20) {
        x = 400;
        y = 200;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 100);
        ctx.lineTo(x + 100, y - 100)
        ctx.lineTo(x + 100, y)
        ctx.fill();
    }

    if (i >= 20) {
        x = 300;
        y = 100;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 100);
        ctx.lineTo(x + 100, y - 100)
        ctx.lineTo(x + 100, y)
        ctx.fill();
    }

    if (i >= 21) {
        x = 200;
        y = 800;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 700);
        ctx.lineTo(x + 100, y - 700)
        ctx.lineTo(x + 100, y)
        ctx.fill();
    }

    if (i >= 22) {
        x = 100;
        y = 1000;
        alto = 200;
        largo = 100;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - alto);
        ctx.lineTo(x + largo, y - alto)
        ctx.lineTo(x + largo, y)
        ctx.fill();
    }

    if (i >= 23) {
        x = 0;
        y = 1100;
        alto = 100;
        largo = 100;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - alto);
        ctx.lineTo(x + largo, y - alto)
        ctx.lineTo(x + largo, y)
        ctx.fill();
    }

    if (i >= 24) {
        x = 100;
        y = 1200;
        alto = 100;
        largo = 200;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - alto);
        ctx.lineTo(x + largo, y - alto)
        ctx.lineTo(x + largo, y)
        ctx.fill();
    }

    if (i >= 25) {
        x = 400;
        y = 900;
        alto = 200;
        largo = 100;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - alto);
        ctx.lineTo(x + largo, y - alto)
        ctx.lineTo(x + largo, y)
        ctx.fill();

    }

    if (i >= 26) {
        x = 1000;
        y = 900;
        alto = 200;
        largo = 100;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - alto);
        ctx.lineTo(x + largo, y - alto)
        ctx.lineTo(x + largo, y)
        ctx.fill();
    }
    if (i >= 27) {
        x = 600;
        y = 900;
        alto = 100;
        largo = 300;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - alto);
        ctx.lineTo(x + largo, y - alto)
        ctx.lineTo(x + largo, y)
        ctx.fill();
    }
    if (i >= 28) {
        x = 700;
        y = 1000;
        alto = 100;
        largo = 100;
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - alto);
        ctx.lineTo(x + largo, y - alto)
        ctx.lineTo(x + largo, y)
        ctx.fill();

    }
    if (i >= 29) {

    }
    if (i >= 30) {

    }

    if (i >= 31) {

    }
    if (i >= 32) {

    }
    if (i >= 33) {

    }

}


function dibujarfondo() {

}

function dibujarresto() {




























    x = 300;
    y = 600;
    alto = 100;
    largo = 100;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - alto);
    ctx.lineTo(x + largo, y - alto)
    ctx.lineTo(x + largo, y)
    ctx.fill();






    x = 400;
    y = 500;
    alto = 100;
    largo = 200;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - alto);
    ctx.lineTo(x + largo, y - alto)
    ctx.lineTo(x + largo, y)
    ctx.fill();







    x = 1100;
    y = 600;
    alto = 100;
    largo = 100;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - alto);
    ctx.lineTo(x + largo, y - alto)
    ctx.lineTo(x + largo, y)
    ctx.fill();






    x = 900;
    y = 500;
    alto = 100;
    largo = 200;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - alto);
    ctx.lineTo(x + largo, y - alto)
    ctx.lineTo(x + largo, y)
    ctx.fill();





}