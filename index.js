class FullySpelledOut {
    #units = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];

    writeInFull(num) {
        if (num < 10) {
            return this.getUnits(num);
        }

        if (num < 17) {
            return this.getUnderSeventeen(num);
        }

        const arr = (num + '').split('').map(value => Number.parseInt(value, 10));

        if (num < 100) {
            return this.getTens(arr);
        }

        if (num < 1000) {
            return this.getHundreds(arr);
        }

        if (num < 1000000) {
            return this.getThousands(arr);
        }

        if (num === 1000000) {
            return 'un million';
        }

        return num;
    }

    getUnits(arg) {
        return this.#units[arg];
    }

    getUnderSeventeen(arg) {
        const underSeventeen = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
        return underSeventeen[arg - 10];
    }

    getTens(arr) {
        const tens = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'septante', 'quatre-vingt', 'nonante'];
        if (0 === arr[0]) {
            return this.getUnits(arr[1]);
        }
        if (1 === arr[0] && 7 > arr[1]) {
            return this.getUnderSeventeen(Number.parseInt(arr.join(''), 10));
        }
        return tens[arr[0] - 1] + (0 === arr[1] ? '' : (arr[1] === 1 && 8 !== arr[0] ? ' et ' : '-') + this.getUnits(arr[1]));
    }

    getHundreds(arr) {
        let result = 'cent';
        const head = arr.shift();

        if (1 < head) {
            result = this.getUnits(head) + ' ' + result;
        } else if (0 === head) {
            result = '';
        }

        result += 0 !== arr[0] || 0 !== arr[1] ? ' ' + this.getTens(arr) : (1 < head ? 's' : '');

        return result;
    }

    getThousands(arr) {
        const tail = arr.splice(-3);
        return (1 === arr.length && 1 === arr[0] ? '' : this.writeInFull(Number.parseInt(arr.join(''), 10)) + ' ') + 'mille' + (0 === tail[0] ? '' : ' ') + this.getHundreds(tail);
    }
}

// const converter = new FullySpelledOut();

// console.log(0, converter.writeInFull(0));
// console.log(9, converter.writeInFull(9));
// console.log(10, converter.writeInFull(10));
// console.log(12, converter.writeInFull(12));
// console.log(16, converter.writeInFull(16));
// console.log(19, converter.writeInFull(19));
// console.log(20, converter.writeInFull(20));
// console.log(21, converter.writeInFull(21));
// console.log(35, converter.writeInFull(35));
// console.log(80, converter.writeInFull(80));
// console.log(81, converter.writeInFull(81));
// console.log(87, converter.writeInFull(87));
// console.log(90, converter.writeInFull(90));
// console.log(97, converter.writeInFull(97));
// console.log(100, converter.writeInFull(100));
// console.log(102, converter.writeInFull(102));
// console.log(116, converter.writeInFull(116));
// console.log(119, converter.writeInFull(119));
// console.log(123, converter.writeInFull(123));
// console.log(131, converter.writeInFull(131));
// console.log(180, converter.writeInFull(180));
// console.log(181, converter.writeInFull(181));
// console.log(190, converter.writeInFull(190));
// console.log(199, converter.writeInFull(199));
// console.log(300, converter.writeInFull(300));
// console.log(308, converter.writeInFull(308));
// console.log(311, converter.writeInFull(311));
// console.log(999, converter.writeInFull(999));
// console.log(1000, converter.writeInFull(1000));
// console.log(1002, converter.writeInFull(1002));
// console.log(1010, converter.writeInFull(1010));
// console.log(1011, converter.writeInFull(1011));
// console.log(1016, converter.writeInFull(1016));
// console.log(1019, converter.writeInFull(1019));
// console.log(1800, converter.writeInFull(1800));
// console.log(3019, converter.writeInFull(3019));
// console.log(4287, converter.writeInFull(4287));
// console.log(20000, converter.writeInFull(20000));
// console.log(89423, converter.writeInFull(89423));
// console.log(92081, converter.writeInFull(92081));
// console.log(100000, converter.writeInFull(100000));
// console.log(792081, converter.writeInFull(792081));
// console.log(792381, converter.writeInFull(792381));
