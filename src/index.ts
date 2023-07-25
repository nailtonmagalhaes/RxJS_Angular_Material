import { from, Observable } from "rxjs";

let numbers = [1, 5, 10];
let source = from(numbers);

/*
class myObserver {
    next(x: number) {
        console.log(x);
    }
    error(e: Error) {
        console.log(e);
    }
    complete() {
        console.log('Complete');
    }
}
*/

let sourceInstance = new Observable(subscriber =>{
    for(let n of numbers){
        if(n>5){
            subscriber.error('Aconteceu um erro esperado!');
        }

        subscriber.next(n);
        subscriber.complete();
    }
    subscriber.complete();
})
const myObserverJson = {
    next: (x: number) => console.log(x, 'a'),
    error: (e: Error) => console.log(e),
    complete: () => console.log('Complete'),
}

function component() {
    source.subscribe(myObserverJson);
    sourceInstance.subscribe(myObserverJson);
}

component();