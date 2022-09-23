async function getAllCities(estate){
  const getAllCities = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estate}/municipios`)
  const data = await getAllCities.json()
  return data
}

export default getAllCities