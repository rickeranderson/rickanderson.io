import { KeyValue } from "./key-value.model";

export interface Project {
    title: string;
    description: string;
    resources: KeyValue[];
    source: string;
    demo: string;
    languages: string[];
}
