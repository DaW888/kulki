let tab1 = [];
let tab2 = [];
let tab3 = [];

for (let i = 0; i < 9; i++) {
    tab1[i] = [];
    tab2[i] = [];
    tab3[i] = [];

    for (let j = 0; j < 9; j++) {
        tab1[i][j] = 0;
        tab2[i][j] = [];
        tab3[i][j] = `${i} ${j}`;
    }
}



shortestWay({ x: 1, y: 2 }, { x: 5, y: 6 }, tab1, tab2, tab3);

function shortestWay(start, meta, tab, wayTab, posTab) {
    tab[start.x][start.y] = 'S';
    tab[meta.x][meta.y] = 'M';
    tab[0][5] = 'X';
    tab[1][5] = 'X';
    tab[2][5] = 'X';
    tab[4][5] = 'X';
    tab[5][5] = 'X';
    tab[6][5] = 'X';
    tab[7][5] = 'X';
    tab[8][5] = 'X';

    let curs = [];
    curs.push(start);
    //let g, d, l, p; // gora, dol, lewo, prawo
    let nCurs = [];
    let found = false;

    for (let i = 1; i <= 20; i++) {
        nCurs = [];
        for (let j = 0; j < curs.length; j++) {
            console.log(curs[j]);
            let { g, d, l, p, posG, posD, posL, posP } = getValues(tab, curs[j]);
            console.log(g, d, l, p, posG, posD, posL, posP);

            const ret = addPath(tab, i, wayTab, posTab, curs[j], posG, posD, posL, posP);
            wayTab = ret.wayTab;
            console.log(nCurs);
            nCurs.push(...ret.poss);
            console.log(nCurs);
            console.log(ret.poss);
            console.log(wayTab);

            if (g == 'M' || d == 'M' || l == 'M' || p == 'M') {
                console.log('Znalazl');
                found = true;
                break;
            }
        }

        if (found) {
            console.log(wayTab[meta.x][meta.y]);
            const path = wayTab[meta.x][meta.y];
            drawTab(tab);
            drawPath(tab, path);
            break;
        }

        console.log(nCurs);
        curs = nCurs;
    }

    if(!found) {
        drawTab(tab);
    }
    console.log(nCurs);
}

function addPath(tab, i, wayTab, posTab, cur, posG, posD, posL, posP) {
    const poss = [];
    console.log('TO JEST IIII', i);

    if (posG) {
        console.log('G:', posG);
        if (tab[posG.x][posG.y] == 0 && wayTab[posG.x][posG.y].length == 0) {
            wayTab[posG.x][posG.y] = [...wayTab[cur.x][cur.y], posTab[posG.x][posG.y]];
            poss.push(posG);
            tab[posG.x][posG.y] = i;
        } else if (tab[posG.x][posG.y] == 'M' && wayTab[posG.x][posG.y].length == 0) {
            wayTab[posG.x][posG.y] = [...wayTab[cur.x][cur.y], posTab[posG.x][posG.y]];
            poss.push(posG);
        }
    }
    if (posD) {
        console.log('D:', posD);
        if (tab[posD.x][posD.y] == 0 && wayTab[posD.x][posD.y].length == 0) {
            wayTab[posD.x][posD.y] = [...wayTab[cur.x][cur.y], posTab[posD.x][posD.y]];
            poss.push(posD);
            tab[posD.x][posD.y] = i;
        } else if (tab[posD.x][posD.y] == 'M' && wayTab[posD.x][posD.y].length == 0 ) {
            wayTab[posD.x][posD.y] = [...wayTab[cur.x][cur.y], posTab[posD.x][posD.y]];
            poss.push(posD);
        }
    }
    if (posL) {
        console.log('L:', posL);
        if (tab[posL.x][posL.y] == 0 && wayTab[posL.x][posL.y].length == 0) {
            wayTab[posL.x][posL.y] = [...wayTab[cur.x][cur.y], posTab[posL.x][posL.y]];
            poss.push(posL);
            tab[posL.x][posL.y] = i;
        } else if (tab[posL.x][posL.y] == 'M' && wayTab[posL.x][posL.y].length == 0) {
            wayTab[posL.x][posL.y] = [...wayTab[cur.x][cur.y], posTab[posL.x][posL.y]];
            poss.push(posL);
        }
    }
    if (posP) {
        console.log('P:', posP);
        if (tab[posP.x][posP.y] == 0 && wayTab[posP.x][posP.y].length == 0) {
            wayTab[posP.x][posP.y] = [...wayTab[cur.x][cur.y], posTab[posP.x][posP.y]];
            poss.push(posP);
            tab[posP.x][posP.y] = i;
        } else if (tab[posP.x][posP.y] == 'M' && wayTab[posP.x][posP.y].length == 0) {
            wayTab[posP.x][posP.y] = [...wayTab[cur.x][cur.y], posTab[posP.x][posP.y]];
            poss.push(posP);
        }
    }
    console.log(poss);

    return { wayTab, poss };
}

function getValues(tab, cur) {
    let [posG, posD, posL, posP] = [null, null, null, null];

    try {
        g = tab[cur.x][cur.y - 1];
        g = g === undefined ? null : g;
    } catch {
        g = null;
    }
    try {
        d = tab[cur.x][cur.y + 1];
        d = d === undefined ? null : d;
    } catch {
        d = null;
    }
    try {
        l = tab[cur.x - 1][cur.y];
        l = l === undefined ? null : l;
    } catch {
        l = null;
    }
    try {
        p = tab[cur.x + 1][cur.y];
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

console.log(tab1);
console.log(tab2);
console.log(tab3);



function drawTab(tab) {
    const main = document.getElementById('main');

    let selected = false;
    tab.forEach((el, i) => {
        el.forEach((el2, j) => {
            const dv = document.createElement('div');
            dv.style.border = '2px solid black';
            dv.className = 'box';
            dv.style.width = '50px';
            dv.style.height = '50px';
            dv.innerText = el2;
            dv.setAttribute('data-id', `${i} ${j}`);

            dv.onclick = function() {
                if (!selected) {
                    this.innerText = 'S';
                } else {
                    this.innerText = 'M';
                }
                selected = !selected;
                this.style.backgroundColor = 'red';
                console.log(i, j);
            };
    
            main.appendChild(dv);
        });
    });
}


function drawPath(tab, path) {
    const main = document.querySelectorAll('.box');
    console.log(main);
    main.forEach(m => {
        if (path.includes(m.dataset.id)) {
            console.log('jest');
            m.style.backgroundColor = 'blue';
        }
    })
}