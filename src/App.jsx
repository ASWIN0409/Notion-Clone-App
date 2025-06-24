import { Provider } from "react-redux";
import Routing from "./Routing/Routing";
import { store } from "./Store/Slice/Store";
import { ErrorBoundary } from "react-error-boundary";
import CustomErrorBoundary from "./Components/ErrorBoundary/CustomErrorBoundary";
import { useLocation } from "react-router-dom";


function App() {

  const location = useLocation();

  return (
    <Provider store={store}>
      <ErrorBoundary
        FallbackComponent={CustomErrorBoundary}
        resetKeys={[location.pathname]}>
        <Routing />
      </ErrorBoundary>
    </Provider>
  )
}

export default App;
