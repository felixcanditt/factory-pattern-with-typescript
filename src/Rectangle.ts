import { Shape } from './Shape';

export class Rectangle extends Shape {
  private width: number;
  private height: number;
  private area: number;
  private circumference: number;

  constructor(xOrigin: number, yOrigin: number, width: number, height: number) {
    super(xOrigin, yOrigin);
    this.width = width;
    this.height = height;
    this.area = this.calculateArea();
    this.circumference = this.calculateCircumference();
  }

  private calculateArea(): number {
    return this.width * this.height;
  }

  private calculateCircumference(): number {
    return 2 * (this.width + this.height);
  }

  returnArea(): number {
    return this.area;
  }

  returnCircumference(): number {
    return this.circumference;
  }

  toString(): string {
    return `This rectangle has an area of ${this.area} and a circumference of ${this.circumference}.`;
  }
}
