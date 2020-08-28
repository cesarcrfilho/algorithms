// Available at:
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s = '') {
    const hashSet = new Set();
    let pointA = 0; // "slow" pointer
    let pointB = 0; // "fast" pointer
    let max = 0;
    
    while(pointB < s.length) {
        if(!hashSet.has(s.charAt(pointB))) {
            hashSet.add(s.charAt(pointB));
            pointB++;
            max = max > hashSet.size ? max : hashSet.size;
        }
        else {
            hashSet.delete(s.charAt(pointA));
            pointA++;
        } 
    }
    return max;
};

// some test cases
console.log(lengthOfLongestSubstring('abcabcbbbaaakdhb'));
console.log(lengthOfLongestSubstring('abca'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring());
