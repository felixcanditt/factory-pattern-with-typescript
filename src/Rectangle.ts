import { Shape } from './Shape';

export interface RectangleInterface {
  typeString: 'rectangle';
  x: number;
  y: number;
  w: number;
  h: number;
}

export class Rectangle extends Shape {
  private width: number;
  private height: number;
  private area: number;
  private circumference: number;

  constructor(rectangleSpecs: RectangleInterface) {
    super(rectangleSpecs.x, rectangleSpecs.y);
    this.width = rectangleSpecs.w;
    this.height = rectangleSpecs.h;
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
