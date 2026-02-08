import BarChart from "./containers/BarChart";
import DoughnutChart from "./containers/DoughnutChart";

function App() {
    let type = 'bar';
    const params = new URLSearchParams(window.location.search);
    if (params.has('type')) {
        type = params.get('type');
    }

    const dataDoughNut1 = {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { label: 'My Doughnut Chart', data: [40, 20, 12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }
        ]
    };

    const dataDoughNut2 = {
        labels: [ 'April', 'May', 'June' ],
        datasets: [ { label: 'My Doughnut Chart 2', data: [33, 25, 18],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }
        ]
    };


    return (
    <div className="App">
        <div style={{marginBottom: '30px'}}>
            <a href={'?type=bar'}>Bar Chart</a>
            &nbsp;&nbsp;
            <a href={'?type=doughnut'}>Doughnut Chart</a>
        </div>

        {type === 'bar' && <BarChart />}
        {type === 'doughnut' && <>
            <DoughnutChart data={dataDoughNut1} id={'doughnut1'} />
            <DoughnutChart data={dataDoughNut2} id={'doughnut2'} />
        </>}
    </div>
  );
}

export default App;
