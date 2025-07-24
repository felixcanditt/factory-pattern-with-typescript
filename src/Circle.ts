import { Shape, ShapeInterface } from './Shape';

export interface CircleInterface extends ShapeInterface {
  typeString: 'circle';
  radius: number;
}

export class Circle extends Shape {
  private radius: number;

  constructor(circleSpecs: CircleInterface) {
    super(circleSpecs);
    this.radius = circleSpecs.radius;
    this.calculateArea();
    this.calculateCircumference();
  }

  calculateArea(): void {
    this.setArea(this.radius * this.radius * 3.14159);
  }

  calculateCircumference(): void {
    this.setCircumference(2 * this.radius * 3.14159);
  }
}
