const Rx = require('rxjs');
const Random = require('./random');
const RxOperators = require('rxjs/operators');

const source$ = new Rx.BehaviorSubject(600);
const el = document.querySelector('.container');
const width = 40;


const interval$ = Rx.interval(1000).pipe(
    RxOperators.map(() => ({xPos:Math.random() * width, randomLetter: Random.getRandomString()}))
)



const renderGame = ({xPos, randomLetter}) => {
    console.log(randomLetter)
    // el.innerHTML = '<div>Welcome to Alphabet Invasion Game</div>'
    el.innerHTML +=  '&nbsp'.repeat(xPos) + randomLetter + '<br/>';
}

const subscriptyion$ = interval$.subscribe(
    renderGame
);

Rx.timer(5000).subscribe(() => {
    subscriptyion$.unsubscribe()
})


// source$.pipe(
//     Random.getRandomString
// )
// .subscribe((res) => {
//     console.log(res);
// })