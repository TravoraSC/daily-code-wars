function addUsername(list) {
  const date = new Date()
  const year = date.getFullYear()
  return list.map(obj => {
    const yearLessAge = year - obj.age
    obj.username = obj.firstName.toLowerCase() + obj.lastName[0].toLowerCase() + yearLessAge
    return obj
  })
}