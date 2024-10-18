// Kelas abstrak tidak dapat diinstansiasi secara langsung
class Transportasi {
    constructor(jenis) {
        if (this.constructor === Transportasi) {
            throw new Error("Kelas Transportasi adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Bajaj extends Transportasi {
    constructor() {
        super('Bajaj');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda didaratan.`);
    }
}

class Jetski extends Transportasi {
    constructor() {
        super('Jetski');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di atas air.`);
    }
}

// Penggunaan
const bajaj = new Bajaj();
bajaj.bergerak(); // Output: Mobil bergerak dengan roda.

const jetski = new Jetski();
jetski.bergerak(); // Output: Kapal bergerak di atas air.
