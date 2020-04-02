"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fizetes {
    constructor(forras) {
        this._aurk = [];
        this._aurk = forras;
    }
    get arukSzama() {
        return this._aurk.length;
    }
    get kulonbozoArucikkek() {
        const arucikkek = [];
        for (const arucikk of this._aurk) {
            if (!arucikkek.includes(arucikk)) {
                arucikkek.push(arucikk);
            }
        }
        return arucikkek;
    }
    vanArucikk(arucikk) {
        for (const aru of this._aurk) {
            const aktsor = aru.trim();
            if (aktsor == arucikk) {
                return true;
            }
        }
        return false;
    }
    hanyszorArucikk(arucikk) {
        let darab = 0;
        for (const aru of this._aurk) {
            if (aru === arucikk) {
                darab++;
            }
        }
        return darab;
    }
}
exports.default = Fizetes;
//# sourceMappingURL=Fizetes.js.map