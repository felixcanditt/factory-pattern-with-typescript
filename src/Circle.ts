import { Shape } from './Shape';

export interface CircleInterface {
  x: number;
  y: number;
  r: number;
}

export class Circle extends Shape {
  private radius: number;
  private area: number;
  private circumference: number;

  constructor(circleSpecs: CircleInterface) {
    super(circleSpecs.x, circleSpecs.y);
    this.radius = circleSpecs.r;
    this.area = this.calculateArea();
    this.circumference = this.calculateCircumference();
  }

  private calculateArea(): number {
    return this.radius * this.radius * 3.14159;
  }

  private calculateCircumference(): number {
    return 2 * this.radius * 3.14159;
  }

  returnArea(): number {
    return this.area;
  }

  returnCircumference(): number {
    return this.circumference;
  }

  toString(): string {
    return `This circle has an area of ${this.area} and a circumference of ${this.circumference}.`;
  }
}
