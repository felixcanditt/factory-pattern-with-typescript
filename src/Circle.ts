import { Shape } from './Shape';

class Circle extends Shape {
  private radius: number;

  constructor(xOrigin: number, yOrigin: number, radius: number) {
    super(xOrigin, yOrigin);
    this.radius = radius;
  }

  calculateArea(): number {
    return this.radius * this.radius * 3.14159;
  }

  calculateCircumference(): number {
    return 2 * this.radius * 3.14159;
  }
}
