let alfabetet = ["A","B","C","D","E","F","G","h","I","J","k","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö"]
let secretMesage = "general kenobe"
// function cesarchifer(string) {
//     let newarr = str.split("");
//     let newstring
//     for (let i = 0; i < array.length; i++) {
        
        
//     }
// }
// secretMesage[1].charCodeAt
function cesarchifer(string , shift) {
    let newstring = ""
    console.log(string)
    for (let i = 0; i < string.length; i++) {
        newstring = newstring + String.fromCharCode(string.charCodeAt(i)+shift) 
        
    }
    return newstring
}

console.log(cesarchifer(secretMesage,1))