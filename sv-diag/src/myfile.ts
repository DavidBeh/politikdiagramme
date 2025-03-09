import type { LinkData, OrderData, NameData} from "./mytypes";
import names from "./assets/names.csv";


const names2: OrderData[] = names;

// Example usage of LinkData and OrderData
const link: LinkData = { source: "fdp", target: "spd", value: 120 };
const order: OrderData = { short: "fdp" };
