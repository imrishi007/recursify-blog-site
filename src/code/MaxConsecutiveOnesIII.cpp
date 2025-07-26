#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int ans = 0, zeroCnt = 0, l = 0, n = nums.size(), r = 0;

        // sliding window loop
        while (r < n) {
            if (nums[r] == 0) zeroCnt++;  // count zeroes in window

            // if zero count exceeds k, move the left pointer to shrink window
            while (zeroCnt > k) {
                if (nums[l] == 0) zeroCnt--;
                l++;
            }

            // update answer with current window size
            ans = max(ans, r - l + 1);
            r++;
        }

        return ans;
    }
};