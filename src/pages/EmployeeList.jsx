import { useState, useMemo } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table'
import useEmployeeStore from '../store/employeeStore'

const EmployeeList = () => {
  const employees = useEmployeeStore((state) => state.employees)
  const [sorting, setSorting] = useState([])
  const [globalFilter, setGlobalFilter] = useState('')

  // Helper pour créer les colonnes
  const columnHelper = createColumnHelper()

  // Définition des colonnes
  const columns = useMemo(
    () => [
      columnHelper.accessor('firstName', {
        header: 'First Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('lastName', {
        header: 'Last Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('startDate', {
        header: 'Start Date',
        cell: info => {
          const date = new Date(info.getValue())
          return date.toLocaleDateString('en-US')
        },
      }),
      columnHelper.accessor('department', {
        header: 'Department',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('dateOfBirth', {
        header: 'Date of Birth',
        cell: info => {
          const date = new Date(info.getValue())
          return date.toLocaleDateString('en-US')
        },
      }),
      columnHelper.accessor('street', {
        header: 'Street',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('city', {
        header: 'City',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('state', {
        header: 'State',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('zipCode', {
        header: 'Zip Code',
        cell: info => info.getValue(),
      }),
    ],
    [columnHelper]
  )

  // Configuration de la table
  const table = useReactTable({
    data: employees,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Current Employees</h2>
        <p>{employees.length} employee(s) found</p>
      </div>
      
      <div className="page-content">
        {/* Select for Pagination: Employees per page */}
        <div className="table-controls">
          <div className="table-length">
            <label htmlFor="page-size-select">
              Show 
              <select
                id="page-size-select"
                value={table.getState().pagination.pageSize}
                onChange={e => {
                  table.setPageSize(Number(e.target.value))
                }}
                className="length-select"
              >
                {[10, 25, 50, 100].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
              entries
            </label>
          </div>

          {/* Search bar */}
          <div className="table-search">
          <label htmlFor="search-input" className="sr-only">Search</label> 
            <input
              id="search-input"
              type="text"
              placeholder="Rechercher un employé..."
              value={globalFilter ?? ''}
              onChange={e => setGlobalFilter(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="employee-table-container">
          <table className="employee-table">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th 
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className={header.column.getCanSort() ? 'sortable' : ''}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted()] ?? null}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="table-pagination">
          <div className="pagination-info">
            {globalFilter ? (
              <span>
                Showing {table.getFilteredRowModel().rows.length} entries (filtered from {employees.length} total entries)
              </span>
            ) : (
              <span>
                Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{' '}
                {Math.min(
                  (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                  employees.length
                )} of {employees.length} entries
              </span>
            )}
          </div>
          
          <div className="pagination-controls">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="pagination-btn"
            >
              Previous
            </button>
            
            <span className="page-info"> 
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </span> 
            {table.getPageCount() > 1 && (
              <div className="page-number-buttons">
                {[...Array(table.getPageCount()).keys()].map((pageIdx) => (
                  <button
                    key={pageIdx}
                    onClick={() => table.setPageIndex(pageIdx)}
                    className={table.getState().pagination.pageIndex === pageIdx ? 'active' : ''}
                  >
                    {pageIdx + 1}
                  </button>
                ))}
              </div>
            )}
            
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="pagination-btn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeList 