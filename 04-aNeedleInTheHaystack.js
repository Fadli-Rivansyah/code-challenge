// function findNeedle(haystack) {
//     const needle = haystack.indexOf('needle');
//     return "found the needle at position " + needle;
// }
// const findNeedle = (haystack) => {
//     const needle = haystack.indexOf('needle');
//     return "found the needle at position " + needle;
// }

const findNeedle = haystack  => `found the needle at position ${haystack.indexOf("needle")}`;

  console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));