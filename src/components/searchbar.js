import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const textboxStyle = {
    background: '#212121',
    borderRadius: 30,
    borderWidth: "5px",
    borderColor: 'red',
    color: 'white',
  };

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={term:''};
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render(){
        

        return (
          <div>
                    <Grid className='test'container direction="row">
                            <Grid item item xs={12}md={3}>
                            <TextField style={Object.assign({}, textboxStyle)}placeholder="SEARCH"
                                 onChange={event=>this.onInputChange(event.target.value)}/>&nbsp;
                            </Grid>
                            <Grid item>
                            <SearchIcon  />
                            </Grid>
                    </Grid>
                    
        
          </div>


        );
        }
    
}
export default SearchBar;