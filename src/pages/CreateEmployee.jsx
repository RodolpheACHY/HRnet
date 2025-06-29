import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Modal from '../components/Modal'
import useEmployeeStore from '../store/employeeStore'
import Select from 'react-select'
import { departments } from '../datas/departments'
import { states } from '../datas/states'

// Transformer les données pour React Select
const stateOptions = states.map(state => ({
  value: state.abbreviation,
  label: state.name
}))

// Styles personnalisés pour React Select
const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    height: '2.75rem', // Même hauteur que les autres inputs
    minHeight: '2.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: state.isFocused ? '0 0 0 2px rgba(52, 152, 219, 0.2)' : 'none',
    borderColor: state.isFocused ? '#3498db' : '#ddd',
    '&:hover': {
      borderColor: '#3498db'
    }
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '2.75rem',
    padding: '0 0.75rem',
    display: 'flex',
    alignItems: 'center'
  }),
  input: (provided) => ({
    ...provided,
    margin: '0px',
    padding: '0px'
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#6c757d'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#2c3e50'
  })
}

// Composant SelectStates
const SelectStates = (props) => {
  return (
    <Select
      {...props} // passe toutes les props reçues par SelectStates
      options={stateOptions}
      value={stateOptions.find(option => option.label === props.value)}
      onChange={(selectedOption) => props.onChange(selectedOption ? selectedOption.label : '')}
      placeholder="Select a state"
      isClearable
      isSearchable
      styles={customSelectStyles}
    />
  )
}


// Transformer les données pour React Select
const departmentOptions = departments.map(department => ({
  value: department.abbreviation,
  label: department.name
}))

const SelectDepartments = (props) => {
  return (
    <Select
      {...props} // passe toutes les props reçues par SelectStates
      options={departmentOptions}
      value={departmentOptions.find(option => option.label === props.value)}
      onChange={(selectedOption) => props.onChange(selectedOption ? selectedOption.label : '')}
      placeholder="Select a department"
      isClearable
      isSearchable
      styles={customSelectStyles}
    />
  )
}

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  })



  const [showModal, setShowModal] = useState(false)
  const addEmployee = useEmployeeStore((state) => state.addEmployee)

  const handleSubmit = (e) => {
    e.preventDefault()

  // Validation manuelle
  if (!formData.state) {
    alert('Please select a state.')
    return
  }

  // Validation manuelle
  if (!formData.department) {
    alert('Please select a department.')
    return
  }
    setShowModal(true) // Ouvre la modale de confirmation
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDateChange = (field, date) => {
    setFormData({
      ...formData,
      [field]: date ? date.toLocaleDateString('en-US') : ''
    })
  }

  // Gestionnaire pour le composant SelectStates
  const handleStateChange = (stateValue) => {
    setFormData({
      ...formData,
      state: stateValue
    })
  }

  const handleDepartementChange = (departmentValue) => {
    setFormData({
      ...formData,
      department: departmentValue
    })
  }

  const handleConfirm = () => {
    setShowModal(false)
    addEmployee(formData) // Sauvegarde dans le store Zustand
    // Reset du formulaire
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: ''
    })
    console.log('Employee saved successfully!')
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Create Employee</h2>
      </div>
      
      <div className="page-content">
        <form onSubmit={handleSubmit} className="employee-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <DatePicker
              id="dateOfBirth"
              selected={formData.dateOfBirth ? new Date(formData.dateOfBirth) : null}
              onChange={(date) => handleDateChange('dateOfBirth', date)}
              showYearDropdown={true}
              scrollableYearDropdown={true}
              yearDropdownItemNumber={100}   // Plus d'années pour naissance
              maxDate={new Date()} 
              dateFormat="MM/dd/yyyy"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              id="startDate"
              selected={formData.startDate ? new Date(formData.startDate) : null}
              onChange={(date) => handleDateChange('startDate', date)}
              showYearDropdown={true}
              scrollableYearDropdown={true}
              yearDropdownItemNumber={100}   // Plus d'années pour naissance
              dateFormat="MM/dd/yyyy"
              required
            />
          </div>

          <fieldset className="address">
            <legend>Address</legend>

            <div className="form-group">
              <label htmlFor="street">Street</label>
              <input 
                id="street" 
                name="street"
                type="text" 
                value={formData.street}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input 
                id="city" 
                name="city"
                type="text" 
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <SelectStates
                inputId="state"
                value={formData.state}
                onChange={handleStateChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input 
                id="zipCode" 
                name="zipCode"
                type="number" 
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
            
          </fieldset>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            <SelectDepartments
              inputId="department"
              value={formData.department}
              onChange={handleDepartementChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Save
          </button>
        </form>
      </div>
      <Modal 
        isOpen={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        employeeData={formData}
      />
    </div>
  )
}

export default CreateEmployee