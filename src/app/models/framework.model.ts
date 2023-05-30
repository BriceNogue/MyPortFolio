export class Framework {
    id: number;
    name: string;
    image: string;
    description: string;
    level: number;

    constructor (name: string, image: string, description: string, level: number) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.level = level;
    }
}