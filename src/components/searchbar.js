import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import InputAdornment from "@material-ui/core/InputAdornment";
const textboxStyle = {
    // background: '#212121',
    // borderRadius: 30,
    // borderWidth: "5px",
    // borderColor: 'red',
    // color: 'white',
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
                 
          <TextField InputProps={{endAdornment: (<InputAdornment>  <SearchIcon />  </InputAdornment> ) }}placeholder="SEARCH"
          onChange={event=>this.onInputChange(event.target.value)}/>                              
         
            );
          }
    
}
export default SearchBar;