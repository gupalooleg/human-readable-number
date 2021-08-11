const rn0_19 = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const rn10_90 = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

function convertNumberLess20(number) {
    return rn0_19[number];
}

function convertNumberLess100(number) {
    if (number < 20) {
        return convertNumberLess20(number);
    } else {
        return (
            rn10_90[Math.floor(number / 10)] +
            (number % 10 ? ` ${convertNumberLess20(number % 10)}` : "")
        );
    }
}

function convertNumberLess1000(number) {
    if (number < 100) {
        return convertNumberLess100(number);
    } else {
        return (
            `${convertNumberLess20(Math.floor(number / 100))} hundred` +
            (number % 100 ? ` ${convertNumberLess100(number % 100)}` : "")
        );
    }
}

function convertNumberToReadable(number) {
    if (number < 1000) {
        return convertNumberLess1000(number);
    }
}

module.exports = function toReadable(number) {
    return convertNumberToReadable(number);
};
