import { Shape, ShapeInterface } from './Shape';

export interface RectangleSquareInterface extends ShapeInterface {
  typeString: 'rectangle' | 'square';
  width: number;
  height: number;
}

export class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(rectangleSpecs: RectangleSquareInterface) {
    super(rectangleSpecs);
    this.width = rectangleSpecs.width;
    this.height = rectangleSpecs.height;
    this.area = this.calculateArea();
    this.circumference = this.calculateCircumference();
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculateCircumference(): number {
    return 2 * (this.width + this.height);
  }
}
