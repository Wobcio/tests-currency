import { convertPLNToUSD } from '../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('mee')).toBeNaN();
    expect(convertPLNToUSD('-9566')).toBeNaN();
  });
  it('should return NaN if value is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return 0 if value < 0', () => {
    expect(convertPLNToUSD(-5)).toBe('$0.00');
    expect(convertPLNToUSD(-20)).toBe('$0.00');
    expect(convertPLNToUSD(-100.45)).toBe('$0.00');
  });
  it('should return NaN if value is not text and number', () => {
    expect(convertPLNToUSD(true)).toBeNaN();
    expect(convertPLNToUSD(undefined)).toBeNaN();
    expect(convertPLNToUSD({name: 'Zlatan'})).toBeNaN();
    expect(convertPLNToUSD(function(){})).toBeNaN();
    expect(convertPLNToUSD([-5, 4, 5, 66])).toBeNaN();
    expect(convertPLNToUSD(Symbol())).toBeNaN();

  });
});