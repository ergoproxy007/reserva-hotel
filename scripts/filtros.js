class Filtros extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
      return(
        <section>
            <div id="filters" class="row p-2 m-0"> 
                <div class="form-group col-md-2 offset-md-1">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fas fa-sign-in-alt"></i></span>
                        <input class="form-control" value={this.props.feinicio} type="date" name="" id=""/>  
                    </div>
                </div>
                <div class="form-group col-md-2">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fas fa-sign-out-alt"></i></span>
                        <input class="form-control" type="date" value={this.props.fefin} name="" id=""/>  
                    </div>
                </div>
                <div class="form-group col-md-2">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fas fa-globe"></i></span>
                        <select class="form-control" name="" id="">
                        </select>
                    </div>
                </div>
                <div class="form-group col-md-2">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fas fa-dollar-sign"></i></span>
                        <select class="form-control" name="" id="">
                        </select>
                    </div>
                </div>
                <div class="form-group col-md-2">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fas fa-bed"></i></span>
                        <select class="form-control" name="" id="">
                        </select>
                    </div>
                </div>      
            </div> 
        </section>
      ); 
    }
  }
  
  export default Filtros;