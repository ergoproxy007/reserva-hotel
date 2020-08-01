import Banner from "./banner.js";
import Filtros from "./filtros.js";

class App extends React.Component{
  render(){
    return(
        <div>
            <Banner titulo="Los Hoteles" />
            <Filtros feinicio="2020-08-01" fefin="2020-08-22" />
        </div>
    ); 
  }
}

export default App;