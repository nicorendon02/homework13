/* 
Se está pensando en el diseño de un juego que incluye la nave espacial Enterprise. En el juego, 
esta nave tiene un nivel de potencia de 0 a 100, y un nivel de coraza de 0 a 20. La Enterprise puede 
encontrarse con una pila atómica, en cuyo caso su potencia aumenta en 25. encontrarse con un escudo, 
en cuyo caso su nivel de coraza aumenta en 10. recibir un ataque, en este caso se especi�can los puntos 
de fuerza del ataque recibido. La Enterprise �para� el ataque con la coraza, y si la coraza no alcanza, 
el resto se descuenta de la potencia. P.ej. si la Enterprise con 80 de potencia y 12 de coraza recibe 
un ataque de 20 puntos de fuerza, puede parar solamente 12 con la coraza, los otros 8 se descuentan de 
la potencia. La nave debe quedar con 72 de potencia y 0 de coraza. Si la Enterprise no tiene nada de coraza 
al momento de recibir el ataque, entonces todos los puntos de fuerza del ataque se descuentan de la potencia. 
La potencia y la coraza tienen que mantenerse en los rangos indicados, p.ej. si la Enterprise tien 16 puntos 
de coraza y se encuentra con un escudo, entonces queda en 20 puntos de coraza, no en 26. Tampoco puede quedar 
negativa la potencia, a lo sumo queda en 0. La Enterprise nace con 50 de potencia y 5 de coraza. 
Implementar este metodo constructor de la Enterprise, que tiene que entender los siguientes mensajes: 
12.1 potencia() 
12.2 coraza() 
12.3 encontrarPilaAtomica() 
12.4 encontrarEscudo() 
12.5 recibirAtaque(puntos)

P.ej. sobre un REPL recién lanzado, después de esta secuencia enterprise.encontrarPilaAtomica() enterprise.recibirAtaque(14) enterprise.encontrarEscudo() la potencia de la Enterprise debe ser 66, y su coraza debe ser 10.

Agregar al metodo constructor de la Enterprise del ejercicio 12, la capacidad de entender estos mensajes. 
fortalezaDefensiva(), que es el máximo nivel de ataque que puede resistir, o sea, coraza más potencia. 
necesitaFortalecerse(), tiene que ser true si su coraza es 0 y su potencia es menos de 20. 
fortalezaOfensiva(), que corresponde a cuántos puntos de fuerza tendría un ataque de la Enterprise. 
Se calcula así: si tiene menos de 20 puntos de potencia entonces es 0, si no es (puntos de potencia - 20) / 2.
*/

/* Implementar un objeto que modele a Chimuela, una dragona de la que nos interesa saber qué energía 
tiene en cada momento, medida en joules. En el metodo constructor simplificado que nos piden implementar, 
las únicas acciones que vamos a contemplar son: cuando Chimuela come una cantidad de comida especificada en 
gramos, en este caso adquiere 4 joules por cada gramo, y cuando Chimuela vuela una cantidad de kilómetros, 
en este caso gasta un joule por cada kilómetro, más 10 joules de costo fijo de despegue y aterrizaje. 
La energía de Chimuela nace en 0. El objeto que implementa este metodo constructor de Chimuela, 
debe entender los siguientes mensajes: 8.1 comer(gramos) 8.2 volar(kilometros) 8.3 energia() 
P.ej. si sobre un REPL(Read-Eval-Print-Loop)(Lectura-Evaluación-Impresión) recién lanzado se evalúa 
la siguiente secuencia Chimuela.comer(100) Chimuela.volar(10) Chimuela.volar(20) Chimuela.energia() 
el resultado debe ser 350.

Agregar al metodo constructor de Chimuela del ejercicio 8, la capacidad de entender estos mensajes: 
estaDebil(), Chimuela está débil si su energía es menos de 50. 
estaFeliz(), Chimuela está feliz si su energía está entre 500 y 1000. 
cuantoQuiereVolar(), que es el resultado de la siguiente cuenta. 
De base, quiere volar (energía / 5) kilómetros, p.ej., si tiene 120 de energía, quiere volar 24 kilómetros. 
Si la energía está entre 300 y 400, entonces hay que sumar 10 a este valor, y si es múltiplo de 20, otros 15. 
Entonces, si Chimuela tiene 340 de energía, quiere volar 68 + 10 + 15 = 93 kilómetros. Para probar esto, 
sobre un REPL recién lanzado darle de comer 85 a Chimuela, así la energía queda en */

class Enterprise {
    constructor() {
        this.potencia = 0;
        this.coraza = 0;
    }

    potencia(){
        return this.potencia;
    }

    coraza(){
        return this.coraza;
    }

    encontrarPilaAtomica(){
        if(this.potencia == 100){
            return alert("La potencia ya esta llena");
        }
        else if((this.potencia+25)>100){
            this.potencia = 100;
        }
        else{
            this.potencia = this.potencia + 25;
        }
    }

    encontrarEscudo(){
        if(this.coraza == 20){
            return alert("La coraza ya esta llena");
        }
        else if((this.coraza+10)>20){
            this.coraza = 20;
        }
        else{
            this.coraza = this.coraza + 10;
        }
    }

    recibirAtaque(puntos){
        if(puntos > this.coraza){
            this.potencia = this.potencia - (puntos - this.coraza);
            this.coraza = 0;

            if(this.potencia < 0){
                this.potencia = 0;
            }
        }
        else{
            this.coraza = this.coraza - puntos;
        }
    }

    fortalezaDefensiva(){
        return (this.coraza+this.potencia);
    }

    necesitaFortalecerse(){
        if(this.coraza == 0 && this.potencia < 20){
            return true;
        }
        return false;
    }

    fortalezaOfensiva(){
        if(this.potencia < 20){
            return 0;
        }
        return (this.potencia - 20)/2;
    } 
}

// instancia del objeto
var enterprise1 = new Enterprise(); 

// ya puedo llamar a los metodos en los objetos


// visualizar los resultados
