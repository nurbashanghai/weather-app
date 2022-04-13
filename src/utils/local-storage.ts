export const saveToLocalStorage = (citiesArray: any) => {
  localStorage.setItem('cities', JSON.stringify(citiesArray))
}

export const getFromLocalStorage = () => {
  const cities = localStorage.getItem('cities')
  return cities?.length ? JSON.parse(cities) : []
}