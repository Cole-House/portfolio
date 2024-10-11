import { links } from "./data";

// you usually want to have a file with types so you can easily import them in other files
export type SectionName = (typeof links)[number]['name'];