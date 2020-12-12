const optionsSort = [
  {value: "date-desc", name: "Plus récentes"}, 
  {value: "date-asc", name: "Plus anciennes"}, 
  {value: "price-asc", name: "Prix croissants"}, 
  {value: "price-desc", name: "Prix décroissants"}, 
]

export default optionsSort.map((item, index) => {
  return (
    <option 
    key={index}
    value={item.value}>{item.name}</option>
  )
})