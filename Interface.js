// Definisi "antarmuka" sebagai panduan (tidak di-assign)
const KendaraanInterface = {
    bergerak: function() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
};

// Kelas yang mengimplementasikan antarmuka secara manual
class Jet{
    bergerak() {
        console.log("Jet melesat di udara.");
    }
}

class SepedaFixie{
    bergerak() {
        console.log("Sepeda Fixie bergerak dengan pedal dan melesat dijalanan");
    }
}

// Penggunaan
const j = new Jet();
j.bergerak(); // Output: Pesawat terbang di udara.

const Fixie = new SepedaFixie();
Fixie.bergerak(); // Output: Sepeda bergerak dengan pedal.
