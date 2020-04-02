"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Fizetes_1 = tslib_1.__importDefault(require("../Fizetes"));
describe("Fizetés osztály unit tesztjei", () => {
    const fizetes = new Fizetes_1.default(["kefe", "kefe", "HB ceruza", "toll", "kefe"]);
    it("Fizetes osztály típusa", async () => {
        expect(fizetes).toBeInstanceOf(Fizetes_1.default);
    });
    it("Áruk száma", async () => {
        expect(fizetes.arukSzama).toBe(5);
    });
    it("Különböző árucikkek", async () => {
        expect(fizetes.kulonbozoArucikkek.toString()).toBe(["kefe", "HB ceruza", "toll"].toString());
    });
    it("Van adott árucikk egy bizonyos vásárlásban", async () => {
        expect(fizetes.vanArucikk("kefe")).toBe(true);
    });
    it("Hányszor vettek egy adott árucikket egy vásárlás során", async () => {
        expect(fizetes.hanyszorArucikk("kefe")).toBe(3);
    });
});
//# sourceMappingURL=Fizetes.test.js.map