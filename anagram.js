function validAnagram(word1, word2) {
    const counter1 = {};
    const counter2 = {};

    for(let char of word1){
        if(counter1[char])
            counter1[char]++;
        else
            counter1[char] = 1;
    }

    for(let char of word2){
        if(counter2[char])
            counter2[char]++;
        else
            counter2[char] = 1;
    }

    for(let key in counter1){
        if (counter1[key] != counter2[key])
            return false;
    }
    return true;
}

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('aaz', 'zza'));