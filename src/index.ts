import ShortestWay from './ShortestWay';
import Colors from './Colors';

class Main {
    start: { x: number; y: number };
    meta: { x: number; y: number };
    constructor() {
        this.genTab();
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
                dv.style.width = '50px';
                dv.style.height = '50px';
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
                        sh.find(this.start, this.meta);
                    }
                    selected = !selected;
                    target.style.backgroundColor = Colors.acOne;
                    console.log(i, j);
                };

                main.appendChild(dv);
            }
        }
    }

    clearTab() {
        const main: any = document.querySelectorAll('.box');
        console.log(main);
        main.forEach((m: HTMLElement) => {
            m.innerText = '0';
            m.style.backgroundColor = Colors.box;
        });
    }
}
new Main();
// const sh: ShortestWay = new ShortestWay();
// sh.find({ x: 0, y: 0 }, { x: 4, y: 1 });
