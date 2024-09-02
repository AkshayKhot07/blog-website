import { CategorizedPosts } from "./categorizePostsByMonths";

export function getYearsAndMonths(data: CategorizedPosts) {
  const years: string[] = [];
  const months: string[] = [];

  for (const year in data) {
    if (Object.prototype.hasOwnProperty.call(data, year)) {
      years.push(year);
      for (const month in data[year]) {
        if (Object.prototype.hasOwnProperty.call(data[year], month)) {
          months.push(month);
        }
      }
    }
  }

  return {
    years: [...new Set(years)],
    months: [...new Set(months)],
  };
}
