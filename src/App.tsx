import './App.css';
import UseEffectTeste from './pages/HooksTeste/UseEffectTeste';
import UseLayoutEffectTeste from './pages/HooksTeste/UseEffectTeste copy';
import UseReducerTeste from './pages/HooksTeste/UseReducerTeste';
import UseStateTeste from './pages/HooksTeste/UseStateTeste';

function App() {
  return (
    <div className="App">
      <UseStateTeste/>
      <hr />
      <UseReducerTeste />
      <hr />
      <UseEffectTeste />
      <hr />
      <UseLayoutEffectTeste />
      <hr />
    </div>
  );
}

export default App;
