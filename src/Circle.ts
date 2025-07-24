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
    this.area = this.calculateArea();
    this.circumference = this.calculateCircumference();
  }

  calculateArea(): number {
    return this.radius * this.radius * 3.14159;
  }

  calculateCircumference(): number {
    return 2 * this.radius * 3.14159;
  }

  returnArea(): number {
    return this.area;
  }

  returnCircumference(): number {
    return this.circumference;
  }
}
