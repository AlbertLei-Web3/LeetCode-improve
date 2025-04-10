// 问题描述
// 有 n 个城市通过一些航班连接。给你一个数组 flights，其中 flights[i] = [fromi, toi, pricei] 
// 表示该航班从城市 fromi 开始，到达城市 toi，票价为 pricei。现在给定所有的城市和航班，
// 以及出发城市 src 和目的地 dst，你的任务是找到从 src 到 dst 最多经过 k 站中转的最便宜的价格。
// 如果没有这样的路线，则输出 -1。
function findCheapestPrice(
    n: number,
    flights: number[][],
    src: number,
    dst: number,
    k: number
): number {
   // initialize the distance array 初始化距离数组
   let prices = new Array(n).fill(Infinity);
   prices[src] = 0;

   // K stops means K + 1 edges 最多允许 k 站中转，意味着需要进行 k + 1 轮松弛操作
   for (let i = 0; i <= k; i++) {
    // temp array to store the new prices 创建临时数组来存储这一轮的更新
    let temp = [...prices];

    // iterate through all flights 遍历所有航班
    for (const [from, to, price] of flights) {
        // skip the flight if the initial city is not reachable 如果起始城市还不可达，跳过
        if (prices[from] === Infinity) continue;

        // update the cheapest price for the destination city 更新到达城市的最小价格
        temp[to] = Math.min(temp[to], prices[from] + price);
    }

    prices = temp;
   }

   return prices[dst] === Infinity ? -1 : prices[dst];
    
}