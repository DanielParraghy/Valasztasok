export default class Politikus {
    #valasztoKerulet: number;
    #szavazatokSzama: number;
    #vezetekNev: string;
    #keresztNev: string;
    #part: string;

    get teljesNev(): string{
        return `${this.#vezetekNev} ${this.#keresztNev}`;
    }
    // publikálás (csak olvasható)
    get szavazatokSzama(): number {
        return this.#szavazatokSzama;
    }

    get part(): string {
        return this.#part;
    }

    get part2(): string {
        if (this.#part == "-") return "Független";
        else return this.#part;
    }

    get partAlakit(): string {
        const nevMap: Map<string, string> = new Map<string, string>([
            ["GYEP", "Gyümölcsevők Pártja"],
            ["HEP", "Húsevők Pártja"],
            ["TISZ", "Tejivók szövetsége"],
            ["ZEP", "Zöldségevők Pártja"],
            ["-", "Független jelöltek"]
        ]);
        return nevMap.get(this.#part) as string;
    }

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this.#valasztoKerulet = parseInt(m[0]);
        this.#szavazatokSzama = parseInt(m[1]);
        this.#vezetekNev = m[2];
        this.#keresztNev = m[3];
        this.#part = m[4];
        }

}
