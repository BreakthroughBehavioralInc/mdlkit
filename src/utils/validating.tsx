/**
 * Validates if the provided phone number is in the correct format and length.
 *
 * @example
 * validPhoneNumber('(123)456-7890', true); // returns true
 * validPhoneNumber('(111)111-1111', true); // returns { valid: false, error: 'All digits are identical.' }
 * validPhoneNumber('1234567890', false);    // returns { valid: false, error: 'Phone number format is invalid.' }
 *
 */
export const validPhoneNumber = (phoneNumber: string, checkFormat = true) => {
  const isValidFormat = checkFormat
    ? /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/.test(phoneNumber)
    : /^\d{10}$/.test(phoneNumber);

  const onlyDigits = phoneNumber.replace(/\D/g, '');

  const hasIdenticalDigits = /^(\d)\1{9}$/.test(onlyDigits);

  if (!isValidFormat) {
    return { valid: false, error: 'Please enter a valid phone number.' };
  }

  if (hasIdenticalDigits) {
    return { valid: false, error: 'All digits are identical.' };
  }

  return { valid: true, error: '' };
};

/**
 * Validates if the provided object is empty or no.
 *
 * @example
 * isEmptyObject({}); // returns true
 * isEmptyObject({example:'Hey'}); // returns false
 *
 */
export const isEmptyObject = (obj: any) => {
  if (obj === null || obj === undefined) return true;
  return Object.entries(obj).length === 0 && obj.constructor === Object;
};

/**
 * Validates if the provided value is not null or undefined
 *
 * @example
 * checkPresence(false); // returns true
 * checkPresence(null); // returns false
 * checkPresence(undefined); // returns false
 *
 */
export const checkPresence = value => {
  return value !== null && value !== undefined;
};

/**
 * Compares two arrays to determine if they contain the same elements,
 * regardless of order.
 *
 * @returns {boolean} `true` if both arrays contain the same elements, otherwise `false`
 *
 * @example
 * arraysHaveSameElements(['apple', 'banana'], ['banana', 'apple']); // true
 * arraysHaveSameElements(['apple', 'banana'], ['apple', 'cherry']); // false
 */
export const arraysHaveSameElements = (arr1: any[], arr2: any[]): boolean => {
  if (arr1.length !== arr2.length) return false;

  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();

  return sorted1.every((value, index) => value === sorted2[index]);
};

type DateOutputFormat = 'YYYY-MM-DD' | 'MM/DD/YYYY';

/**
 * Parses a date string in the format "M/D/YYYY" or "MM/DD/YYYY" and
 * returns it in the specified output format.
 *
 * @param {string} inputValue - The date string to parse (e.g., "1/9/2025" or "01/09/2025").
 * @param {DateOutputFormat} format - The desired output format ("YYYY-MM-DD" or "MM/DD/YYYY").
 * @returns {string} The formatted date string (e.g., "2025-01-09" or "01/09/2025")
 *                   or an empty string if validation fails.
 *
 * @example
 * formatDateString('1/9/2025', 'YYYY-MM-DD'); // "2025-01-09"
 * formatDateString('1/9/2025', 'MM/DD/YYYY'); // "01/09/2025"
 */
export const formatDateString = (
  inputValue: string,
  format: DateOutputFormat
): string => {
  const parts = inputValue.split('/');
  if (parts.length !== 3) {
    return '';
  }

  const [monthRaw, dayRaw, yearRaw] = parts;

  if (yearRaw.length !== 4) {
    return '';
  }

  const monthNum = parseInt(monthRaw, 10);
  const dayNum = parseInt(dayRaw, 10);

  if (
    Number.isNaN(monthNum) ||
    Number.isNaN(dayNum) ||
    monthNum < 1 ||
    monthNum > 12 ||
    dayNum < 1 ||
    dayNum > 31
  ) {
    return '';
  }

  const month = String(monthNum).padStart(2, '0');
  const day = String(dayNum).padStart(2, '0');

  switch (format) {
    case 'YYYY-MM-DD':
      return `${yearRaw}-${month}-${day}`;
    case 'MM/DD/YYYY':
      return `${month}/${day}/${yearRaw}`;
    default:
      return '';
  }
};

interface GetCorrectedDateOptions {
  dateParam?: Date | number | string;
  format?: 'YYYY-MM-DD' | 'MM-DD-YYYY' | 'MM/DD/YYYY';
}

/**
 * Convert the given date-like input to local midnight (time ignored),
 * and optionally return a formatted string if `format` is provided.
 *
 * Usage:
 *  getCorrectedDate()
 *    -> Date (today, local midnight)
 *  getCorrectedDate({ dateParam: '02/25/1999' })
 *    -> Date (02/25/1999, local midnight)
 *  getCorrectedDate({ dateParam: 1674806400000, format: 'MM/DD/YYYY' })
 *    -> "01/27/2023"
 *  getCorrectedDate({ format: 'YYYY-MM-DD' })
 *    -> "2025-02-01" (whatever "today" is in local midnight, just example)
 */
export function getCorrectedDate(
  options: GetCorrectedDateOptions = {}
): Date | string {
  const { dateParam, format } = options;

  let date: Date;
  if (dateParam === undefined) {
    date = new Date();
  } else if (dateParam instanceof Date) {
    date = dateParam;
  } else if (typeof dateParam === 'number') {
    date = new Date(dateParam);
  } else if (typeof dateParam === 'string') {
    const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateParam);
    if (isoMatch) {
      const [, yyyy, mm, dd] = isoMatch;
      date = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
    } else {
      const mdyMatch = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(dateParam);
      if (mdyMatch) {
        const [, mm, dd, yyyy] = mdyMatch;
        date = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
      } else {
        date = new Date(dateParam);
      }
    }
  } else {
    throw new Error('Unsupported dateParam type for getCorrectedDate');
  }

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date input provided: ${String(dateParam)}`);
  }

  const localMidnight = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  if (!format) {
    return localMidnight;
  }

  const year = String(localMidnight.getFullYear());
  const month = String(localMidnight.getMonth() + 1).padStart(2, '0');
  const day = String(localMidnight.getDate()).padStart(2, '0');

  switch (format) {
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'MM-DD-YYYY':
      return `${month}-${day}-${year}`;
    case 'MM/DD/YYYY':
      return `${month}/${day}/${year}`;
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}

export const checkRequired = (value?: string | number | null) => {
  return checkPresence(value) && value !== '';
};
