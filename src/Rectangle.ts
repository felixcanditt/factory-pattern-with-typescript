import { Shape, ShapeInterface } from './Shape';
import { SquareInterface } from './Square';

export interface RectangleSquareInterface extends ShapeInterface {
  width: number;
  height: number;
}

export interface RectangleInterface extends RectangleSquareInterface {
  typeString: 'rectangle';
}

export class Rectangle extends Shape {
  private width: number;
  private height: number;
  private area: number;
  private circumference: number;

  constructor(rectangleSpecs: RectangleInterface | SquareInterface) {
    super(rectangleSpecs);
    this.width = rectangleSpecs.width;
    this.height = rectangleSpecs.height;
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

  // get getPrivateArea() {
  //   return this.area;
  // }

  // get getPrivateCircumference() {
  //   return this.circumference;
  // }
}
