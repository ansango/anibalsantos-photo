const removeDuplicates = (data, key) => {
  return [...new Map(data.map((item) => [key(item), item])).values()]
}

export default removeDuplicates
