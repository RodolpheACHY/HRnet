# HRnet - Employee Management System

A modern React application for managing employee data with a user-friendly interface.

## 🚀 Features

- **Create Employee**: Add new employees with comprehensive form validation
- **Employee List**: View all employees in a sortable and searchable table
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Data Persistence**: Employee data is saved in localStorage
- **Modern UI**: Clean and intuitive interface built with React

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/RodolpheACHY/HRnet.git
cd HRnet
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 🎯 Usage

### Creating an Employee
1. Navigate to the "Create Employee" page
2. Fill out the employee information form
3. Click "Save" to add the employee to the system

### Viewing Employees
1. Go to "View Current Employees" page
2. Use the search bar to find specific employees
3. Sort by any column by clicking the headers
4. Adjust the number of entries per page

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **React Router** - Navigation
- **React DatePicker** - Date selection
- **React Select** - Enhanced select components
- **TanStack Table** - Data table with sorting and filtering
- **Zustand** - State management
- **CSS3** - Styling

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.jsx
│   ├── Modal.jsx
│   └── Navigation.jsx
├── pages/              # Main application pages
│   ├── CreateEmployee.jsx
│   └── EmployeeList.jsx
├── store/              # State management
│   └── employeeStore.js
├── data/               # Static data files
│   ├── states.js
│   └── departments.js
└── App.jsx             # Main application component
```

## 🎨 Features in Detail

### Form Validation
- Required field validation
- Date range validation
- Real-time form feedback

### Data Table
- Sorting by any column
- Global search functionality
- Pagination controls
- Responsive design for mobile devices

### Data Persistence
- Automatic saving to localStorage
- Data survives browser refresh
- Easy data management

## 🚀 Deployment

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name**
- GitHub: [@RodolpheACHY](https://github.com/RodolpheACHY/)

## 🙏 Acknowledgments

- React team for the amazing framework
- TanStack for the powerful table library
- All contributors and users of this project
