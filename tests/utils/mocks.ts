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