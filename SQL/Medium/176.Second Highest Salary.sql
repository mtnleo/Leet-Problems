(SELECT e.salary AS SecondHighestSalary
FROM Employee e
WHERE e.salary <    (SELECT MAX(e1.salary)
                     FROM Employee e1)
ORDER BY salary DESC
LIMIT 1)
UNION ALL
SELECT NULL
LIMIT 1;