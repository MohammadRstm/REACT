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
it('checking if 0 results in $0.00' , () =>{
    expect(formatMoney(0)).toBe("$0.00");
});

it('checking if -999 results in $-9.99' , () =>{
    expect(formatMoney(-999)).toBe("$-9.99");
});
it('checking if -100 results in $-1.00' , () =>{
    expect(formatMoney(-100)).toBe("$-1.00");
});

})
