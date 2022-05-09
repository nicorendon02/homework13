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

class Chimuela {
    constructor() {
    this.energia = 0;
    }

    comer(gramos){
        this.energia = 4*gramos;
    }

    volar(kilometros){
        if(this.energia < (kilometros+10)){
            return alert("No hay suficiente energia para el vuelo");
        }
        this.energia = (this.energia - kilometros)-10;
    }

    getEnergia(){
        return this.energia;
    }

    estaDebil(){
        if(this.energia < 50){
            return true;
        }
        return false;
    }

    estaFeliz(){
        if(this.energia >= 500 && this.energia <= 1000){
            return true;
        }
        return false;
    }

    cuantoQuiereVolar(){
        let quiereVolar = this.energia/5;
        
        if(this.energia >= 300 && this.energia <= 400){
            quiereVolar = quiereVolar + 10;
        }

        if(this.energia%20 == 0){
            quiereVolar = quiereVolar + 15;
        }
        return alert(`Chimuela quiere volar ${quiereVolar} kilometros`);
    }

    
}

// instancia del objeto
var chimuela1 = new Chimuela(); 

// ya puedo llamar a los metodos en los objetos


// visualizar los resultados
