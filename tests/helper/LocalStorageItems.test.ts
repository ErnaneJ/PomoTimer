import { setItemToLocalStorage, getItemToLocalStorage } from '../../src/lib/helper';

describe('LocalStorage', () => {
  test('checks if it is correctly adding items from local storage', () => {
    setItemToLocalStorage('teste', 'test-value');
    expect(window.localStorage.getItem('teste')).toEqual('test-value');
  });

  test('checks if it is capturing items correctly from local storage', () => {
    window.localStorage.setItem('teste', 'test-value');
    expect(getItemToLocalStorage('teste')).toEqual('test-value');
  });
});