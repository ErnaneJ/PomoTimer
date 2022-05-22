import "@testing-library/jest-dom";
import { Audio, mockNotification, mockLocalStorage } from "./tests/utils/mocks";

global.Audio = jest.fn().mockImplementation(() => Audio); // Audio mock
mockNotification();
mockLocalStorage();