import { calculateDiscount } from './discount.util';

describe('Discount Utils', () => {
  it('should apply 20% for sandwich + fries + drink', () => {
    const items = [
      { type: 'sandwich' } as any,
      { name: 'Fries' } as any,
      { name: 'Soft drink' } as any,
    ];
    expect(calculateDiscount(items)).toBe(0.20);
  });

  it('should return 0 for no discount', () => {
    const items = [
      { type: 'extra', name: 'Fries' } as any,
    ];
    expect(calculateDiscount(items)).toBe(0);
  });
});
