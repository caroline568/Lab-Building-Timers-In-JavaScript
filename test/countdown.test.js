const { countdownTimer } = require('../src/countdown');

jest.useFakeTimers();

describe('countdownTimer', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should log remaining time at intervals and stop at 0', () => {
    const startTime = 5;
    const interval = 1000;

    const timerId = countdownTimer(startTime, interval);

    jest.advanceTimersByTime(startTime * interval);

    expect(console.log).toHaveBeenCalledTimes(startTime);

    for (let i = startTime; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(i);
    }

    clearInterval(timerId);
  });
});
