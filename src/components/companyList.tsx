import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import { Api, Companies, Contacts } from '../models/model';
import Pagination from './pagination';

const fetchURL = 'http://localhost:3001/companies/';

function CompanyList(): ReactElement {
  const [companies, setData] = useState<Api[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage] = useState(10);
  const [getCompanies, setCompanies] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Api[]>(fetchURL);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // get current companies
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  // Change pages
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const backPage = (pageNumber: number) => {
    if (currentPage <= 1) {
      setCurrentPage(1);
    } else setCurrentPage(Math.ceil(currentPage) - pageNumber);
  };
  const forwardPage = (pageNumber: number) => {
    if (currentPage >= 42) {
      setCurrentPage(42);
    } else setCurrentPage(Math.ceil(currentPage) + pageNumber);
  };

  return (
    <div className="center">
      <button
        type="button"
        onClick={() => setCompanies((prevState) => !prevState)}
      >{`${getCompanies ? 'Hide companies' : 'Show companies'}`}</button>
      <div className={`${loading ? 'spinner' : ''}`} />
      {getCompanies
        ? currentCompanies.map((element: Companies, index: number) => {
          const contacts: Contacts[] = [...element.contact_persons];
          return (
            <div className="card" key={`${element.slug} - ${element.id}`}>
              <div className="left-container">
                <div className="level">
                  <img
                    src={`https://picsum.photos/200/300?random=${index}`}
                    alt="logo"
                    width="50"
                    height="50"
                  />
                </div>
                <div>
                  <h5>{element.name}</h5>
                </div>
                <div>
                  <p>Amount of employees</p>
                  <p>{element.employee_count}</p>
                </div>
              </div>
              <div className="right-container">
                <header>
                  <h3>
                    {element.country}, {element.city}.
                    </h3>
                </header>
                <div className="description">
                  <p>{element.description}</p>
                </div>
                <footer>
                  <div>
                    <p>Email: {element.email}</p>
                    <p>Phone: {element.phone}</p>
                    <p>
                      Address: {element.street}, {element.zip_code}.
                      </p>
                    <p>Website: {element.website}</p>
                  </div>
                  <div>
                    <div className="contact">
                      {contacts.map(
                        ({ name, email, image, phone }: Contacts) => (
                          <div key={`${phone}`} className='contact-div'>
                            <div>
                              <p>{name}</p>
                              <p>{email}</p>
                              <p>{phone}</p>
                            </div>
                            <div>
                            <img
                              src="https://i.pravatar.cc/25"
                              alt="contact"
                            />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          );
        })
        : null}

      { (getCompanies && !loading) ? <Pagination
        companiesPerPage={companiesPerPage}
        totalCompanies={companies.length}
        paginate={paginate}
        currentPage={currentPage}
        backPage={backPage}
        forwardPage={forwardPage}
      /> : null}
    </div>
  );
}

export default CompanyList;
