
function overfolw(number) {
    if (number<0){
        return number + 128
    }
    return number % 128
}
function overfolwMod(number,low,hig) {
    if (number<low){
        return number + hig
    }
    return number % hig
}
export function cesarchifer(string , shift) {
    let newstring = ""
    for (let i = 0; i < string.length; i++) {
        newstring = newstring + String.fromCharCode(overfolw(string.charCodeAt(i)+shift)) 
        
    }
    return newstring
}
export function fromCesarchifer(string , shift) {
    let newstring = ""
    for (let i = 0; i < string.length; i++) {
        newstring = newstring + String.fromCharCode(overfolw(string.charCodeAt(i)-shift)) 
        
    }
    return newstring
}
export function cesarchiferLim(string , shift) {
    let newstring = ""
    for (let i = 0; i < string.length; i++) {
        newstring = newstring + String.fromCharCode(overfolwMod(string.charCodeAt(i)-shift),65,90) 
        
    }
    return newstring
}
export function fromCesarchiferLim(string , shift) {
    let newstring = ""
    for (let i = 0; i < string.length; i++) {
        newstring = newstring + String.fromCharCode(overfolwMod(string.charCodeAt(i)-shift),65,90) 
        
    }
    return newstring
}

