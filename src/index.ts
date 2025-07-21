import { ShapeFactory } from './ShapeFactory';

function main() {
  const newCircle = ShapeFactory.createShape({
    typeString: 'circle',
    xOrigin: 1,
    yOrigin: 2,
    radius: 3,
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
    xOrigin: 1,
    yOrigin: 2,
    width: 3,
    height: 4,
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
