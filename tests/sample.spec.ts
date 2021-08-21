import { sample } from '../src';

describe('Sample', () => {
  it('should multiply args', () => {
    expect(sample(5.99, 100)).toBe(599);
  });
});
