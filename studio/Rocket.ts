import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket implements Payload {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];
  massKg: number;
  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {
    let sum: number = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].massKg;
    }
    return sum;
  }
  currentMass(): number {
    let sumCurrentMass =
      this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    return sumCurrentMass;
  }

  canAdd(item: Payload): boolean {
    return this.currentMass() + item.massKg <= this.totalCapacityKg;
  }
  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }
  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
