import { getInitialTimerByTagType } from '../../src/lib/helper';

test('correctly captures the default values ​​for the start tag (0)', () => {
  const startTag = getInitialTimerByTagType(0);

  expect(Object.keys(startTag)).toStrictEqual<string[]>([ "min", "sec", "counting" ]);

  expect(startTag.min).toBe<number>(25);
  expect(startTag.sec).toBe<number>(0);
  expect(startTag.counting).toBe<boolean>(false);
});

test('correctly captures the default values ​​for the Short break tag (1)', () => {
  const shortBreakTag = getInitialTimerByTagType(1);

  expect(Object.keys(shortBreakTag)).toStrictEqual<string[]>([ "min", "sec", "counting" ]);
  
  expect(shortBreakTag.min).toBe<number>(5);
  expect(shortBreakTag.sec).toBe<number>(0);
  expect(shortBreakTag.counting).toBe<boolean>(false);
});

test('correctly captures the default values ​​for the Long break tag(2)', () => {
  const longBreakTag = getInitialTimerByTagType(2);

  expect(Object.keys(longBreakTag)).toStrictEqual<string[]>([ "min", "sec", "counting" ]);
  
  expect(longBreakTag.min).toBe<number>(15);
  expect(longBreakTag.sec).toBe<number>(0);
  expect(longBreakTag.counting).toBe<boolean>(false);
});