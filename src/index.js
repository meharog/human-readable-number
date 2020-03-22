module.exports = function toReadable (number) {
    const NUM_DICTIONARY = {
        0:'zero',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen',
        20:'twenty',
        30:'thirty',
        40:'forty',
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety',
        100:'hundred'
    };
    if (number <= 20 ) {
        return NUM_DICTIONARY[number]
    };
    if (number < 100) {
        pos2 = Math.floor(number / 10) * 10;
        pos1 = number % 10 ;
        if (pos1 === 0) { return NUM_DICTIONARY[pos2] };
        return NUM_DICTIONARY[pos2] + ' ' + NUM_DICTIONARY[pos1];
    };
    if (number >= 100) {
        pos3 = Math.floor(number / 100);
        pos2 = number % 100;
        if (pos2 <= 20) {
            if (pos2 === 0) { return NUM_DICTIONARY[pos3] + ' ' + NUM_DICTIONARY[100] }
            return NUM_DICTIONARY[pos3] + ' ' + NUM_DICTIONARY[100] + ' ' + NUM_DICTIONARY[pos2];
        } else {
            pos2 = Math.floor(pos2 / 10) * 10;
            pos1 = number % 10;
            if (pos1 === 0) { return NUM_DICTIONARY[pos3] + ' ' + NUM_DICTIONARY[100] + ' ' + NUM_DICTIONARY[pos2] }
            return NUM_DICTIONARY[pos3] + ' ' + NUM_DICTIONARY[100] + ' ' + NUM_DICTIONARY[pos2] + ' ' + NUM_DICTIONARY[pos1];
        };
    };
};