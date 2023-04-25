import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div>
        <Router />;
        <ToastContainer autoClose="2000" theme="light" position="top-right" />
      </div>
    </>
  );
}

export default App;
