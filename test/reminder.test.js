const { delayedReminder } = require('../src/reminder');

jest.useFakeTimers();

describe('delayedReminder', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('should log message after delay', async () => {
    const message = 'This is your reminder!';
    const delay = 3000;

    const promise = delayedReminder(message, delay);

    jest.advanceTimersByTime(delay);

    await promise;

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(message);
  });
});