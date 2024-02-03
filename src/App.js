import { store } from "./src/Redux/store";
import Router from "./src/Routes";
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
