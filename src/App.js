import Navbar from "./Navbar";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import History from "./History";
import Form from "./Form";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
          <Navbar />
          <Balance />
          <IncomeExpenses />
          <History />
          <Form />
      </div>
    </GlobalProvider>
  );
}

export default App;
