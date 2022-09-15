import './App.css';
// import Header from './Components/Header/Header';
// import Landing from './Components/Landing';
import Part3 from './Components/Part3';
import Part4 from './Components/Part4';
import Part5 from './Components/Part5';
import Part6 from './Components/Part6';
import Part7 from './Components/Part7';
import Responsivness from './Components/Responsivness';
import {createTheme,colors,ThemeProvider} from '@mui/material'
import Makestyles from './Components/Makestyles';
import Landing from './Components/Landing';
const theme=createTheme({
  palette:{
    secondary:{
      main:colors.orange[600],
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <Header/> */}
      <Landing/>
      {/* <Part3/> */}
      {/* <Part4/> */}
      {/* <Part5/> */}
      {/* <Part6/> */}
      {/* <Part7/> */}
      {/* <Responsivness/> */}
      {/* <Makestyles/> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
