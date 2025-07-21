export abstract class Shape {
  private xOrigin: number;
  private yOrigin: number;
  private typeString: string;

  constructor(xOrigin: number, yOrigin: number, typeString: string) {
    this.xOrigin = xOrigin;
    this.yOrigin = yOrigin;
    this.typeString = typeString;
  }

  abstract returnArea(): number;
  abstract returnCircumference(): number;
  abstract toString(): string;

  origin(): string {
    return `Its position is: xOrigin: ${this.xOrigin}, yOrigin: ${this.yOrigin}.`;
  }

  toAnotherString(area: number, circumference: number): string {
    return `This ${this.typeString} has an area of ${area} and a circumference of ${circumference}.`;
  }
}
