import ShortestWay from './ShortestWay';
import {Colors} from './Colors';
import Ball from './Ball';

class Main {
    start: { x: number; y: number };
    meta: { x: number; y: number };
    valTab: Array<Array<string|number>> = [];
    constructor() {
        this.genTab();
        this.fillValTab();
        this.addBalls(3);   
    }
    fillValTab(): void {
        for (let i: number = 0; i < 9; i++) {
            this.valTab[i] = [];
            for (let j: number = 0; j < 9; j++) {
                this.valTab[i][j] = '0';
            }
        }
    }

    genTab() {
        const main: HTMLElement = document.getElementById('main');
        let selected = false;
        for (let i: number = 0; i < 9; i++) {
            for (let j: number = 0; j < 9; j++) {
                const dv: HTMLElement = document.createElement('div');
                dv.style.margin = '1px';
                dv.style.backgroundColor = Colors.box;
                dv.style.border = '2px solid black';
                dv.style.borderRadius = '8px';
                dv.className = 'box';

                dv.innerText = j.toString();
                dv.setAttribute('data-id', `${i} ${j}`);

                dv.onclick = ({ target }: { target: any }) => {
                    console.log(target);
                    if (!selected) {
                        this.clearTab();
                        target.innerText = 'S';
                        this.start = { x: i, y: j };
                    } else {
                        target.innerText = 'M';
                        this.meta = { x: i, y: j };
                        const sh: ShortestWay = new ShortestWay();
                        this.valTab = sh.find(this.start, this.meta, this.valTab);
                        this.writeTab();
                    }
                    selected = !selected;
                    target.style.backgroundColor = Colors.acOne;
                    console.log(i, j);
                };

                main.appendChild(dv);
            }
        }
    }

    writeTab(): void {
        const main: any = document.querySelectorAll('.box');
        this.valTab.flat().forEach((el: string|number, i: number) => {
            if(['a', 'b', 'c', 'd', 'e', 'f', 'g'].includes(el.toString())) {
                const ball: Ball = new Ball;
                ball.setName = el.toString();
                main[i].appendChild(ball.getBall);

            } else {
                main[i].innerHTML = el.toString();
            }
            main[i].innerHTML = el.toString();
            // main[i].appendChild(ball.getBall);
        })
        // const ball: Ball = new Ball;
        // console.log(ball.getBall);
    }

    clearTab(): void {
        const main: any = document.querySelectorAll('.box');
        console.log(main);
        main.forEach((m: HTMLElement) => {
            m.innerHTML = '';
            m.style.backgroundColor = Colors.box;
        });
    }

    addBalls(amount: number) {
        let i: number = 0;
        while (i < amount) {
            const randX: number = Math.floor(Math.random() * 9);
            const randY: number = Math.floor(Math.random() * 9);

            if(!['a', 'b', 'c', 'd', 'e', 'f', 'g'].includes(this.valTab[randX][randY].toString())) {
                const ball: Ball = new Ball;
                this.valTab[randX][randY] = ball.getName;
                i++;
            }
        }
    }
}
new Main();
// const sh: ShortestWay = new ShortestWay();
// sh.find({ x: 0, y: 0 }, { x: 4, y: 1 });
