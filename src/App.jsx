import { Provider } from "react-redux";
import Routing from "./Routing/Routing";
import { store } from "./Store/Slice/Store";


function App() {

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  )
}

export default App;
