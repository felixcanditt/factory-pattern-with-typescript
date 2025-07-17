import { Shape } from './Shape';

export class Circle extends Shape {
  private radius: number;
  private area: number;
  private circumference: number;

  constructor(xOrigin: number, yOrigin: number, radius: number) {
    super(xOrigin, yOrigin);
    this.radius = radius;
    this.area = this.calculateArea(radius);
    this.circumference = this.calculateCircumference(radius);
  }

  private calculateArea(radius: number): number {
    return radius * radius * 3.14159;
  }

  private calculateCircumference(radius: number): number {
    return 2 * this.radius * 3.14159;
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
