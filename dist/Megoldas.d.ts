export default class Megoldas {
    private _fizetesek;
    get fizetesekSzama(): number;
    get elsoVasarloAruinakSzama(): number;
    constructor(forras: string);
    eloszorVasaroltak(arucikk: string): number | string;
    utoljaraVasaroltak(arucikk: string): number | string;
    hanyszorVasarolatak(arucikk: string): number | string;
    fizetendoOsszeg(darab: number): number;
    darabEsAru(sorszam: number): (number | string)[];
    allomanybaIr(allomanyNeve: string): void;
}
