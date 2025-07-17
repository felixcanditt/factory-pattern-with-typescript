import { Shape } from './Shape';

class Circle extends Shape {
  private radius: number;
  private area: number;
  private circumference: number;

  constructor(xOrigin: number, yOrigin: number, radius: number) {
    super(xOrigin, yOrigin);
    this.radius = radius;
    this.area = this.radius * this.radius * 3.14159;
    this.circumference = 2 * this.radius * 3.14159;
  }

  returnArea(): number {
    return this.area;
  }

  returnCircumference(): number {
    return this.circumference;
  }

  toString(): string {
    return `The circle has an area of ${this.area} and a circumference of ${this.circumference}.`;
  }
}
