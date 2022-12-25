import { customAlphabet } from "nanoid";


export function genetateNanoIdWithoutDash(numberOfChar?: number) {
    if (numberOfChar === undefined) {
      numberOfChar = 11;
    }
    const alphabet =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
    const nanoid = customAlphabet(alphabet, numberOfChar);
    return nanoid();
  }