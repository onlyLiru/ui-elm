/**

格式化数字d
@param num 要格式化的数字
@param options 格式化选项
@param options.format 格式化的类型，可选值为'money'（货币），'int'（整数），'percent'（百分比），'origin'（原始）
@param options.percentagePrecision 百分比类型的精度，可选
@param options.precision 货币类型的精度，可选
@returns 格式化后的数字
*/

export function formatNumber(num: number, options: { format: 'money' | 'int' | 'percent' | 'origin', percentagePrecision?: number, precision?: number }): any {
  let formattedNumber: string;
  if (isNaN(num)) { return num }

  const { precision } = options;

  switch (options.format) {
    case 'money':
      if (typeof precision === 'number') {
        formattedNumber = num.toFixed(precision).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      } else {
        formattedNumber = num.toLocaleString();
      }
      break;
    case 'int':
      formattedNumber = Math.round(num).toString();
      break;
    case 'percent':
      formattedNumber = (num * 100).toFixed(options.percentagePrecision) + '%';
      break;
    case 'origin':
      formattedNumber = num.toString();
      break;
    default:
      formattedNumber = num.toString();
      break;
  }

  return formattedNumber;
}

