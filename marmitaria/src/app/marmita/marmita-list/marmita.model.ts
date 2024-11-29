// essa classe define os parametros para instanciar no banco de dados, criamos o construtor tal qual em java
export class Marmita{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}