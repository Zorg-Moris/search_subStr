
 module.exports.searhSubStr = function(str) {
   let searchAB = "AB";
   let searchBA = "BA";
   let strAB = str.indexOf(searchAB) >= 0 ? true : false;
   let strBC = str.indexOf(searchBA) >= 0 ? true : false;

   return Boolean(strAB && strBC);
 }


// second variant algoritm

// function searchStr(substring, string) {
//     let substringStartPos = substring.length - 1;
//     let subindex = substringStartPos;
//     let index = string.length - 1;
 
//     for (; subindex >= 0 && index >= 0; ) {
//       if (substring.charCodeAt(subindex) === string.charCodeAt(index)) {
//         subindex--;
//       } else if (subindex !== substringStartPos) {
//         index += substringStartPos - subindex;
//         subindex = substringStartPos;
//       }
//       index--;
//     }
//     return substringStartPos && subindex === -1;
//   }
 
//   module.exports.searhSubStr = function(string) {
//     let resAB = searchStr("AB", string);
//     let resBA = searchStr("BA", string);
//     return Boolean(resAB && resBA);
//   }
 
