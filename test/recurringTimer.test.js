const { recurringTimer, stopRecurringTimer } = require('../src/recurringTimer');

jest.useFakeTimers();

describe('recurringTimer', () => {
  test('logs message multiple times', () => {
    console.log = jest.fn();

    const message = 'Recurring message';
    const interval = 2000;

    const timerId = recurringTimer(message, interval);

    jest.advanceTimersByTime(6000);

    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith(message);

    stopRecurringTimer(timerId);
  });

  test('stops when cleared', () => {
    console.log = jest.fn();

    const message = 'Stop this message';
    const interval = 1000;

    const timerId = recurringTimer(message, interval);

    jest.advanceTimersByTime(3000);
    stopRecurringTimer(timerId);
    jest.advanceTimersByTime(2000);

    expect(console.log).toHaveBeenCalledTimes(3);
  });
});