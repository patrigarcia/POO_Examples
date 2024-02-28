abstract class Animal {
    abstract hacerSonido(): void;
}

class Perro extends Animal {
    hacerSonido(): void {
        console.log('Guau guau');
    }
}

class Gato extends Animal {
    hacerSonido(): void {
        console.log('Miau miau');
    }
}

function hacerSonar(animal: Animal): void {
    animal.hacerSonido();
}

const perro = new Perro();
const gato = new Gato();

hacerSonar(perro);
hacerSonar(gato);
