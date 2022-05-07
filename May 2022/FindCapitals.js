// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
	const regex = /[A-Z]/g
  const result = word.match(regex)
  return result.map(a => word.indexOf(a))
};
