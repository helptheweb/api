import { scanner } from "@helptheweb/scanner";

export const getReport = async (url) => {

  let launchOptions = {
    headless: true,
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  }

  let report = await scanner(url, launchOptions);
  return report;
}

export const getReportDetail = {
  detail: {
    summary: 'Gets accessibility report',
    tags: ['Report']
  }
}