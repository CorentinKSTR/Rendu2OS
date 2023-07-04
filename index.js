async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.records.map(record => record.fields);
    } catch (error) {
      console.error(`Une erreur s'est produite lors de la récupération des données depuis ${url}:`, error);
      throw error;
    }
  }
  
  async function getAllFestivals() {
    const url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=';
    return fetchData(url);
  }
  
  async function getFestivalsByRegion(region) {
    const url = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.region=${region}`;
    return fetchData(url);
  }
  
  async function getFestivalsByDepartement(departement) {
    const url = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.departement=${departement}`;
    return fetchData(url);
  }
  
  async function getFestivalsByDomaine(domaine) {
    const url = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.domaine=${domaine}`;
    return fetchData(url);
  }
  
  module.exports = { getAllFestivals, getFestivalsByRegion, getFestivalsByDepartement, getFestivalsByDomaine };
  