import "./App.css";
import { AuthenticationContextProvider } from "./context/AuthenticationContext";
import ShoppingCartContext, {
  ShoppingCartProvider,
} from "./context/ShoppingCartContext";
import Router from "./Router/Router";

function App() {
  return (
    <AuthenticationContextProvider>
      <ShoppingCartProvider>
        <Router />
      </ShoppingCartProvider>
    </AuthenticationContextProvider>
  );
}

export default App;
