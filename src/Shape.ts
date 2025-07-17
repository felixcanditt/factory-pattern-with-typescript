abstract class Shape {
  protected xOrigin: number;
  protected yOrigin: number;

  constructor(xOrigin: number, yOrigin: number) {
    this.xOrigin = xOrigin;
    this.yOrigin = yOrigin;
  }

  abstract area(): number;
  abstract circumference(): number;
  abstract toString(): string;

  origin(): string {
    return `The position is: xOrigin: ${this.xOrigin}, yOrigin: ${this.yOrigin}`;
  }
}
