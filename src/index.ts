import { ShapeFactory } from './ShapeFactory';

function main() {
  const newCircle = ShapeFactory.createShape('circle', 1, 2, 3);
  console.log(2, newCircle);
}

main();
