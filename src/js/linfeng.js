import Rx from 'rxjs/Rx';

/*var observer =  Rx.Observable.from([1,2,3,4,45,7]);

observer.subscribe((x) => {console.log(x)});*/

// Rx.Observable.interval(1000).map((x)=>{return x+'_linfeng'}).subscribe((x) => {console.log(x+'_after')});
// 

/*let func = Rx.Observable.toAsync(function(x, y) {
    return x + y;
});*/

/*let resource = func(3, 4);
let sub = resource.subscribe((result) => console.log(result), () => {}, () => console.log('It is over'));*/


/*var func = Rx.Observable.toAsync(function (x, y) {
    return x + y;
});

// Execute function with 3 and 4
var source = func(3, 4);

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });*/

/*let resource = Rx.Observable.range(1,4).flatMap((x)=>{
    return Rx.Observable.from(new Array(x).fill(x));
});
resource.subscribe((x)=>{console.log(x)});*/

/*let letA = Rx.Observable.interval(1000);

let letB = letA.filter((num)=>{
     return (num % 2 != 0)
      && (num % 3 != 0)
      && (num % 5 != 0)
      && (num % 7 != 0)
});

letB.subscribe((x)=>{console.log(x)});*/

/*let A = Rx.Observable.create((observer) => {
    let count = 1;
    let timer = setInterval(() => { observer.next(count++) }, 2000);
    return () => {
        console.log('结束');
        clearInterval(timer);
    };
});

var subscription = A.subscribe({
    next: x => console.log(x)
});
console.log(subscription);

setTimeout(() => subscription.unsubscribe(), 7000)*/
