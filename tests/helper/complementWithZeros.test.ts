import { complementWithZeros } from '../../src/lib/helper';

test('add leading zeros to numbers from 0 to 9', () => {
  Array.from({length: 9}, (_, i) => i + 1).forEach((number):void => {
    expect(complementWithZeros(number)).toBe<string>(`0${number}`);
  });
});

test('Does not change numbers above 9', () => {
  [15, 59, 48, 23, 12].forEach((number):void => {
    expect(complementWithZeros(number)).toBe<string>(`${number}`);
  });
});