import mockEmployees from "../datas/employees.json";
import useEmployeeStore from "../store/employeeStore";

export function loadMockDataOnce() {
  const store = useEmployeeStore.getState();

  // si des données existent déjà → NE RIEN FAIRE
  if (store.employees.length > 0) {
    console.log("Mock déjà chargé — aucune action.");
    return;
  }

  console.log("Chargement des employés mockés...");

  mockEmployees.forEach(employee => {
    store.addEmployee(employee);
  });

  console.log(`${mockEmployees.length} employés ajoutés.`);
}