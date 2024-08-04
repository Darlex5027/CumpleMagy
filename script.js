
//document.body.style.zoom = "25%";
var i = 0;

function cuadrilatero(ctx, grosor, alto, largo, x, y) {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - (alto * grosor));
    ctx.lineTo(x + (largo * grosor), y - (alto * grosor));
    ctx.lineTo(x + (largo * grosor), y);

}
function letra(letra, ctx, grosor, x, y) {
    switch (letra) {
        case 'a':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 6, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 6, 1, x + (4 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (3 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'b':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (4 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (3 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            ctx.fill();
            console.log(letra);

            break;
        case 'c':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 5, 1, x, y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y - (5 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            ctx.fill();
            console.log(letra);

            break;
        case 'd':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 5, 1, x + (4 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            ctx.fill();
            console.log(letra);

            break;
        case 'e':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 3, x, y - (3 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'f':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x, y - (3 * grosor));
            ctx.fill();
            console.log(letra);
            break;
        case 'g':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 5, 1, x, y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y - (5 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'h':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 7, 1, x + (4 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 5, x, y - (3 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'i':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x + (2 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 3, x + (grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (grosor), y);
            ctx.fill();
            console.log(letra);

            break;
        case 'j':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 1, x, y - grosor);
            cuadrilatero(ctx, grosor, 1, 2, x + grosor, y);
            cuadrilatero(ctx, grosor, 6, 1, x + (3 * grosor), y - grosor);
            cuadrilatero(ctx, grosor, 1, 3, x + (2 * grosor), y - (6 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'k':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 1, x + grosor, y - (3 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (4 * grosor));
            
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (5 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y - (6 * grosor));
            
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y);
            ctx.fill();
            console.log(letra);

            break;
        case 'l':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,7,1,x,y);
            cuadrilatero(ctx,grosor,1,5,x,y);
            ctx.fill()
            console.log(letra);

            break;
        case 'm':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,7,1,x,y);
            cuadrilatero(ctx,grosor,7,1,x+(4*grosor),y);
            cuadrilatero(ctx,grosor,1,1,x+grosor,y-(5*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(3*grosor),y-(5*grosor));
            cuadrilatero(ctx,grosor,2,1,x+(2*grosor),y-(3*grosor));
            ctx.fill()
            console.log(letra);

            break;
        case 'n':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,7,1,x,y);
            cuadrilatero(ctx,grosor,7,1,x+(4*grosor),y);
            cuadrilatero(ctx,grosor,1,1,x+(1*grosor),y-(4*grosor))
            cuadrilatero(ctx,grosor,1,1,x+(2*grosor),y-(3*grosor))
            cuadrilatero(ctx,grosor,1,1,x+(3*grosor),y-(2*grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 'ñ':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,7,1,x,y);
            cuadrilatero(ctx,grosor,4,1,x+(4*grosor),y);
            cuadrilatero(ctx,grosor,1,1,x+(1*grosor),y-(4*grosor))
            cuadrilatero(ctx,grosor,1,1,x+(2*grosor),y-(3*grosor))
            cuadrilatero(ctx,grosor,1,1,x+(3*grosor),y-(2*grosor))
            cuadrilatero(ctx,grosor,2,1,x+(4*grosor),y-(5*grosor))
            cuadrilatero(ctx,grosor,1,2,x+(2*grosor),y-(6*grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 'o':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,5,1,x,y-(1*grosor))
            cuadrilatero(ctx,grosor,5,1,x+(4*grosor),y-(1*grosor))
            cuadrilatero(ctx,grosor,1,3,x+(1*grosor),y-(6*grosor))
            cuadrilatero(ctx,grosor,1,3,x+(1*grosor),y-(0*grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 'p':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,7,1,x,y);
            cuadrilatero(ctx,grosor,1,3,x+(1*grosor),y-(6*grosor))
            cuadrilatero(ctx,grosor,1,3,x+(1*grosor),y-(3*grosor))
            cuadrilatero(ctx,grosor,2,1,x+(4*grosor),y-(4*grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 'q':
            cuadrilatero(ctx,grosor,5,1,x,y-(1*grosor))
            cuadrilatero(ctx,grosor,4,1,x+(4*grosor),y-(2*grosor))
            cuadrilatero(ctx,grosor,1,3,x+(1*grosor),y-(6*grosor))
            cuadrilatero(ctx,grosor,1,2,x+(1*grosor),y-(0*grosor))
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y);
            ctx.fill()
            console.log(letra);

            break;
        case 'r':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,7,1,x,y);
            cuadrilatero(ctx,grosor,1,3,x+(1*grosor),y-(6*grosor))
            cuadrilatero(ctx,grosor,1,3,x+(1*grosor),y-(3*grosor))
            cuadrilatero(ctx,grosor,2,1,x+(4*grosor),y-(4*grosor))
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y);
            
            ctx.fill()
            console.log(letra);

            break;
        case 's':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,1,4,x+(1*grosor),y-(6*grosor))
            cuadrilatero(ctx,grosor,1,3,x+(1*grosor),y-(3*grosor))
            cuadrilatero(ctx,grosor,1,4,x+(0*grosor),y-(0*grosor))
            cuadrilatero(ctx,grosor,2,1,x+(0*grosor),y-(4*grosor))
            cuadrilatero(ctx,grosor,2,1,x+(4*grosor),y-(1*grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 't':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx, grosor, 7, 1, x + (2 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 5, x + (0*grosor), y - (6 * grosor));
            
            ctx.fill()
            console.log(letra);

            break;
        case 'u':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,6,1,x,y-(1*grosor))
            cuadrilatero(ctx,grosor,6,1,x+(4*grosor),y-(1*grosor))
            cuadrilatero(ctx,grosor,1,3,x+(1*grosor),y-(0*grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 'v':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,4,1,x,y-(3*grosor));
            cuadrilatero(ctx,grosor,4,1,x+(4*grosor),y-(3*grosor));
            y+=3*grosor;
            cuadrilatero(ctx,grosor,2,1,x+grosor,y-(4*grosor));
            cuadrilatero(ctx,grosor,2,1,x+(3*grosor),y-(4*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(2*grosor),y-(3*grosor));
            ctx.fill()
            console.log(letra);

            break;
        case 'w':
            ctx.beginPath();
            ctx.moveTo(x,y);
            
            cuadrilatero(ctx,grosor,6,1,x+(0*grosor),y-(1*grosor));
            cuadrilatero(ctx,grosor,3,1,x+(2*grosor),y-(1*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(1*grosor),y-(0*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(3*grosor),y-(0*grosor));
            cuadrilatero(ctx,grosor,6,1,x+(4*grosor),y-(1*grosor));
            ctx.fill()
            console.log(letra);

            break;
        case 'x':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,2,1,x+(0*grosor),y-(5*grosor));
            cuadrilatero(ctx,grosor,2,1,x+(0*grosor),y-(0*grosor));
            cuadrilatero(ctx,grosor,2,1,x+(4*grosor),y-(5*grosor));
            cuadrilatero(ctx,grosor,2,1,x+(4*grosor),y-(0*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(1*grosor),y-(2*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(3*grosor),y-(2*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(1*grosor),y-(4*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(3*grosor),y-(4*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(2*grosor),y-(3*grosor));
            ctx.fill()
            console.log(letra);

            break;
        case 'y':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,2,1,x+(0*grosor),y-(5*grosor));
            cuadrilatero(ctx,grosor,2,1,x+(4*grosor),y-(5*grosor));
            cuadrilatero(ctx,grosor,4,1,x+(2*grosor),y-(0*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(1*grosor),y-(4*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(3*grosor),y-(4*grosor));
            ctx.fill()
            console.log(letra);

            break;
        case 'z':
            ctx.beginPath();
            ctx.moveTo(x,y);
            cuadrilatero(ctx,grosor,1,5,x+(0*grosor),y-(6*grosor));
            cuadrilatero(ctx,grosor,1,5,x+(0*grosor),y-(0*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(0*grosor),y-(1*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(1*grosor),y-(2*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(2*grosor),y-(3*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(3*grosor),y-(4*grosor));
            cuadrilatero(ctx,grosor,1,1,x+(4*grosor),y-(5*grosor));
            ctx.fill()
            console.log(letra);

            break;


        default:
            console.log(letra + "no disponible");
            break;
    }
}

function write(texto, ctx, grosor, x, y) {

    const cadena = texto;
    let array = cadena.toLowerCase().split("");
    array.forEach(element => {
        letra(element, ctx, grosor, x, y);
        x += grosor * 6;
    });
}
function dibujarecur() {
    i += 1;
    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');
    const canvas2 = document.getElementById('miCanvas2');
    const ctx2 = canvas2.getContext('2d');
    
    
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
    y=200;
    if(i>=33) write("F", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(5*10*6))/2), y);
    if(i>=34) write("Fe", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(5*10*6))/2), y);
    if(i>=35) write("Fel", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(5*10*6))/2), y);
    if(i>=36) write("Feli", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(5*10*6))/2), y);
    if(i>=37) write("Feliz", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(5*10*6))/2), y);
    if(i>=38) write("c", ctx2, 10, ((1500-(10*10*6))/2), y+100);
    if(i>=39) write("cu", ctx2, 10, ((1500-(10*10*6))/2), y+100);
    if(i>=40) write("cum", ctx2, 10, ((1500-(10*10*6))/2), y+100);
    if(i>=41) write("cump", ctx2, 10, ((1500-(10*10*6))/2), y+100);
    if(i>=42) write("cumpl", ctx2, 10, ((1500-(10*10*6))/2), y+100);
    if(i>=43) write("cumple", ctx2, 10, ((1500-(10*10*6))/2), y+100);
    if(i>=44) write("cumplea", ctx2, 10, ((1500-(10*10*6))/2), y+100);
    if(i>=45) write("cumpleañ", ctx2, 10, ((1500-(10*10*6))/2), y+100);
    if(i>=46) write("cumpleaño", ctx2, 10, ((1500-(10*10*6))/2), y+100);
    if(i>=47) write("cumpleaños", ctx2, 10, ((1500-(10*10*6))/2), y+100);
    if(i>=48) write("H", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(9*10*6))/2), y+200);
    if(i>=49) write("He", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(9*10*6))/2), y+200);
    if(i>=50) write("Her", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(9*10*6))/2), y+200);
    if(i>=51) write("Herm", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(9*10*6))/2), y+200);
    if(i>=52) write("Herma", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(9*10*6))/2), y+200);
    if(i>=53) write("Herman", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(9*10*6))/2), y+200);
    if(i>=54) write("Hermani", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(9*10*6))/2), y+200);
    if(i>=55) write("Hermanit", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(9*10*6))/2), y+200);
    if(i>=56) write("Hermanita", ctx2, 10, ((1500-(10*10*6))/2)+(((10*10*6)-(9*10*6))/2), y+200);
    
    

    
    
}