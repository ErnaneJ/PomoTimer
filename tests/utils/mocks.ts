export const Audio = {
  play: jest.fn(),
}

export const mockNotification = () => {
  Object.defineProperty(global, 'Notification', {
    value: jest.fn(),
  });
  
  const staticMembers = {
    requestPermission: jest.fn(),
    permission: 'granted',
  };
  
  Object.assign(global.Notification, staticMembers);
}

export const mockLocalStorage = () => {
  let store = {};

  const mock = {
    getItem: (key) => {
      return store[key];
    },
    setItem: (key, value) => {
      store[key] = value.toString();
    }
  };

  Object.defineProperty(window, 'localStorage', {
    value: mock
  });
};