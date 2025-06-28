import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Modal from '../components/Modal'
import useEmployeeStore from '../store/employeeStore'
import Select from 'react-select'

// Tableau des états américains
const states = [
  {
    "name": "Alabama",
    "abbreviation": "AL"
  },
  {
    "name": "Alaska",
    "abbreviation": "AK"
  },
  {
    "name": "American Samoa",
    "abbreviation": "AS"
  },
  {
    "name": "Arizona",
    "abbreviation": "AZ"
  },
  {
    "name": "Arkansas",
    "abbreviation": "AR"
  },
  {
    "name": "California",
    "abbreviation": "CA"
  },
  {
    "name": "Colorado",
    "abbreviation": "CO"
  },
  {
    "name": "Connecticut",
    "abbreviation": "CT"
  },
  {
    "name": "Delaware",
    "abbreviation": "DE"
  },
  {
    "name": "District Of Columbia",
    "abbreviation": "DC"
  },
  {
    "name": "Federated States Of Micronesia",
    "abbreviation": "FM"
  },
  {
    "name": "Florida",
    "abbreviation": "FL"
  },
  {
    "name": "Georgia",
    "abbreviation": "GA"
  },
  {
    "name": "Guam",
    "abbreviation": "GU"
  },
  {
    "name": "Hawaii",
    "abbreviation": "HI"
  },
  {
    "name": "Idaho",
    "abbreviation": "ID"
  },
  {
    "name": "Illinois",
    "abbreviation": "IL"
  },
  {
    "name": "Indiana",
    "abbreviation": "IN"
  },
  {
    "name": "Iowa",
    "abbreviation": "IA"
  },
  {
    "name": "Kansas",
    "abbreviation": "KS"
  },
  {
    "name": "Kentucky",
    "abbreviation": "KY"
  },
  {
    "name": "Louisiana",
    "abbreviation": "LA"
  },
  {
    "name": "Maine",
    "abbreviation": "ME"
  },
  {
    "name": "Marshall Islands",
    "abbreviation": "MH"
  },
  {
    "name": "Maryland",
    "abbreviation": "MD"
  },
  {
    "name": "Massachusetts",
    "abbreviation": "MA"
  },
  {
    "name": "Michigan",
    "abbreviation": "MI"
  },
  {
    "name": "Minnesota",
    "abbreviation": "MN"
  },
  {
    "name": "Mississippi",
    "abbreviation": "MS"
  },
  {
    "name": "Missouri",
    "abbreviation": "MO"
  },
  {
    "name": "Montana",
    "abbreviation": "MT"
  },
  {
    "name": "Nebraska",
    "abbreviation": "NE"
  },
  {
    "name": "Nevada",
    "abbreviation": "NV"
  },
  {
    "name": "New Hampshire",
    "abbreviation": "NH"
  },
  {
    "name": "New Jersey",
    "abbreviation": "NJ"
  },
  {
    "name": "New Mexico",
    "abbreviation": "NM"
  },
  {
    "name": "New York",
    "abbreviation": "NY"
  },
  {
    "name": "North Carolina",
    "abbreviation": "NC"
  },
  {
    "name": "North Dakota",
    "abbreviation": "ND"
  },
  {
    "name": "Northern Mariana Islands",
    "abbreviation": "MP"
  },
  {
    "name": "Ohio",
    "abbreviation": "OH"
  },
  {
    "name": "Oklahoma",
    "abbreviation": "OK"
  },
  {
    "name": "Oregon",
    "abbreviation": "OR"
  },
  {
    "name": "Palau",
    "abbreviation": "PW"
  },
  {
    "name": "Pennsylvania",
    "abbreviation": "PA"
  },
  {
    "name": "Puerto Rico",
    "abbreviation": "PR"
  },
  {
    "name": "Rhode Island",
    "abbreviation": "RI"
  },
  {
    "name": "South Carolina",
    "abbreviation": "SC"
  },
  {
    "name": "South Dakota",
    "abbreviation": "SD"
  },
  {
    "name": "Tennessee",
    "abbreviation": "TN"
  },
  {
    "name": "Texas",
    "abbreviation": "TX"
  },
  {
    "name": "Utah",
    "abbreviation": "UT"
  },
  {
    "name": "Vermont",
    "abbreviation": "VT"
  },
  {
    "name": "Virgin Islands",
    "abbreviation": "VI"
  },
  {
    "name": "Virginia",
    "abbreviation": "VA"
  },
  {
    "name": "Washington",
    "abbreviation": "WA"
  },
  {
    "name": "West Virginia",
    "abbreviation": "WV"
  },
  {
    "name": "Wisconsin",
    "abbreviation": "WI"
  },
  {
    "name": "Wyoming",
    "abbreviation": "WY"
  }
]

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
const SelectStates = ({ value, onChange }) => {
  return (
    <Select
      options={stateOptions}
      value={stateOptions.find(option => option.label === value)}
      onChange={(selectedOption) => onChange(selectedOption ? selectedOption.label : '')}
      placeholder="Select a state"
      isClearable
      isSearchable
      styles={customSelectStyles}
    />
  )
}

const departments = [
  {
    name: "Sales",
    abbreviation: "SAL"
  },
 {
    name: "Marketing",
    abbreviation: "MAR"
  },
  {
    name: "Engineering",
    abbreviation: "ENG"
  },
  {
    name: "Human Resources",
    abbreviation: "HR"
  },
  {
    name: "Legal",
    abbreviation: "LEG"
  },
]

// Transformer les données pour React Select
const departmentOptions = departments.map(department => ({
  value: department.abbreviation,
  label: department.name
}))

const SelectDepartments = ({ value, onChange }) => {
  return (
    <Select
      options={departmentOptions}
      value={departmentOptions.find(option => option.label === value)}
      onChange={(selectedOption) => onChange(selectedOption ? selectedOption.label : '')}
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
      [field]: date ? date.toISOString().split('T')[0] : ''
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
              selected={formData.dateOfBirth ? new Date(formData.dateOfBirth) : null}
              onChange={(date) => handleDateChange('dateOfBirth', date)}
              showYearDropdown={true}
              scrollableYearDropdown={true}
              yearDropdownItemNumber={100}   // Plus d'années pour naissance
              maxDate={new Date()} 
              dateFormat="dd/MM/yyyy"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              selected={formData.startDate ? new Date(formData.startDate) : null}
              onChange={(date) => handleDateChange('startDate', date)}
              showYearDropdown={true}
              scrollableYearDropdown={true}
              yearDropdownItemNumber={100}   // Plus d'années pour naissance
              dateFormat="dd/MM/yyyy"
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <SelectStates 
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
              />
            </div>
            
          </fieldset>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            <SelectDepartments
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