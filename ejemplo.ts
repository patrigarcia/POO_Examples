// Abstracción: 
abstract class VehiculoBase {
    protected marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    public mostrarMarca(): void {
        console.log(`Marca del vehículo: ${this.marca}`);
    }

    abstract describirVehiculo(): void;
}

// Herencia: 
class AutoExt extends VehiculoBase {
    private modelo: string;

    constructor(marca: string, modelo: string) {
        super(marca);
        this.modelo = modelo;
    }

    public describirVehiculo(): void {
        console.log(`Este es un auto ${this.marca} modelo ${this.modelo}.`);
    }
}

// Polimorfismo: 
class MotoExt extends VehiculoBase {
    private tipo: string;

    constructor(marca: string, tipo: string) {
        super(marca);
        this.tipo = tipo;
    }

    public describirVehiculo(): void {
        console.log(`Esta es una moto ${this.marca} de tipo ${this.tipo}.`);
    }
}

// Función que demuestra polimorfismo, aceptando cualquier objeto que sea un subtipo de VehiculoBase.
function mostrarDescripcionExt(vehiculo: VehiculoBase): void {
    vehiculo.describirVehiculo();
}

const miAutoExt = new AutoExt('Toyota', 'Corolla');
const miMotoExt = new MotoExt('Yamaha', 'Deportiva');

// Demostración de polimorfismo con nombres de variables e identificadores únicos.
mostrarDescripcionExt(miAutoExt);
mostrarDescripcionExt(miMotoExt);
