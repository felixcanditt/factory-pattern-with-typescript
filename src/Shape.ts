export interface ShapeInterface {
  typeString: 'circle' | 'rectangle' | 'square';
  xOrigin: number;
  yOrigin: number;
}

export abstract class Shape {
  private typeString: string;
  private xOrigin: number;
  private yOrigin: number;

  constructor(shapeSpecs: ShapeInterface) {
    this.typeString = shapeSpecs.typeString;
    this.xOrigin = shapeSpecs.xOrigin;
    this.yOrigin = shapeSpecs.yOrigin;
  }

  abstract returnArea(): number;
  abstract returnCircumference(): number;

  origin(): string {
    return `Its position is: xOrigin: ${this.xOrigin}, yOrigin: ${this.yOrigin}.`;
  }

  toString(area: number, circumference: number): string {
    return `This ${this.typeString} has an area of ${area} and a circumference of ${circumference}.`;
  }
}
