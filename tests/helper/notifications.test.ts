import { notifications } from '../../src/lib/helper';

test('Request permission if Notification object exists', () => {
  notifications.requestPermission();
  expect(global.Notification.requestPermission).toHaveBeenCalled();
});

test('Send notification if you have permission', () => {
  notifications.sendNotification("title", "message", 0); 
  expect(global.Notification.requestPermission).toHaveBeenCalled();
});