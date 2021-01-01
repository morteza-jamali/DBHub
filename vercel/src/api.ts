export function isNull(variable: any, object: boolean = false): boolean {
  let check0: boolean = variable === undefined || variable === null;

  if (typeof variable === 'string') {
    check0 = check0 || variable.trim().length === 0;
  }

  return object ? check0 || Object.keys(variable).length === 0 : check0;
}

export function getDatabasePath(
  username: string,
  repository: string,
  database: string
): string {
  return `https://github.com/${username}/${repository}/raw/master/${database}.db`;
}
