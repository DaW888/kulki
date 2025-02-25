import {BallColors} from './Colors';

export default class Ball {
    ball: HTMLElement;
    color: string;
    nr: number;

    constructor() {
        this.createBall();
    }

    createBall(): void {
        this.ball = document.createElement('div');
        this.ball.className = 'ball';

        const colors: string[] = Object.values(BallColors);
        const rand: number = Math.floor(Math.random() * 7);
        this.color = colors[rand];
        console.log(this.color);
        this.ball.style.backgroundColor = this.color;
        this.nr = rand;
        this.ball.innerText = this.nr.toString();


    }

    set setNr(nr: number) {
        this.nr = nr;
        const colors: string[] = Object.values(BallColors);
        this.color = colors[nr];
        this.ball.style.backgroundColor = this.color;
        this.ball.innerText = this.nr.toString();
    }

    get getBall(): HTMLElement {
        return this.ball;
    }
    get getColor(): string {
        return this.color;
    }
    get getNr(): number {
        return this.nr;
    }

}