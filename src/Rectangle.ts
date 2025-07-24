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
    this.calculateArea();
    this.calculateCircumference();
  }

  calculateArea(): void {
    this.setArea(this.width * this.height);
  }

  calculateCircumference(): void {
    this.setCircumference(this.width + this.height);
  }
}
