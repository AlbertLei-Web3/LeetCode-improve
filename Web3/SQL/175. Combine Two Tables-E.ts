// 题目描述：
// 有两个表（可以类比为两个数组），分别是：
// Person(id, name)
// Address(personId, city, state)
// 要求输出每个 Person 的 name, city, state，即使该人没有地址信息也要显示（地址为 null）。
// 这就是 SQL 中的 LEFT JOIN。我们要 以 Person 为主表，将其与 Address 合并。

// SELECT p.Id, p.Name, a.State：选择 Person 表中的 Id 和 Name，还有 Address 表中的 State。
// FROM Person p：以 Person 表作为主表，起个别名 p。
// LEFT JOIN Address a ON p.Id = a.PersonId：左连接 Address 表（别名为 a），连接条件是 p.Id = a.PersonId。
// 如果某个 Person 没有对应的地址，a.State 就会是 NULL，但这个人仍然会出现在结果中。

SELECT p.Id, p.Name, a.State
FROM Person p
LEFT JOIN Address a
ON p.Id = a.PersonId

// 解释：
// 1. SELECT p.Id, p.Name, a.State：选择 Person 表中的 Id 和 Name，还有 Address 表中的 State。
// 2. FROM Person p：以 Person 表作为主表，起个别名 p。
// 3. LEFT JOIN Address a ON p.Id = a.PersonId：左连接 Address 表（别名为 a），连接条件是 p.Id = a.PersonId。

// 如果某个 Person 没有对应的地址，a.State 就会是 NULL，但这个人仍然会出现在结果中。

// 总结：
// 1. 使用 LEFT JOIN 连接两个表。
// 2. 如果某个 Person 没有对应的地址，a.State 就会是 NULL，但这个人仍然会出现在结果中。

