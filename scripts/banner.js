class Banner extends React.Component{
  constructor(props) {
      super(props);
  }
  render(){
    return(
        <header class="col-12 m-0 p-0">
            <div class="col-12 p-3">
                <h1 class="text-center text-white">{this.props.titulo}</h1>
                <p class="text-center text-white"> 
                    <b> Desde el martes, 1 de enero de 2019 hasta el miércoles,</b> 
                    <b> 2 de enero de 2019</b>
                </p>
            </div>
        </header>
    ); 
  }
}

export default Banner;