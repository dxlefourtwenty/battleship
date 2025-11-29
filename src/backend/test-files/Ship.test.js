import Ship from '../Ship.js';

test('Ship instantiation test 1', () => {
  const carrier = new Ship('carrier');

  expect(carrier.getLength()).toBe(5);
  expect(carrier.getType()).toBe('carrier');
});

test('Ship instantiation test 2', () => {
  const destroyer = new Ship('destroyer');

  expect(destroyer.getLength()).toBe(4);
  expect(destroyer.getType()).toBe('destroyer');
});

test('Ship damage test 1', () => {
  const watchboat = new Ship('watchboat');
  for (let i = 0; i < 3; i++) watchboat.hit();

  expect(watchboat.getSunk()).toBe(true);
});

test('Ship damage test 2', () => {
  const destroyer = new Ship('destroyer');
  for (let i = 0; i < 3; i++) destroyer.hit();

  expect(destroyer.getSunk()).toBe(false);
});

test('Ship string rep test', () => {
  const destroyer = new Ship('destroyer');
  expect(destroyer.getStringRep()).toBe('D');
});

test('Ship toggle placement test', () => {
  const watchboat = new Ship('watchboat');
  watchboat.togglePlacement();
  expect(watchboat.getVertical()).toBe(true);
})

