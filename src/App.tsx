import './App.css';
import UseCallbackTeste from './pages/HooksTeste/UseCallbackTeste';
import UseContextTeste from './pages/HooksTeste/UseContextTeste';
import UseDebugValueTeste from './pages/HooksTeste/UseDebugValueTeste';
import UseEffectTeste from './pages/HooksTeste/UseEffectTeste';
import UseLayoutEffectTeste from './pages/HooksTeste/UseLayoutEffectTeste';
import UseMemoTeste from './pages/HooksTeste/UseMemoTeste';
import UseReducerTeste from './pages/HooksTeste/UseReducerTeste';
import UseRefTeste from './pages/HooksTeste/UseRefTeste';
import UseStateTeste from './pages/HooksTeste/UseStateTeste';

function App() {
  return (
    <div className="App">
      <UseStateTeste/>
      <hr style={{ width: "100%" }} />
      <UseReducerTeste />
      <hr style={{ width: "100%" }} />
      <UseEffectTeste />
      <hr style={{ width: "100%" }} />
      <UseLayoutEffectTeste />
      <hr style={{ width: "100%" }} />
      <UseContextTeste />
      <hr style={{ width: "100%" }} />
      <UseDebugValueTeste />
      <hr style={{ width: "100%" }} />
      <UseMemoTeste />
      <hr style={{ width: "100%" }} />
      <UseCallbackTeste />
      <hr style={{ width: "100%" }} />
      <UseRefTeste />
      <hr style={{ width: "100%" }} />
    </div>
  );
}

export default App;
