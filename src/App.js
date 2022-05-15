import "./App.css";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Routes/publicRoutes";


function App() {
  return (
    <>
      <Routes>
        {
          publicRoutes.map(({path, Element }, index)=> (<Route key={index} path={path} element={<Element></Element>} />))
        }
      </Routes>
    </>
  );
}

export default App;
