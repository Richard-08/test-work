import PrintingList from "./components/PrintingList";
import OrderInfo from "./components/OrderInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ maxWidth: "990px", margin: "0 auto", padding: "60px 20px" }}>
      <PrintingList />
      <OrderInfo />
      <Footer />
    </div>
  );
}

export default App;
