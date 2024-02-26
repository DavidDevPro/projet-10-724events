import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("returns 'janvier' for 2022-01-01 as date", () => {
            const date = new Date("2022-01-01T00:00:00"); // Définir le temps à 00:00:00 pour éviter les variations dues au décalage horaire
            expect(getMonth(date)).toBe("janvier");
        });

        it("returns 'juillet' for 2022-07-08 as date", () => {
            const date = new Date("2022-07-08T00:00:00"); // Définir le temps à 00:00:00 pour éviter les variations dues au décalage horaire
            expect(getMonth(date)).toBe("juillet");
        });
    });
});


