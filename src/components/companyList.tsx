/* eslint-disable  @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import { Api, Companies, Contacts } from "../models/model"
import Dropdown from "./dropdown"

const fetchURL = 'http://localhost:3001/companies/';


function CompanyList(): ReactElement {
  const [data, setData] = useState<Api[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<Api[]>(fetchURL);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    console.log(data);
    fetchData();
  }, []);

  return (<div className="center">

    {data.map((element: Companies, index: number) => 
      <div className="card" key={element.id}>
        <div className="additional">
          <div className="level center">
            <img src={`https://picsum.photos/200/300?random=${index}`} alt="logo" width="50" height="50" />
          </div>
          <div>
            <h5>{element.name}</h5>
          </div>
          <div>
            <p>Amount of employees</p>
            <p>{element.employee_count}</p>
          </div>
        </div>
        <div className="additional-left">
          <header>
            <p>{element.city}<span>{element.country}</span></p>

          </header>
          <div className="description">
            <p>{element.description}</p>
          </div>
          <footer>
            <div>
              <p>Email: {element.email}</p>
              <p>Phone: {element.phone}</p>
              <p>Address: {element.street}, {element.zip_code}.</p>
              <p>Website: {element.website}</p>
            </div>
            <Dropdown contact={element.contact_persons} />
          </footer>
        </div>
      </div>
      
    )}
  </div>)
}


export default CompanyList;
