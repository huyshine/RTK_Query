import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import List from "./components/admin/List";
import Add from "./components/admin/Add";
import Edit from "./components/admin/Edit";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin/products" element={<LayoutAdmin />}>
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="/">
          <Route index element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
