export function isNull(variable: any, object: boolean = false): boolean {
  let check0: boolean = variable === undefined || variable === null;

  return object ? check0 || Object.keys(variable).length === 0 : check0;
}
