export class Language {
    id: number;
    name: string;
    image: string;
    level: number;

    constructor(name: string, image: string, level: number){
        this.name = name;
        this.image = image;
        this.level = 0.0;
    }
}