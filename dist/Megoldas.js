"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Fizetes_1 = tslib_1.__importDefault(require("./Fizetes"));
const fs_1 = tslib_1.__importDefault(require("fs"));
class Megoldas {
    constructor(forras) {
        this._fizetesek = [];
        let seged = [];
        fs_1.default.readFileSync(forras)
            .toString()
            .split("\r\n")
            .forEach(l => {
            const aktsor = l.trim();
            if (aktsor === "F") {
                this._fizetesek.push(new Fizetes_1.default(seged));
                seged = [];
            }
            else {
                seged.push(l);
            }
        });
    }
    get fizetesekSzama() {
        return this._fizetesek.length;
    }
    get elsoVasarloAruinakSzama() {
        return this._fizetesek[0].arukSzama;
    }
    eloszorVasaroltak(arucikk) {
        for (let i = 0; i < this._fizetesek.length; i++) {
            if (this._fizetesek[i].vanArucikk(arucikk)) {
                return i + 1;
            }
        }
        return "Nem vettek ilyen árucikket!";
    }
    utoljaraVasaroltak(arucikk) {
        let sorszam = -1;
        for (let i = 0; i < this._fizetesek.length; i++) {
            if (this._fizetesek[i].vanArucikk(arucikk)) {
                sorszam = i + 1;
            }
        }
        if (sorszam === -1) {
            return "Nem vettek ilyen árucikket!";
        }
        else {
            return sorszam;
        }
    }
    hanyszorVasarolatak(arucikk) {
        let darab = 0;
        for (const fizetes of this._fizetesek) {
            if (fizetes.vanArucikk(arucikk)) {
                darab++;
            }
        }
        if (darab === 0) {
            return "Nem vettek ilyen árucikket!";
        }
        return darab;
    }
    fizetendoOsszeg(darab) {
        if (darab <= 0) {
            return 0;
        }
        else if (darab === 1) {
            return 500;
        }
        else if (darab === 2) {
            return 950;
        }
        else {
            return 950 + (darab - 2) * 400;
        }
    }
    darabEsAru(sorszam) {
        const darabEsAru = [];
        for (const arucikk of this._fizetesek[sorszam - 1].kulonbozoArucikkek) {
            darabEsAru.push(this._fizetesek[sorszam - 1].hanyszorArucikk(arucikk));
            darabEsAru.push(arucikk);
        }
        return darabEsAru;
    }
    allomanybaIr(allomanyNeve) {
        let szoveg = "";
        for (let i = 0; i < this._fizetesek.length; i++) {
            let ar = 0;
            for (const arucikk of this._fizetesek[i].kulonbozoArucikkek) {
                ar += this.fizetendoOsszeg(this._fizetesek[i].hanyszorArucikk(arucikk));
            }
            szoveg += `${i + 1}: ${ar}\n`;
        }
        fs_1.default.writeFileSync(allomanyNeve, szoveg);
    }
}
exports.default = Megoldas;
//# sourceMappingURL=Megoldas.js.map