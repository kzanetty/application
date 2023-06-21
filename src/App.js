import "./App.css";
import { Link, Switch, Route } from "react-router-dom";

import path from "./consts/paths";
import { NavlistComponent } from "./ui/components/navlist/navlist.component";
import {
  FabComponent,
  FooterComponent,
  ToastrComponent,
} from "./ui/components";
import {
  HomeScreen,
  ContatoScreen,
  ServicoScreen,
  ErrorScreen,
} from "./ui/screens";
import { GlobalToastrProvider } from "./context/toastr/toastr.context";

function App() {
  return (
    <>
      <GlobalToastrProvider>
        <NavlistComponent />

        <Switch>
          <Route exact path={path.HOME}>
            <HomeScreen />
          </Route>
          <Route exact path={path.SERVICO}>
            <ServicoScreen />
          </Route>
          <Route exact path={path.CONTATO}>
            <ContatoScreen />
          </Route>
        </Switch>

        {/* <ToastrComponent /> */}
        <FabComponent />
        <FooterComponent />
      </GlobalToastrProvider>
    </>
  );
}

export default App;
