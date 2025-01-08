import React, { useState, useEffect } from 'react';

const CustomTable = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.razzakfashion.com/?paginate=${rowsPerPage}&page=${currentPage}&search=${search}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Fetched data:', result);
        setData(result.data || []);
        setTotalPages(result.last_page || 1);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };

    fetchData();
  }, [currentPage, search, rowsPerPage]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="p-5 bg-gray-900 text-white">
        <div className="flex justify-center gap-5">
            <a href="/">
                <button className="px-4 py-2 bg-gray-600 text-white rounded shadow mb-5">
                    Home
                </button>
            </a>
            <a href="/tshirt-designer">
                <button className="px-4 py-2 bg-gray-600 text-white rounded shadow mb-5">
                    T-Shirt Designer
                </button>
            </a>
        </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search area"
          value={search}
          onChange={handleSearchChange}
          className="p-2 border border-gray-700 rounded w-full bg-gray-800 text-white"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-gray-800 shadow-md rounded">
          <thead>
            <tr className="bg-gray-700">
            <th className="p-2">
                <button onClick={() => handleSort('name')} className="flex items-center">
                  ID {sortKey === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </button>
              </th>
              <th className="p-2">
                <button onClick={() => handleSort('name')} className="flex items-center">
                  Name {sortKey === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </button>
              </th>
              <th className="p-2">
                <button onClick={() => handleSort('email')} className="flex items-center">
                  Email {sortKey === 'email' && (sortOrder === 'asc' ? '▲' : '▼')}
                </button>
              </th>
        
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-700">
                <td className="p-2">{item.id}</td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.email}</td>
                
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-2 text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <span className="mr-2">Rows per page</span>
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="bg-gray-800 text-white border border-gray-700 rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
        <span>
          {`${(currentPage - 1) * rowsPerPage + 1}-${Math.min(
            currentPage * rowsPerPage,
            data.length
          )} of ${data.length * totalPages}`}
        </span>
        <div className="flex items-center">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className={`px-2 py-1 border rounded ${
              currentPage === 1 ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-700 text-white'
            }`}
          >
            {'<<'}
          </button>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-2 py-1 border rounded mx-1 ${
              currentPage === 1 ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-700 text-white'
            }`}
          >
            {'<'}
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-2 py-1 border rounded mx-1 ${
              currentPage === totalPages ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-700 text-white'
            }`}
          >
            {'>'}
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className={`px-2 py-1 border rounded ${
              currentPage === totalPages ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-700 text-white'
            }`}
          >
            {'>>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
