const formatDate = (strDate) => {
  const date = new Date(strDate)
  const month = date.toLocaleDateString('default', { month: 'long' })

  return `${month} ${date.getDate()}, ${date.getFullYear()}`
}

export default {
  formatDate,
}
