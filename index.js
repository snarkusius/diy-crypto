let alfabetet = ["A",
"B",
"C",
"D",
"E",
"F",
"G",
"h",
"I",
"J",
"k",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
]

let frequencies = [0.015,
    0.028,
    0.043,
    0.13,
    0.022,
    0.02,
    0.061,
    0.07,
    0.0015,
    0.0077,
    0.04,
    0.024,
    0.067,
    0.075,
    0.019,
    0.00095,
    0.06,
    0.063,
    0.091,
    0.028,
    0.0098,
    0.024,
    0.0015,
    0.02,

    0.00074]
let secretMesage = "lycka till med den här fucker"

import { cesarchifer, cesarchiferLim, fromCesarchifer, fromCesarchiferLim} from "./diycrypto.js"



function frequens(string, leter) {
    return (string.split(leter).length-1)/string.length
}
function frequensOfString(string) {
    let newarr = []
    let alfabetet = ["A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "h",
    "I",
    "J",
    "k",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    ]
    for (let i = 0; i < alfabetet.length; i++) {
        newarr.push(frequens(string,alfabetet[i])) 
    }
    return newarr
}
console.log(frequensOfString("GJSNHJYTJFHMTYMJWFSIYMJUQFSJYUQJFXJ"))
// console.log(counter("GJSNHJYTJFHMTYMJWFSIYMJUQFSJYUQJFXJ","J"))
// console.log(cesarchifer(secretMesage,7))
console.log(fromCesarchiferLim("GJSNHJYTJFHMTYMJWFSIYMJUQFSJYUQJFXJ",5))

function crackcesarchifer(string) {
    let shift
    let freqarr = frequensOfString(string)
    

}
