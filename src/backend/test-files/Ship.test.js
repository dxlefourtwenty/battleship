import Ship from '../Ship.js';

test('Ship instantiation test 1', () => {
  const carrier = new Ship('aircraft-carrier');

  expect(carrier.getLength()).toBe(5);
  expect(carrier.getType()).toBe('aircraft-carrier');
});

test('Ship instantiation test 2', () => {
  const destroyer = new Ship('destroyer');

  expect(destroyer.getLength()).toBe(2);
  expect(destroyer.getType()).toBe('destroyer');
});

test('Ship damage test 1', () => {
  const cruiser = new Ship('cruiser');
  for (let i = 0; i < 3; i++) cruiser.hit();

  expect(cruiser.getSunk()).toBe(true);
});

test('Ship damage test 2', () => {
  const destroyer = new Ship('destroyer');
  destroyer.hit();

  expect(destroyer.getSunk()).toBe(false);
});

test('Ship string rep test', () => {
  const destroyer = new Ship('destroyer');
  expect(destroyer.getStringRep()).toBe('D');
});

test('Ship toggle placement test', () => {
  const cruiser = new Ship('cruiser');
  cruiser.togglePlacement();
  expect(cruiser.getVertical()).toBe(true);
})

