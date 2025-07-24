export interface ShapeInterface {
  typeString: 'circle' | 'rectangle' | 'square';
  xOrigin: number;
  yOrigin: number;
}

export abstract class Shape {
  private typeString: string;
  private xOrigin: number;
  private yOrigin: number;
  private area: number;
  private circumference: number;
  protected abstract calculateArea(): void;
  protected abstract calculateCircumference(): void;

  constructor(shapeSpecs: ShapeInterface) {
    this.typeString = shapeSpecs.typeString;
    this.xOrigin = shapeSpecs.xOrigin;
    this.yOrigin = shapeSpecs.yOrigin;
    this.area = 0;
    this.circumference = 0;
  }

  getArea(): number {
    return this.area;
  }

  setArea(newArea: number): void {
    this.area = newArea;
  }

  getCircumference(): number {
    return this.circumference;
  }

  setCircumference(newCircumference: number): void {
    this.circumference = newCircumference;
  }

  origin(): string {
    return `Its position is: xOrigin: ${this.xOrigin}, yOrigin: ${this.yOrigin}.`;
  }

  toString(): string {
    return `This ${this.typeString} has an area of ${this.area} and a circumference of ${this.circumference}.`;
  }
}
