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

export async function runAPI(...params: any): Promise<any> {
  let package_meta_data = await import('../package.json');
  let api_version: number = parseInt(
    params[0][0].headers['x-dbhub-api-v'] ??
      package_meta_data.org_dbhub.api_version
  );
  let obj = await import(`./v${api_version}/app`);
  let api = obj.default;

  return await api(params[0]);
}
