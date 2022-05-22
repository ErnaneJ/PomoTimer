import { setItemToLocalStorage, validate_sound } from '../../src/lib/helper';

describe('validate_sound', () => {
  test('if it is validating correctly - without soundOn', () => {
    const callback = jest.fn();
    validate_sound(callback);
    expect(callback).toHaveBeenCalled();
  });

  test('if it is validating correctly - with soundOn = false', () => {
    setItemToLocalStorage('soundOn', 'false');
    const callback = jest.fn();
    validate_sound(callback);
    expect(callback).not.toHaveBeenCalled();
  });

  test('if it is validating correctly - with soundOn = true', () => {
    setItemToLocalStorage('soundOn', 'true');
    const callback = jest.fn();
    validate_sound(callback);
    expect(callback).toHaveBeenCalled();
  });
});