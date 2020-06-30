/**
 * Creates a `react-hook-form` Controller `onChange` handler which is compatible with a typical component's input `onChange` handler.
 *
 * This function is used for when you have a component `onChange` handler which:
 * - expects more than one argument, or...
 * - does not follow the Controller array of arguments pattern: `(args: any[]) => any`, or...
 * - both of the above.
 *
 * ----
 * **Example input handler pattern 1**
 *
 * ```
 * (event: React.ChangeEvent<HTMLInputElement>, value: number) => number;
 * ```
 *
 * ----
 * **Example input handler pattern 2**
 *
 * ```
 * (value: string, isValid: boolean, formatter: (value: string) => string) => string;
 * ```
 *
 * ----
 * @template Args The expected argument pattern.
 * @template V The expected value returned.
 * @param {(...args: Args) => V} handler Expected `onChange` handler pattern of the component.
 * @returns {EventFunction} The Controller `onChange` handler, which expects a value returned from the handler.
 */
export const spreadArgs = <
  Args extends any[] = any[],
  V extends any = any
>(
  handler: (...args: Args) => V
) => {
  // Spread the arguments over the handler.
  return (args: Args) => handler(...args);
};
