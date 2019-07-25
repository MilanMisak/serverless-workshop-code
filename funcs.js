function split(params) {
    var text = params.text || '';
    return {
        words: text.split(' ')
    };
}

function reverse(params) {
    var words = params.words || [];
    return {
        words: words.map(w => w.split('').reverse().join(''))
    };
}

function join(params) {
    var words = params.words || [];
    return {
        text: words.join(' ')
    };
}
