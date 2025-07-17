import { ShapeFactory } from './ShapeFactory';

function main() {
  const newCircle = ShapeFactory.createShape({
    typeString: 'circle',
    x: 1,
    y: 2,
    r: 3,
  });
  if (typeof newCircle != 'string') {
    console.log(
      newCircle.toString(),
      newCircle.origin(),
      'Area:',
      newCircle.returnArea(),
      'Circumference:',
      newCircle.returnCircumference()
    );
  } else {
    console.log(newCircle);
  }

  const newRectangle = ShapeFactory.createShape({
    typeString: 'rectangle',
    x: 1,
    y: 2,
    w: 3,
    h: 4,
  });
  if (typeof newRectangle != 'string') {
    console.log(
      newRectangle.toString(),
      newRectangle.origin(),
      'Area:',
      newRectangle.returnArea(),
      'Circumference:',
      newRectangle.returnCircumference()
    );
  }
}

main();
