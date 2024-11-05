const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

const zl = zucchine.filter((el) => el.length >= 15);
console.log(zl);

const zs = zucchine.filter((el) => el.length < 15);
console.log(zs)

// itera una sola volta l'array 

let zul = [];
let zus = [];
zucchine.forEach(el => {
  ((el.length >= 15) ? zul : zus).push(el);
});
console.log(zul, zus)



function dividiz(array) {

  return array.reduce((acc, current, index, array) => {
    if (current.length >= 15) {
      acc.zucl.push(current);

    } else {
      acc.zucc.push(current)
    }
    return acc

  }, { zucl: [], zucc: [] })


}



function dividiz3(array) {

  return array.reduce((acc, current, index, array) => {
    ((current.length >= 15) ? acc.zcul : acc.zucc).push(current)

    return acc

  }, { zucl: [], zucc: [] })

}

function dividiz2(array) {

  return array.reduce((acc, current, index, array) => {
    ((current.length >= 15) ? acc.zucl : acc.zucc).push(current)

    return acc

  }, { zucl: [], zucc: [] })

}


console.log(dividiz(zucchine))
console.log(dividiz2(zucchine))


//console.log(dividiz3(zucchine))


function dividiz4(array) {

  return array.reduce((acc, current, index, array) => {
    ((current.length >= 15) ? acc.zucl : acc.zucc).push(current)

    return acc

  }, { zucl: [], zucc: [] })

} console.log(dividiz4(zucchine))