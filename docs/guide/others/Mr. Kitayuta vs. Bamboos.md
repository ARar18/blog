# Mr. Kitayuta vs. Bamboos

## 题面翻译

- 给定 $n$ 个数 $h_{1 \dots n}$。
- 你需要进行 $m$ 轮操作，每轮操作为 $k$ 次修改，每次修改可以选择一个数 $h_i$ 修改为 $\max(h_i - p, 0)$。
- 每轮操作后每个 $h_i$ 将会被修改为 $h_i + a_i$。
- 你需要最小化最终 $h_{1 \dots n}$ 中的最大值。
- $n \le 10^5$，$m \le 5 \times 10^3$，$k \le 10$。

## 题目描述

Mr. Kitayuta's garden is planted with $ n $ bamboos. (Bamboos are tall, fast-growing tropical plants with hollow stems.) At the moment, the height of the $ i $ -th bamboo is $ h_{i} $ meters, and it grows $ a_{i} $ meters at the end of each day.

Actually, Mr. Kitayuta hates these bamboos. He once attempted to cut them down, but failed because their stems are too hard. Mr. Kitayuta have not given up, however. He has crafted Magical Hammer with his intelligence to drive them into the ground.

He can use Magical Hammer at most $ k $ times during each day, due to his limited Magic Power. Each time he beat a bamboo with Magical Hammer, its height decreases by $ p $ meters. If the height would become negative by this change, it will become $ 0 $ meters instead (it does not disappear). In other words, if a bamboo whose height is $ h $ meters is beaten with Magical Hammer, its new height will be $ max(0,h-p) $ meters. It is possible to beat the same bamboo more than once in a day.

Mr. Kitayuta will fight the bamboos for $ m $ days, starting today. His purpose is to minimize the height of the tallest bamboo after $ m $ days (that is, $ m $ iterations of "Mr. Kitayuta beats the bamboos and then they grow"). Find the lowest possible height of the tallest bamboo after $ m $ days.

## 输入格式

The first line of the input contains four space-separated integers $ n $ , $ m $ , $ k $ and $ p $ ( $ 1<=n<=10^{5},1<=m<=5000,1<=k<=10,1<=p<=10^{9} $ ). They represent the number of the bamboos in Mr. Kitayuta's garden, the duration of Mr. Kitayuta's fight in days, the maximum number of times that Mr. Kitayuta beat the bamboos during each day, and the power of Magic Hammer, respectively.

The following $ n $ lines describe the properties of the bamboos. The $ i $ -th of them ( $ 1<=i<=n $ ) contains two space-separated integers $ h_{i} $ and $ a_{i} $ ( $ 0<=h_{i}<=10^{9},1<=a_{i}<=10^{9} $ ), denoting the initial height and the growth rate of the $ i $ -th bamboo, respectively.

## 输出格式

Print the lowest possible height of the tallest bamboo after $ m $ days.

## 样例 #1

### 样例输入 #1

```
3 1 2 5
10 10
10 10
15 2
```

### 样例输出 #1

```
17
```

## 样例 #2

### 样例输入 #2

```
2 10 10 1000000000
0 10
0 10
```

### 样例输出 #2

```
10
```

## 样例 #3

### 样例输入 #3

```
5 3 3 10
9 5
9 2
4 7
9 10
3 8
```

### 样例输出 #3

```
14
```