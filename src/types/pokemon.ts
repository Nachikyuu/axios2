export interface Pokemon {
    id: number;
    name: string;
    types: Array<{
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }>;
    sprites: {
        front_default: string;
    };
}