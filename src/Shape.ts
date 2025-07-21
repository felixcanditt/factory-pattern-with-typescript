export abstract class Shape {
  private xOrigin: number;
  private yOrigin: number;

  constructor(xOrigin: number, yOrigin: number) {
    this.xOrigin = xOrigin;
    this.yOrigin = yOrigin;
  }

  abstract returnArea(): number;
  abstract returnCircumference(): number;
  abstract toString(): string;

  origin(): string {
    return `Its position is: xOrigin: ${this.xOrigin}, yOrigin: ${this.yOrigin}.`;
  }
}
