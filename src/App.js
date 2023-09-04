import {Navigate} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Alerts from "./views/ui/Alerts";
import FullLayout from "./layouts/FullLayout";
import Starter from "./views/Starter";
import Badges from "./views/ui/Badges";
import Buttons from "./views/ui/Buttons";
import Cards from "./views/ui/Cards";
import Grid from "./views/ui/Grid";
import Tables from "./views/ui/Tables";
import Forms from "./views/ui/Forms";
import Breadcrumbs from "./views/ui/Breadcrumbs";
const App = () => {

 /* const onCreate=(date, schedule, start_time, end_time){

  }*/

  return (
      <Routes>
        <Route path="/" element={<FullLayout />}>
          <Route index element={<Navigate to="/starter" />} />
          <Route path="/starter" element={<Starter />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/table" element={<Tables />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/breadcrumbs" element={<Breadcrumbs />} />
        </Route>
      </Routes>
  );
  };

export default App;
