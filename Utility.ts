export class Utility {
  public static randomize(array: unknown[]) {
    array.forEach(
      (value, index) => {
        const swapIndex = Math.floor(Math.random() * array.length);
        const swapValue = array[swapIndex];
        array[swapIndex] = value;
        array[index] = swapValue; 
      }
    );
  }
  
  public static range(count: number) {
    return [...new Array(count).keys()];
  }

  public static resolvedPromise<T>(value: T): Promise<T> {
    return new Promise(resolve => resolve(value));
  }

  public static rejectedPromise<T>(value: T): Promise<T> {
    return new Promise((resolve, reject) => reject(value));
  }

  public static allTrue(values: boolean[]): boolean {
    return values.reduce(
      (previousValue, currentValue) => previousValue && currentValue
    );
  }

  public static async sleep(duration: number) {
    await new Promise(r => setTimeout(r, duration));
  }

  public static withDelay<T>(duration: number) {
    const delay = this.sleep(duration);
    return async (value: T) => {
      await delay;
      return value;
    };
  }

  public static MinutesToMilliseconds(minutes: number) {
    return 1000 * 60 * minutes;
  }

  public static SecondsToMilliseconds(seconds: number) {
    return 1000 * seconds;
  }
}
