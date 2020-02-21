import { Category } from "./Category";

class Move {

    name: string;
    power: number;
    category: Category;
    priority: number;

    /*constructor(name: string, power: number,category: Category, priority: number)
    {
        this.name = name;
        this.power = power;
        this.category = category;
        this.priority = priority;
    }*/

    constructor(data){
      this.name = data.name;
      this.power = data.power;
      this.priority = data.priority;
      if (data.damage_class.name == "special") this.category = Category.Special;
      else if (data.damage_class.name == "status") this.category = Category.Status;
      else if (data.damage_class.name == "physical") this.category = Category.Physic;
    }
}


export { Move };
