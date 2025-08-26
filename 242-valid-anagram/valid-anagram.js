/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let war=s.split("").sort().join()
    let war1=t.split("").sort().join()
    return war===war1;
};
console.log(isAnagram("listen","silent"));