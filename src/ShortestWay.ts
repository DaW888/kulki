import {Colors} from './Colors';

export default class ShortestWay {
    valTab: Array<Array<string|number>> = [];
    pathTab: Array<Array<Array<string|number>>> = [];
    posTab: Array<Array<string|number>> = [];
    
    constructor() {
        
        this.fillValTab();
        this.fillPathTab();
        this.fillPosTab();

    }


    fillValTab(): void {
        for (let i: number = 0; i < 9; i++) {
            this.valTab[i] = [];
            for (let j: number = 0; j < 9; j++) {
                this.valTab[i][j] = 0;
            }
        }
    }
    fillPathTab(): void {
        for (let i: number = 0; i < 9; i++) {
            this.pathTab[i] = [];
            for (let j: number = 0; j < 9; j++) {
                this.pathTab[i][j] = [];
            }
        }
    }
    fillPosTab(): void {
        for (let i: number = 0; i < 9; i++) {
            this.posTab[i] = [];
            for (let j: number = 0; j < 9; j++) {
                this.posTab[i][j] = `${i} ${j}`;
            }
        }
    }



    find(start: {x: number, y: number}, meta: {x: number, y: number}): Array<Array<string|number>> {
        this.valTab[start.x][start.y] = 'S';
        this.valTab[meta.x][meta.y] = 'M';
        // this.valTab[0][5] = 'X';
        // this.valTab[1][5] = 'X';
        // this.valTab[2][5] = 'X';
        // this.valTab[4][5] = 'X';
        // this.valTab[5][5] = 'X';
        // this.valTab[6][5] = 'X';
        // this.valTab[7][5] = 'X';
        // this.valTab[8][5] = 'X';
    
        let curs: any = [];
        curs.push(start);
        //let g, d, l, p; // gora, dol, lewo, prawo
        let nCurs: Array<object> = [];
        let found: boolean = false;
    
        for (let i: number = 1; i <= 20; i++) {
            nCurs = [];
            for (let j: number = 0; j < curs.length; j++) {
                console.log(curs[j]);
                let { g, d, l, p, posG, posD, posL, posP }: any  =  this.getValues(curs[j]);
                console.log(g, d, l, p, posG, posD, posL, posP);
    
                const poss: Array<object> = this.addPath(i, curs[j], posG, posD, posL, posP);
                console.log(nCurs);
                nCurs.push(...poss);
                console.log(nCurs);
                console.log(poss);
                console.log(this.pathTab);
    
                if (g == 'M' || d == 'M' || l == 'M' || p == 'M') {
                    console.log('Znalazl');
                    found = true;
                    break;
                }
            }
    
            if (found) {
                console.log(this.pathTab[meta.x][meta.y]);
                let path: (string|number)[] = this.pathTab[meta.x][meta.y];
                // this.drawTab();
                this.drawPath(path);
                break;
            }
    
            console.log(nCurs);
            curs = nCurs;
        }
    
        if(!found) {
            // this.drawTab();
        }
        console.log(nCurs);
        return this.valTab;
    }

    addPath(i: number, cur: {x: number, y: number}, posG: {x: number, y: number}|null, posD: {x: number, y: number}|null,
         posL: {x: number, y: number}|null, posP: {x: number, y: number}|null): Array<object> {
        const poss: Array<object> = [];
        console.log('TO JEST IIII', i);
    
        if (posG) {
            console.log('G:', posG);
            if (this.valTab[posG.x][posG.y] == 0 && this.pathTab[posG.x][posG.y].length == 0) {
                this.pathTab[posG.x][posG.y] = [...this.pathTab[cur.x][cur.y], this.posTab[posG.x][posG.y]];
                poss.push(posG);
                this.valTab[posG.x][posG.y] = i;
            } else if (this.valTab[posG.x][posG.y] == 'M' && this.pathTab[posG.x][posG.y].length == 0) {
                this.pathTab[posG.x][posG.y] = [...this.pathTab[cur.x][cur.y], this.posTab[posG.x][posG.y]];
                poss.push(posG);
            }
        }
        if (posD) {
            console.log('D:', posD);
            if (this.valTab[posD.x][posD.y] == 0 && this.pathTab[posD.x][posD.y].length == 0) {
                this.pathTab[posD.x][posD.y] = [...this.pathTab[cur.x][cur.y], this.posTab[posD.x][posD.y]];
                poss.push(posD);
                this.valTab[posD.x][posD.y] = i;
            } else if (this.valTab[posD.x][posD.y] == 'M' && this.pathTab[posD.x][posD.y].length == 0 ) {
                this.pathTab[posD.x][posD.y] = [...this.pathTab[cur.x][cur.y], this.posTab[posD.x][posD.y]];
                poss.push(posD);
            }
        }
        if (posL) {
            console.log('L:', posL);
            if (this.valTab[posL.x][posL.y] == 0 && this.pathTab[posL.x][posL.y].length == 0) {
                this.pathTab[posL.x][posL.y] = [...this.pathTab[cur.x][cur.y], this.posTab[posL.x][posL.y]];
                poss.push(posL);
                this.valTab[posL.x][posL.y] = i;
            } else if (this.valTab[posL.x][posL.y] == 'M' && this.pathTab[posL.x][posL.y].length == 0) {
                this.pathTab[posL.x][posL.y] = [...this.pathTab[cur.x][cur.y], this.posTab[posL.x][posL.y]];
                poss.push(posL);
            }
        }
        if (posP) {
            console.log('P:', posP);
            if (this.valTab[posP.x][posP.y] == 0 && this.pathTab[posP.x][posP.y].length == 0) {
                this.pathTab[posP.x][posP.y] = [...this.pathTab[cur.x][cur.y], this.posTab[posP.x][posP.y]];
                poss.push(posP);
                this.valTab[posP.x][posP.y] = i;
            } else if (this.valTab[posP.x][posP.y] == 'M' && this.pathTab[posP.x][posP.y].length == 0) {
                this.pathTab[posP.x][posP.y] = [...this.pathTab[cur.x][cur.y], this.posTab[posP.x][posP.y]];
                poss.push(posP);
            }
        }
        console.log(poss);
    
        return poss;
    }

    getValues(cur: {x: number, y: number}): object {
        let [posG, posD, posL, posP]: [{x: number, y: number}|null,{x: number, y: number}|null,
            {x: number, y: number}|null,{x: number, y: number}|null] = [null, null, null, null];
            let [g, d, l, p]: [any, any, any, any] = [null,null,null,null];
        try {
            g = this.valTab[cur.x][cur.y - 1];
            g = g === undefined ? null : g;
        } catch {
            g = null;
        }
        try {
            d = this.valTab[cur.x][cur.y + 1];
            d = d === undefined ? null : d;
        } catch {
            d = null;
        }
        try {
            l = this.valTab[cur.x - 1][cur.y];
            l = l === undefined ? null : l;
        } catch {
            l = null;
        }
        try {
            p = this.valTab[cur.x + 1][cur.y];
            p = p === undefined ? null : p;
        } catch {
            p = null;
        }
    
        posG = g === null ? null : { x: cur.x, y: cur.y - 1 };
        posD = d === null ? null : { x: cur.x, y: cur.y + 1 };
        posL = l === null ? null : { x: cur.x - 1, y: cur.y };
        posP = p === null ? null : { x: cur.x + 1, y: cur.y };
    
        return { g, d, l, p, posG, posD, posL, posP };
    }
    drawTab(): void {
        const main: NodeListOf<HTMLElement> = document.querySelectorAll('.box');

        // main.forEach((m: HTMLElement) => {
        //     if (path.includes(m.dataset.id)) {
        //         console.log('jest');
        //         m.style.backgroundColor = 'blue';
        //     }
        // })
    }

    //NIE RUSZAJ
    drawTab2(): void {
        const main: HTMLElement = document.getElementById('main');
    
        let selected = false;
        this.valTab.forEach((el, i) => {
            el.forEach((el2, j) => {
                const dv: any = document.createElement('div');
                dv.style.border = '2px solid black';
                dv.className = 'box';
                dv.style.width = '50px';
                dv.style.height = '50px';
                dv.innerText = el2.toString();
                dv.setAttribute('data-id', `${i} ${j}`);
    
                dv.onclick = function() {
                    if (!selected) {
                        this.innerText = 'S';
                    } else {
                        this.innerText = 'M';
                    }
                    selected = !selected;
                    this.style.backgroundColor = Colors.acOne;
                    console.log(i, j);
                };
        
                main.appendChild(dv);
            });
        });
    }


    drawPath(path: (string|number)[]): void {
        const main: any = document.querySelectorAll('.box');
        console.log(main);
        // let i: number = 1;
        main.forEach((m: HTMLElement) => {
            if (path.includes(m.dataset.id)) {
                console.log('jest');
                m.style.backgroundColor = Colors.acTwo;
                // m.innerText = i.toString();
                // i++;
            }
        })
    }


}