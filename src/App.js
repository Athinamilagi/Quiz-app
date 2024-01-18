import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import Login from "./components/Login";
import Flashcard from "./components/Flashcard";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Card from "./components/Card";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="flashcard" element={<Flashcard />}>
          <Route path="mathematics" element={<Card />} />
          <Route path="socialstudies" element={<Card />} />
          <Route path="science" element={<Card />} />
          <Route path="english" element={<Card />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;