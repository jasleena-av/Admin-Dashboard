
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Chart from './components/Chart';
import PaymentDue from './components/PaymentDue';
import ProductStockAlert from './components/ProductStockAlert';
import RevenueChart from './components/RevenueChart';
import SalesOrder from './components/SalesOrder';
import { PendingShipment } from './components/PendingShipment';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 p-10  bg-blue-200 overflow-auto rounded-lg">
         
          <Card />
          <Chart />
          <PaymentDue />
          <ProductStockAlert />
          <RevenueChart />
          <SalesOrder />
          <PendingShipment />

        </main>
      </div>
    </div>
  );
}

export default App;
