abstract class Dispositivo {
    public encender(): void {
        console.log('El dispositivo se ha encendido.');
    }

    public apagar(): void {
        console.log('El dispositivo se ha apagado.');
    }

    abstract reiniciar(): void;
}

class Smartphone extends Dispositivo {
    reiniciar(): void {
        console.log('El smartphone se está reiniciando...');
    }
}

const miSmartphone = new Smartphone();
miSmartphone.encender();
miSmartphone.reiniciar();
miSmartphone.apagar();
