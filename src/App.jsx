import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import {useState } from 'react'
import Cards from './Components/Cards';

function App() {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]); // storing the Api data
  const [error, setError] = useState(false); // This is for showing message user enter wrong value;

  //intial the intial variables
  const accesskey = "3AT4SayGxmYTAA453Ltv18hE_gK6unoAxe2mWNr6FMU";
  let keyword = search.toLowerCase();
  let page = 3;


  // This is a event when user trigger the search
  const onsubmithandler = (e) => {
    e.preventDefault();

    // Reset error before when user enters a new keyword
    setError(false);

    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`)
      .then((response) => response.json())
      .then((d) => {
        console.log(d.results); // To check the data in console.log
        if (d.results.length === 0) { // when the user enter wrong keyowrd the data length comes zero then seterror will occur like true
          setError(true);
        }
        setData(d.results);
      }).catch((err) => {
        console.log(err.message);

      })
  }


  return (
    <>
      <Container>
        <Row>
          <Col className='col-6 mx-auto'>
            <h2 className='text-center mt-5'>Search Engine by using Unplash Api</h2>
            <form action="" className='d-flex my-4' onSubmit={onsubmithandler}>
              <input type='text' placeholder='Search any thing here.....' className='form-control rounded-0 rounded rounded-start-5 py-3' value={search} onChange={(e) => setSearch(e.target.value)} />
              <button className='btn btn-primary rounded-0 rounded rounded-end-5 py-3 w-25'>search</button>
            </form>
          </Col>
          {error && <p className='text-danger text-center'>No results found. please search with another keyword</p>}
          {data.length >= 0 ? <Cards data={data} /> : null}
        </Row>
      </Container>

    </>
  )
}

export default App;
