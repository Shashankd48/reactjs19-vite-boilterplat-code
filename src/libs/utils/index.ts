/**
 * Mock function that simulates an asynchronous operation.
 * @param response - The data to return after the delay.
 * @param delay - The time to delay in milliseconds.
 * @returns A Promise that resolves with the provided response.
 */
export const mockAsyncFunction = <T>(
   response: T,
   delay: number
): Promise<T> => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(response);
      }, delay);
   });
};
