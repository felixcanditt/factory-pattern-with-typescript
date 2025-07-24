import { Shape, ShapeInterface } from './Shape';

export interface RectangleSquareInterface extends ShapeInterface {
  typeString: 'rectangle' | 'square';
  width: number;
  height: number;
}

export class Rectangle extends Shape {
  private width: number;
  private height: number;
  private area: number;
  private circumference: number;

  constructor(rectangleSpecs: RectangleSquareInterface) {
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
