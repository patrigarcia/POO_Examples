class Vehiculo {
    protected marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    public mostrarMarca(): void {
        console.log(`La marca del vehículo es: ${this.marca}`);
    }
}

class Auto extends Vehiculo {
    private modelo: string;

    constructor(marca: string, modelo: string) {
        super(marca);
        this.modelo = modelo;
    }

    public mostrarModelo(): void {
        console.log(`El modelo del auto es: ${this.modelo}`);
    }
}

const miAuto = new Auto('Toyota', 'Corolla');
miAuto.mostrarMarca();
miAuto.mostrarModelo();
