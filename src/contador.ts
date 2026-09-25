export class contador {
    private value: number = 0;
     incrementar() {
        this.value += 2;
    }
     decrementar(){
        this.value -= 1;
    }
     resetar() {
        this.value = 0;
  } mostrar(){
        console.log(this.value)
    }
}

const newContador = new contador();

newContador.mostrar()

newContador.incrementar()
newContador.mostrar()
newContador.decrementar()
newContador.mostrar()
newContador.resetar()
newContador.mostrar()