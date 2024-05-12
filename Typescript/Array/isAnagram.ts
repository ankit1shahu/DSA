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
// best case scenario

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let charCount: Map<string, number> = new Map();
  for (let char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!charCount.has(char)) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
    if (charCount.get(char) == 0) {
      charCount.delete(char);
    }
  }

  return charCount.size == 0;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("hello world", "world hello"));
