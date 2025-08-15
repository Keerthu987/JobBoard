import React, { useEffect, useState } from 'react'
import JobPosting from './Components/JobPosting';
import './App.css'

const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = "https://jsonfakery.com/jobs";

const App = () => {
  const [items, setItems] = useState([]);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  async function fetchItems(page) {
    setFetchingDetails(true);
    const res = await fetch(`${API_ENDPOINT}/random/${ITEMS_PER_PAGE}`);
    const jobs = await res.json();
    setItems(prev => [...prev, ...jobs]);
    setFetchingDetails(false);
  }

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  return (
    <div className="custom-app">
      <h1 className="custom-title">Job Board</h1>

      {items.length < 1 ? (
        <p className="custom-loading">Loading...</p>
      ) : (
        <div>
          <div className="custom-items" role="list">
            {items.map((item, index) => (
              <JobPosting key={`${currentPage}-${item.id || index}`} {...item} />
            ))}
          </div>

          <button
            className="custom-load-more-button"
            disabled={fetchingDetails}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            {fetchingDetails ? "Loading..." : "Load more jobs"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
