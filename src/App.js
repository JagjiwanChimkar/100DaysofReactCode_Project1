import {useState,useEffect} from 'react'
import './App.css';
import Data from './data.json'
import Item from './Item';
import ReactPaginate from 'react-paginate';
import Dashboard from './Dashboard';

function App() {
  const [pagination, setPagination] = useState({
    data: Data,
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: []
  });

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
    }))
  }, [pagination.numberPerPage, pagination.offset])

  const handlePageClick = event => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage
    setPagination({ ...pagination, offset })
  }
  return (
    <div className="App">
     <Dashboard Data={Data}/>
      {pagination.currentData && pagination.currentData.map(((item, index) => (
        <Item key={index} item={item}/>
       ))
      )}
      <div className="pagination_nav">
      <p>Showing {pagination.offset+1} to {(Data.length-pagination.offset)<10?Data.length:pagination.offset+10} of {Data.length}</p>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        previousClassName={'btn'}
        nextClassName={'btn'}
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active_page'}
      />
      </div>
     
    </div>
  );
}

export default App;
