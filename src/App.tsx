import { Provider } from "react-redux";
import store from "redux/store";
import "./localization/i18n";
import "./styles/index.css";
import AppProvider from "./context/AppContext";
import Routing from "router";

function App(): JSX.Element {
  return (
    <AppProvider>
      <Provider store={store}>
        <Routing />
      </Provider>
    </AppProvider>
  );
}

export default App;
