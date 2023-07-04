const assert = require('assert');
const {
  getAllFestivals,
  getFestivalsByRegion,
  getFestivalsByDepartement,
  getFestivalsByDomaine
} = require('../index');

describe('Festival API', () => {
  describe('getAllFestivals', () => {
    it('should return an array of festivals', async () => {
      const festivals = await getAllFestivals();
      assert(Array.isArray(festivals) && festivals.length > 0);
    });
  });

  describe('getFestivalsByRegion', () => {
    it('should return an array of festivals for a specific region', async () => {
      const region = 'Normandie';
      const festivals = await getFestivalsByRegion(region);
      assert(Array.isArray(festivals) && festivals.length > 0);
    });
  });

  describe('getFestivalsByDepartement', () => {
    it('should return an array of festivals for a specific departement', async () => {
      const departement = '92';
      const festivals = await getFestivalsByDepartement(departement);
      assert(Array.isArray(festivals) && festivals.length > 0);
    });
  });

  describe('getFestivalsByDomaine', () => {
    it('should return an array of festivals for a specific domaine', async () => {
      const domaine = 'Danse';
      const festivals = await getFestivalsByDomaine(domaine);
      assert(Array.isArray(festivals) && festivals.length > 0);
    });
  });
});
