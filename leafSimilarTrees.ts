function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  function dfs(node: TreeNode | null, arr: number[]): number[] {
    if (!node) return arr;
    if (!node.left && !node.right) arr.push(node.val);
    dfs(node.left, arr);
    dfs(node.right, arr);
    return arr;
  }

  return dfs(root1, []).toString() === dfs(root2, []).toString();
}
