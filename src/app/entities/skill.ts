export class Skill {
    id: string;
    name: string;
    profileId: string;
    order: number;
    type: string;
    tools: Tool[];
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
        this.tools = new Array<Tool>();
    }
    addRangeTools(tools: Tool[]) {
        this.tools = tools;
    }
}

export class Tool {
    id: string;
    name: string;
    progressbar: Progressbar;
    constructor(name: string, progressbar: Progressbar) {
        this.name = name;
        this.progressbar = progressbar;
    }
}

export class Progressbar {
    id: string;
    theme: string;
    role: string;
    style: string;
    valuenow: number;
    valuemin: number;
    valuemax: number;
    constructor(theme: string, role: string, style: string, valuenow: number, valuemin: number, valuemax: number) {
        this.theme = theme;
        this.role = role;
        this.style = style;
        this.valuenow = valuenow;
        this.valuemin = valuemin;
        this.valuemax = valuemax;
    }
}
