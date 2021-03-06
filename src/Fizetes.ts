import { stringify } from "querystring";

export default class Fizetes {
    private _aurk: string[] = [];

    public get arukSzama(): number {
        if (this._aurk) {
            return this._aurk.length;
        } else {
            return -1;
        }
    }
    public get kulonbozoArucikkek(): string[] {
        const arucikkek: string[] = [];
        for (const arucikk of this._aurk) {
            if (!arucikkek.includes(arucikk)) {
                arucikkek.push(arucikk);
            }
        }
        if (arucikkek) {
            return arucikkek;
        } else {
            return [];
        }
    }
    constructor(forras: string[]) {
        this._aurk = forras;
    }
    public vanArucikk(arucikk: string): boolean {
        for (const aru of this._aurk) {
            const aktsor = aru.trim();
            if (aktsor == arucikk) {
                return true;
            }
        }
        return false;
    }
    public hanyszorArucikk(arucikk: string): number {
        let darab = 0;
        for (const aru of this._aurk) {
            if (aru === arucikk) {
                darab++;
            }
        }
        return darab;
    }
}
