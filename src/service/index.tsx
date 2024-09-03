import { fetchOneBp } from '@alife/ele-bp-sdk-lib';

/** coupon优惠券 */
export async function getCoupon() {
  return fetchOneBp(
    'eleSignature',
    'oneBpCommodityAccountService',
    'queryESignatureCoupons',
    {},
    {
      isValid: true,
    }
  );
}