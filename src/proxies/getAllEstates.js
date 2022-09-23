async function getAllEstates(){
  const getAllEstates = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  const data = await getAllEstates.json()
  return data
}

export default getAllEstates