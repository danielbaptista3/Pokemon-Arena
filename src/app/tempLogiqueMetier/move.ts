class Move {

    name: string;
    power: number;
    category: Category;
    priority: number;

    constructor(name: string, power: number,category: Category, priority: number)
    {
        this.name = name;
        this.power = power;
        this.category = category;
        this.priority = priority;
    }
}


export { Move };