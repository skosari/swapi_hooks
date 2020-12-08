import './App.css';
import CounterClass from './CounterClass'
import CounterHooks from './CounterHooks'
import Toggler from './Toggler'
import { FormHooks, HookedFormHooks } from './FormHooks'
import SWFilms from './StarWarsHooks'
function App() {
  return (
    <div className="App">
      {/* <CounterClass />
      <CounterHooks />
      <Toggler />
      <FormHooks />
      <HookedFormHooks /> */}
      <SWFilms />
    </div>
  );
}

export default App;
