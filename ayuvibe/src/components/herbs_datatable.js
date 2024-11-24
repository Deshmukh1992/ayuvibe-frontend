import React, { useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import { getHerbsData } from '../services/herbs';

const HerbsDataTable = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/herbs/?skip=0&limit=50'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Assuming the API returns an array of herbs
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'herb_name',
        Filter: TextInputFilter,
      },
      {
        Header: 'Botanical Name',
        accessor: 'botanical_name',
        Filter: TextInputFilter,
      },
      {
        Header: 'Benefits',
        accessor: 'benefits',
        Filter: TextInputFilter,
      },
      {
        Header: 'Primary Uses',
        accessor: 'primary_uses',
        Filter: TextInputFilter,
      },
      {
        Header: 'Dosage',
        accessor: 'dosage',
        Filter: TextInputFilter,
      },
      {
        Header: 'Form',
        accessor: 'form',
        Filter: TextInputFilter,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }, // Set default pageSize to 5
    },
    usePagination
  );

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error handling
  }

  return (
    <div>
      <table {...getTableProps()} className="modern-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="table-header">
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table-row">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="table-cell">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={nextPage} disabled={!canNextPage}>
          {'>'}
        </button>
        <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>

        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// Custom filter UI for text input
const TextInputFilter = ({ column: { filterValue, setFilter } }) => (
  <input
    value={filterValue || ''}
    onChange={e => {
      setFilter(e.target.value || undefined);
    }}
    placeholder={`Search...`}
  />
);

export default HerbsDataTable;
