import { from, Observable } from "rxjs";

let numbers = [1, 5, 10, 15, 20, 25, 30];

let source = new Observable(subscriber => {
    let index = 0;
    let produceValue = () => {
        subscriber.next(numbers[index++]);
        if (index < numbers.length) {
            setTimeout(produceValue, 500);
        } else {
            // subscriber.complete();
            subscriber.error("Aconteceu um erro esperado!");
        }
    }
    produceValue();
})

source.subscribe({
    next: (x: number) => {
        console.log(x, 'a')
    },
    error: (e: Error) => console.log(e),
    complete: () => console.log('Complete'),
});

source.subscribe({
    next: (x: number) => {
        console.log(x, 'a')
    },
    error: (e: Error) => console.log(e),
    complete: () => console.log('Complete'),
});
