import { mockEmployees } from '../datas/mockData';

// Fonction pour charger les données de test
export const loadMockData = (addEmployee) => {
  console.log('Chargement des données de test...');
  mockEmployees.forEach(employee => {
    addEmployee(employee);
  });
  console.log(`${mockEmployees.length} employés chargés avec succès !`);
}; 