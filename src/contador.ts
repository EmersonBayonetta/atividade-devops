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