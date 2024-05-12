/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 */
//For worst case scenario
function isAnagram(s, t) {
  let stringS = s
    .replace(/[ ,.?'";:']/g, "")
    .split("")
    .sort()
    .join("");
  let stringT = t
    .replace(/[ ,.?'";:']/g, "")
    .split("")
    .sort()
    .join("");
  if (stringS === stringT) return true;
  else return false;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("hello world", "world hello"));
//for best case scenario check typescript code in typescript folder
