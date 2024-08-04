document.body.style.zoom = "25%";
var i = 0;


function dibujarecur() {
    i += 1;
    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');
    const canvas2 = document.getElementById('miCanvas2');
    const ctx2 = canvas2.getContext('2d');
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    ctx2.beginPath();
    ctx2.moveTo(0, 0);
    ctx2.lineTo(1500, 0);
    ctx2.lineTo(1500, 2500);
    ctx2.lineTo(0, 2500);
    ctx2.fill();

    if (i >= 1) {
        ctx.fillStyle = "#ff7e00"; //color del zorro
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(1500, 0);
        ctx.lineTo(1500, 2500);
        ctx.lineTo(0, 2500);
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
    }
    if (i >= 30) {
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
    }

    if (i >= 31) {
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
    if (i >= 32) {


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
    }
    y = 200;
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 33) write("F_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 34) write("F_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 35) write("Fe_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 36) write("Fe_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 37) write("Fel_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 38) write("Fel_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 39) write("Feli_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 40) write("Feli_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 41) write("Feliz_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 42) write("Feliz_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 41) write("Feliz", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (5 * 10 * 6)) / 2), y);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 43) write("c_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 44) write("c_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 45) write("cu_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 46) write("cu_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 47) write("cum_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 48) write("cum_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 49) write("cump_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 50) write("cump_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 51) write("cumpl_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 52) write("cumpl_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 53) write("cumple_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 54) write("cumple_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 55) write("cumplea_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 56) write("cumplea_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 57) write("cumpleañ_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 58) write("cumpleañ_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 59) write("cumpleaño_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 60) write("cumpleaño_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 61) write("cumpleaños_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 62) write("cumpleaños_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 61) write("cumpleaños", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2), y + 100);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 63) write("H_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 64) write("H_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 65) write("He_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 66) write("He_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 67) write("Her_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 68) write("Her_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 69) write("Herm_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 70) write("Herm_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 71) write("Herma_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 72) write("Herma_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 73) write("Herman_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 74) write("Herman_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 75) write("Hermani_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 76) write("Hermani_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 77) write("Hermanit_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "#ff7e00"; //color del zorro
    if (i >= 78) write("Hermanit_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    ctx2.fillStyle = "black"; //color del zorro
    if (i >= 79) write("Hermanita_", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);

    if (i >= 80 && i % 2 == 0) {
        ctx2.fillStyle = "#ff7e00"; //color del zorro
        write("         _", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    }
    if (i >= 80 && i % 2 != 0) {
        ctx2.fillStyle = "black"; //color del zorro
        write("         _", ctx2, 10, ((1500 - (10 * 10 * 6)) / 2) + (((10 * 10 * 6) - (9 * 10 * 6)) / 2), y + 200);
    }
}