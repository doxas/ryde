
export function zeroPadding(n: number, d: number): string {
  return (new Array(d).join('0') + n).substr(-d);
}
