import { timerIsChanged } from '../../src/lib/helper';
import { Time } from '../../src/lib/types';

let startTimer:Time, longBreakTimer:Time, shortBreakTimer:Time, currentTab:number;

beforeEach(async () => {
  startTimer = { min: 25, sec: 0, counting: false };
  longBreakTimer = { min: 15, sec: 0, counting: false };
  shortBreakTimer = { min: 5, sec: 0, counting: false };
})

test('validates that the timer has not been changed', () => {
  currentTab = 0;
  expect(timerIsChanged(startTimer, currentTab)).toBe(false);
  
  currentTab = 1;
  expect(timerIsChanged(shortBreakTimer, currentTab)).toBe(false);
  
  currentTab = 2;
  expect(timerIsChanged(longBreakTimer, currentTab)).toBe(false);
});

test('validate that the timer has been changed', () => {
  currentTab = 0;
  startTimer.min = 12;
  expect(timerIsChanged(startTimer, currentTab)).toBe(true);
  
  currentTab = 1;
  shortBreakTimer.sec = 54;
  expect(timerIsChanged(shortBreakTimer, currentTab)).toBe(true);
  
  currentTab = 2;
  longBreakTimer.min = 54;
  longBreakTimer.sec = 2;
  expect(timerIsChanged(longBreakTimer, currentTab)).toBe(true);
});