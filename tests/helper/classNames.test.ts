import { classNames } from '../../src/lib/helper';

test('checks if classes are being concatenated correctly', () => {
    expect(classNames("class_2", "class_1", "class_2")).toBe<string>("class_2 class_1 class_2");
});