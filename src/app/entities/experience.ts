export class Experience {
    id: string;
    startDate: Date;
    profileId: string;
    position: string;
    company: Company;
    endDate: Date;
    present: boolean;
    description: string;
    order: number;
    experienceSection: ExperienceSection[];
    constructor(startDate: Date, position: string, company: Company, endDate: Date, present: boolean, description: string) {
        this.startDate = startDate;
        this.position = position;
        this.company = company;
        this.endDate = endDate;
        this.present = present;
        this.description = description;
        this.experienceSection = new Array<ExperienceSection>();
    }

    addExperienceSection(experienceSection: ExperienceSection) {
        this.experienceSection.push(experienceSection);
    }

    addRangeExperienceSection(experienceSectionArray: ExperienceSection[]) {
        experienceSectionArray.forEach(experienceSection => {
            const newExperienceSection = new ExperienceSection(
                experienceSection.name,
                experienceSection.type
            );
            newExperienceSection.addRangeItems(experienceSection.items);
            this.addExperienceSection(newExperienceSection);
        });
    }
}

export class ExperienceSection {
    id: string;
    experienceId: string;
    name: string;
    type: string;
    items: Item[];
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
        this.items = new Array<Item>();
    }
    addRangeItems(items: Item[]) {
        items.forEach(item => {
            this.items.push(item);
        });
    }

    isList() {
        return this.type === 'List';
    }
    isTag() {
        return this.type === 'Tag';
    }
}

export class Item {
    id: string;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export class Company {
    id: string;
    name: string;
    description: string;
    website: string;
    constructor(name: string, website: string) {
        this.name = name;
        this.website = website;
    }
}
