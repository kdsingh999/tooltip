import './App.css';
import ToolTip from './components/ToolTip';

function App() {
  return (
    <div className="App">
      <ToolTip
        title={'This is Test'}
        lable={'KD Singh'}
        position={'top'}
        style={{ fontWeight: 'bold' }}
      />
    </div>
  );
}

export default App;
