import { scanner } from "@helptheweb/scanner";

export const getReport = async (url) => {
  let report = await scanner(url);
  return report;
}

export const getReportDetail = {
  detail: {
    summary: 'Gets accessibility report',
    tags: ['Report']
  }
}