declare module "color-parse" {
    export default function parse(s: string): {
        space: string,
        values: [number, number, number],
        alpha: number,
    };
};