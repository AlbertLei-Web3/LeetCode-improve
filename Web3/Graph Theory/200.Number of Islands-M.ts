// // 问题描述
// // 给你一个由 '1'（陆地）和 '0'（水）组成的二维网格地图，请你计算网格中岛屿的数量。
// // 岛屿是由相邻的陆地单元组成的区域，这里的「相邻」要求两个陆地单元水平或者竖直相邻。你可以假设网格的四个边缘都被水包围着。

// 1.遍历整个网格
// 2.找到陆地（1），使用DFS或BFS将与之相连的所有陆地标记为已访问
// 3.岛屿数量+1
// 4.继续遍历剩余网格
function numIslands(grid: string[][]): number {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length; // 行数 row
    const cols = grid[0].length; // 列数 column
    let islandCount = 0; // 岛屿数量

    // Function DFS to mark all connected land
    function dfs(r: number, c: number) {
        // Check bounds
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
            return;
    }

    // Mark as visited
    grid[r][c] = '0';

    // Visit all adjacent cells (up, down, left, right)
    dfs(r - 1, c); //up
    dfs(r + 1, c); //down
    dfs(r, c - 1); //left
    dfs(r, c + 1); //right
    }

    // Iterate through all cells in the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                islandCount++; // found an new island
                dfs(r, c); // mark all connected land as visited
            }
        }
    }

    return islandCount;
}

// 复杂度分析
// 时间复杂度: O(M×N)，其中 M 是行数，N 是列数。我们需要访问矩阵中的每个点一次。
// 空间复杂度: O(M×N)，在最坏情况下，整个网格都是陆地，递归深度为 M×N。
// 这个问题是理解图的连通性和DFS/BFS应用的好例子。希望这个简单题能帮助你理解图论的基本概念！