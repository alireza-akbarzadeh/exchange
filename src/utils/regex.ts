export const password =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!\-\+\~_?&*^])(?=\S+$).{8,50}/;
export const validatorClass = {
  speceficCharacter: (str: string) => /^(?=.*[@#$%!\-_?&*^])(?=\S+$)/.test(str),
  upperCase: (str: string) => /^(?=.*[A-Z])(?=\S+$)/.test(str),
  lowerCase: (str: string) => /^(?=.*[a-z])(?=\S+$)/.test(str),
  number: (str: string) => /^(?=.*[0-9])(?=\S+$)/.test(str),
  length: (str: string) => /^.{8,}/.test(str),
};
// just integer part of number
// export const toLocalStringRegex = /\B(?=(\d{3})+(\.(\d){0,2}))/g;

//It'WazirX divide with decimal number
export const toLocalStringRegex = /\B(?=(\d{3})+(\d){0,3})/g;

/**
 *
 * @param {number|string} n -- The number you need to adjust it.
 * @param decimalscount --  Count number after decimal to display.
 * @returns {string}
 * ```typescript
 * adjustNumber(0.0005000,8) --> 0.0005
 *
 * ```
 */
export const adjustNumber = (n: string | number, decimalscount?: number) =>
  n &&
  parseFloat(n.toString())
    .toFixed(
      decimalscount !== null && decimalscount !== undefined ? decimalscount : 8
    )
    .replace(/\.0+$/, "");

/**
 * adjust value for IRT coins
 * @param baseCurrency
 * @param value
 * @returns
 */
export const adjustPersianValue = (
  baseCurrency: string,
  value: number,
  fixedLength?: number
) =>
  baseCurrency === "IRT" || baseCurrency === "تومان"
    ? adjustNumber(value, 0)
    : adjustNumber(value, fixedLength || 8);

export const addCommas = (nStr) => {
  nStr += "";
  const x = nStr.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? "." + x[1] : "";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
};
export const splitFourPartRegex = /.{1,4}/g;
