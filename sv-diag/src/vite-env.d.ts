/// <reference types="svelte" />
/// <reference types="vite/client" />


declare module "*/names.csv" {
    const value: import("./mytypes").Names;
    export default value;
}

declare module "*/links.csv" {
    const value: LinkData[];
    export default value;
}

declare module "*/order.csv" {
    const value: OrderData[];
    export default value;
}