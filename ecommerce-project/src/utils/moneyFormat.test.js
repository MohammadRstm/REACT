import { it , expect , describe} from 'vitest';
import { formatMoney } from './moneyFormat';

describe('Format money tests' , () =>{
it('testing the format money function , checking if 1999 results in $19.99' , () =>{
    expect(formatMoney(1999)).toBe('$19.99');
});
it('testing the format money function , checking if it displays two decimals ' , () =>{
    expect(formatMoney(1090)).toBe('$10.90');
    expect(formatMoney(100)).toBe('$1.00')
});
})
