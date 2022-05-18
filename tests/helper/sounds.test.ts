import { sounds } from '../../src/lib/helper';
import { Audio } from '../utils/mocks';

test('check switch sound call', () => {
  sounds.switch();
  expect(Audio.play).toHaveBeenCalled();
});

test('check alarm sound call', () => {
  sounds.alarm();
  expect(Audio.play).toHaveBeenCalled();
});

test('check tab sound call', () => {
  sounds.tab();
  expect(Audio.play).toHaveBeenCalled();
});