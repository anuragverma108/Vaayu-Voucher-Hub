export interface Voucher {
  title: string;
  cost: number;
  code: string;
}

export const vouchers: Voucher[] = [
  {
    title: '₹50 Amazon Gift Card',
    cost: 500,
    code: 'AMZ50-XYZ123',
  },
  {
    title: '₹100 Flipkart Gift Card',
    cost: 900,
    code: 'FLPK100-ABC456',
  },
  {
    title: '₹200 Myntra Gift Card',
    cost: 1700,
    code: 'MYN200-DEF789',
  },
]; 