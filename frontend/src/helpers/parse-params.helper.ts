/**
 * Parse params object into a query string for fetch.
 * - Ignores undefined/null
 * - Arrays are repeated as multiple keys (ids=btc&ids=eth)
 * - Returns '' when no params
 */
export const parseParams = (params?: Record<string, any>): string => {
  if (!params) return '';

  const parts: string[] = [];

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (v === undefined || v === null) return;
        parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`);
      });
      return;
    }

    parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  });

  if (parts.length === 0) return '';
  return `?${parts.join('&')}`;
}

export default parseParams;
