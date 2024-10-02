import logo from './logo.svg';
import './App.scss';
// import ComponentBasic from '../components/component_basic';
import Form from '../components/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponentBasic /> */}
        <Form />
      </header>
    </div>
  );
}

export default App;
