/* Implementar un objeto que modele un contador. Un contador se puede incrementar o decrementar, recordando el valor actual. 
Al resetear un contador, se pone en cero.
Además es posible indicar directamente cual es el valor actual. Este objeto debe entender los siguientes mensajes: 
6.1 reset() 
6.2 inc() 
6.3 dec() 
6.4 valorActual() 
6.5 valorActual(nuevoValor) 
P.ej. si se evalúa la siguiente secuencia 
contador.valorActual(10) contador.inc() contador.inc() contador.dec() contador.inc() 
contador.valorActual() el resultado debe ser 12. */

class Contador {
    constructor() {
    this.valor = 0;
    }

    reset(){
        this.valor = 0;
    }

    inc(){
        this.valor += 1;
    }

    dec(){
        if(this.valor == 0){
            return alert("El valor no puede disminuir mas");
        }
        this.valor -= 1;
    }

    getValorActual(){
        return this.valor;
    }

    setValorActual(nuevoValor){
        this.valor = nuevoValor;
    }
}

// instancia del objeto
var contador1 = new Contador(); 

// ya puedo llamar a los metodos en los objetos


// visualizar los resultados
