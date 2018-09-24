/** in typescript
 * interface IteratorResult {
    done: boolean;
    value: any;
}
interface Iterator {
    next(): IteratorResult;
}
interface Iterable {
    [Symbol.iterator](): Iterator
}
interface Generator extends Iterator {
    next(value?: any): IteratorResult;
    throw(exception: any);
}
 */

let fibo = {
    [Symbol.iterator]() { // Iterable
        let pre = 0, cur = 1;
        return {
            next() { //Iterator
                [pre, cur] = [cur, pre + cur];
                return { done: false, value: cur }// IteratorResult
            }
        }
    }
}

let fibo = {
    [Symbol.iterator]: function*(){
        var pre = 0, cur = 1;
        while(true){
            let temp = pre;
            pre = cur;
            cur = temp+cur;
            yield cur;
        }
    }
}

for (var n of fibo) {
    if (n > 100000000)
        break;
    console.log(n);
}