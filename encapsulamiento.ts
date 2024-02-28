class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso. Su nuevo saldo es: ${this.saldo}`);
        }
    }

    public retirar(monto: number): void {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro exitoso. Su nuevo saldo es: ${this.saldo}`);
        } else {
            console.log('Saldo insuficiente.');
        }
    }
}

const miCuenta = new CuentaBancaria(1000);
miCuenta.depositar(500);
miCuenta.retirar(200);
