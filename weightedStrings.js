/*
    jika queries itu adalah bobot dari setiap karakter dan setiap 1 karakter mempunyai 1 bobot nilai maka fungsi ini dapat menyelesaikan nya,
    nilai a = 1 , b= 4, b =9 dan d =4 dan queries nya itu 1, 3, 9, 8 maka hasil nya ["Yes", "No", "Yes", "No"]
*/
function weightedStringsV1(str, queries) {
    const charWeight = char => char.charCodeAt(0) - 96;
    const existChar = {};
    const splitChar = str.split("")
    for (const sChar of splitChar) {
        existChar[sChar] = existChar[sChar] ? existChar[sChar] + charWeight(sChar) : charWeight(sChar);
    }
    const arr = Object.values(existChar);
    return queries.map((query, i) => query == arr[i] ? "Yes" : "No");
}

// console.log(weightedStringsV1("abbcccd", [1, 3, 9, 8])); // Output: ["Yes", "No", "Yes", "No"]

/*
    karna sampel yang di berikan jika inputan nya (abbcccd, [1, 3, 9, 8] ) 
    harus menghailkan return [Yes, Yes, Yes, No]
    maka menggunakan function berikut untuk memenuhi nya 
*/

function weightedStrings(inputString, queries) {
    const weights = new Set();

    for (let i = 0; i < inputString.length; ) {
        const char = inputString[i];
        let length = 1;

        while (i + 1 < inputString.length && inputString[i + 1] === char) {
            length++;
            i++;
        }

        for (let j = 1; j <= length; j++) {
            weights.add((char.charCodeAt(0) - 'a'.charCodeAt(0) + 1) * j);
        }

        i++;
    }
    return queries.map(query => weights.has(query) ? "Yes" : "No");
}

// Contoh penggunaan
const inputString = "abbcccd";
const queries = [1, 3, 9, 8];
console.log(weightedStrings(inputString, queries)); // Output: ["Yes", "Yes", "Yes", "No"]







