SELECT firstName, lastName, city, state
FROM Person p
LEFT JOIN Address a
ON a.personId = p.personId;