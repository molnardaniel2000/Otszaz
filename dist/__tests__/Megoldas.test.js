"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Megoldas_1 = tslib_1.__importDefault(require("../Megoldas"));
const fs_1 = tslib_1.__importDefault(require("fs"));
describe("Megoldás osztály unit tesztjei", () => {
    const megoldas = new Megoldas_1.default("penztar.txt");
    it("Megoldás osztály típusa", async () => {
        expect(megoldas).toBeInstanceOf(Megoldas_1.default);
    });
    it("Fizetések száma", async () => {
        expect(megoldas.fizetesekSzama).toBe(141);
    });
    it("Első vásárló áruinak száma", async () => {
        expect(megoldas.elsoVasarloAruinakSzama).toBe(1);
    });
    it("Először vásárolták", async () => {
        expect(megoldas.eloszorVasaroltak("kefe")).toBe(5);
    });
    it("Utoljára vásárolták", async () => {
        expect(megoldas.utoljaraVasaroltak("kefe")).toBe(139);
    });
    it("Hány vásárlás során vettek belőle", async () => {
        expect(megoldas.hanyszorVasarolatak("kefe")).toBe(32);
    });
    it("Fizetendő összeg", async () => {
        expect(megoldas.fizetendoOsszeg(2)).toBe(950);
        expect(megoldas.fizetendoOsszeg(0)).toBe(0);
        expect(megoldas.fizetendoOsszeg(-2)).toBe(0);
        expect(megoldas.fizetendoOsszeg(1)).toBe(500);
        expect(megoldas.fizetendoOsszeg(4)).toBe(1750);
    });
    it("Hány darab volt egy árúból egy bizonyos vásárlás sorány", async () => {
        expect(megoldas.darabEsAru(2).toString()).toBe([2, "colostok", 2, "HB ceruza", 1, "toll", 1, "szatyor", 1, "csavarkulcs", 1, "doboz"].toString());
    });
    const megoldas2 = new Megoldas_1.default("penztar2.txt");
    it("Állományba írás", async () => {
        fs_1.default.writeFileSync("osszeg2.txt", "1: 1850\n2: 1500\n3: 950\n");
        megoldas2.allomanybaIr("osszeg3.txt");
        expect(fs_1.default.readFileSync("osszeg3.txt").toString()).toBe(fs_1.default.readFileSync("osszeg2.txt").toString());
    });
});
//# sourceMappingURL=Megoldas.test.js.map