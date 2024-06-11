/*
* 110.平衡二叉树 
* 给定一个二叉树，判断它是否是 平衡二叉树  
*  
* 示例 1：
* 输入：root = [3,9,20,null,null,15,7]
* 输出：true
* 示例 2：
* 输入：root = [1,2,2,3,3,null,null,4,4]
* 输出：false
* 示例 3：
* 输入：root = []
* 输出：true
*  
* 提示：
* 	树中的节点数在范围 [0, 5000] 内
* 	-104 <= Node.val <= 104
* 
*/


// @QUESTION_START
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  isBalanced,
  {
    data: [[ [3,9,20,null,null,15,7]],[ [1,2,2,3,3,null,null,4,4]],[ []]],
    structure: ["TreeNode"]
  },
  {
    data: [true,false,true],
    structure: ["boolean"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/balanced-binary-tree/');
