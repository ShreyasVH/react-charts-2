import BarChart from "./containers/BarChart";
import DoughnutChart from "./containers/DoughnutChart";

function App() {
    let type = 'bar';
    const params = new URLSearchParams(window.location.search);
    if (params.has('type')) {
        type = params.get('type');
    }


    return (
    <div className="App">
        <div style={{marginBottom: '30px'}}>
            <a href={'?type=bar'}>Bar Chart</a>
            &nbsp;&nbsp;
            <a href={'?type=doughnut'}>Doughnut Chart</a>
        </div>

        {type === 'bar' && <BarChart />}
        {type === 'doughnut' && <DoughnutChart />}
    </div>
  );
}

export default App;
