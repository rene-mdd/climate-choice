import './App.css';
import CompanyList from './components/companyList';

function App() {
  return (
    <div className="main">
      <header className="main-header">
        <ul>
          <li>
            <img
              src="https://theclimatechoice.com/wp-content/uploads/2020/01/The_Climate_Choice_LOGO_Blue.svg"
              alt="climate-choice-logo"
            />
          </li>
          <li style={{ float: 'right' }}>
            <a href="#about">About</a>
          </li>
        </ul>
      </header>
      <CompanyList />
    </div>
  );
}

export default App;
