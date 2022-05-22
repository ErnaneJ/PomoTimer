import { Time } from '../../src/lib/types';
import { updateTimer, msgsType } from '../../src/lib/helper';

let msgs: msgsType, 
    dataTimer: Time,
    currentTab: number,
    audio_alarm: () => void,
    audio_tab: () => void,
    setCurrentTab: (tab: number) => void,
    setDataTimer: (updated_time: Time) => void

beforeEach(async () => {
  dataTimer = { min: 25, sec: 0, counting: false };
  currentTab = 0;
  audio_alarm = () => {};
  audio_tab = () => {};
  setCurrentTab = (number) => currentTab = number;
  setDataTimer = (updated_time) => dataTimer = updated_time;
  msgs = {
    "end-interval": 'message of test',
    "end-25-minute-journey": 'message of test',
    "notifies-end-journey": 'message of test',
    "notifies-end-25-minute-journey": 'message of test',
    "notifies-end-interval": 'message of test',
    "msg-notifies-end-interval": 'message of test',
  }
})

test('validate the current timer change', () => {
  [0,1].forEach(el=> updateTimer(msgs, dataTimer, currentTab, audio_alarm, audio_tab, setCurrentTab, setDataTimer));
  expect(dataTimer).toStrictEqual({ ...dataTimer, min: 24,  sec: 58 });
});

test('validate timer close and change tab', () => {
  // switch to tab 1
  dataTimer = {...dataTimer, min: 0, sec: 0}
  updateTimer(msgs, dataTimer, currentTab, audio_alarm, audio_tab, setCurrentTab, setDataTimer);

  expect(currentTab).toBe(1);
  expect(dataTimer).toStrictEqual({ ...dataTimer, min: 5,  sec: 0 });

  // return to tab 0
  dataTimer = {...dataTimer, min: 0, sec: 0}
  currentTab = 1;
  updateTimer(msgs, dataTimer, currentTab, audio_alarm, audio_tab, setCurrentTab, setDataTimer);

  expect(currentTab).toBe(0);
  expect(dataTimer).toStrictEqual({ ...dataTimer, min: 25,  sec: 0 });
});