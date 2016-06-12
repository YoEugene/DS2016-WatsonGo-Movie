import sys
import ast

# simple argument echo script
# for v in sys.argv[1:]:
	# print v

class Solution(object):
    def genRefStr(self, str, n):
        return '0'*(n-len(str[2:]))+str[2:]

    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        n = len(nums)
        refStr = '0'*n
    
        ans = []

        for i in range(pow(2, n)):
            temp = []
            index = 0
            for ref in refStr:
                if bool(int(ref)):
                    temp.append(nums[index])
                index += 1
            ans.append(temp)
            refStr = self.genRefStr(bin(int(refStr, 2) + 1), n)

        return ans
        
for sett in sys.argv[1:]:
	sett = list(set(ast.literal_eval(sett)))
	print(Solution().subsets(sett))