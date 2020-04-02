export default class Fizetes {
    private _aurk;
    get arukSzama(): number;
    get kulonbozoArucikkek(): string[];
    constructor(forras: string[]);
    vanArucikk(arucikk: string): boolean;
    hanyszorArucikk(arucikk: string): number;
}
