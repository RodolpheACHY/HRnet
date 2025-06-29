import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useEmployeeStore = create(
  persist(
    (set, get) => ({
      employees: [],
      
      // Ajouter un employé
      addEmployee: (employee) => {
        const newEmployee = {
          ...employee,
          id: Date.now(), // ID unique simple
          createdAt: new Date().toISOString()
        }
        
        set((state) => ({
          employees: [...state.employees, newEmployee]
        }))
      },
      
      // Récupérer tous les employés
      getEmployees: () => {
        return get().employees
      },
    }),
    {
      name: 'hrnet-employees', // Clé dans localStorage
      partialize: (state) => ({ employees: state.employees }), // Ne persiste que les employés
    }
  )
)

export default useEmployeeStore

// Exposer le store globalement pour utilisation depuis la console
if (typeof window !== 'undefined') {
  window.__HRNET_STORE__ = useEmployeeStore;
} 