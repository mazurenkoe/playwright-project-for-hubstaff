export class Generator {
  static generateProjectName(part: string = 'NewProject'): string {
    return `${part}-${new Date().getTime()}${process.pid}`;
  }

  static generateEmail(part: string = ''): string {
    return `autotest+hubstaff+${part}${new Date().getTime()}${process.pid}@gmail.com`;
  }
}
