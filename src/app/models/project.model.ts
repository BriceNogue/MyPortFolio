export class Project {
    id: number;
    name: string;
    image: string;
    language: string;
    framework?: string;
    description?: string;

    constructor (name: string,
                image: string,
                language: string,
                framework?: string,
                description?: string) {
        
        this.name = name;
        this.image = image;
        this.language = language;
        this.framework = framework;
        this.description = description;

    }

}