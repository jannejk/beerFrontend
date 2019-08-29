import React, { Component } from 'react';
//import jsonData from "./data/db.json";
import './App.scss';
import SearchBar from './components/searchbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import StarsIcon from '@material-ui/icons/Stars';

const avatarImageStyle = {
  width: 140,
  height: 140,
};
const tabStyle={
 
  //flexGrow: 1,
}
const dropdownStyle = {
  
  //width: "150%",
    // background: "white",
    color: "red",
    icon: {
      fill: "white",
    }
  

};
const THEME = createMuiTheme({
  typography: {
   "fontFamily": "\"Rajdhani\", \"Helvetica\", \"Arial\", sans-serif",
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500,
   h1: {
    "fontWeight":  "fontWeightRegular",
    fontFamily: "Lobster Two",
    "fontSize": '2em',
  },
   h2: {
    "fontWeight":  900,
    fontFamily: "Lobster Two",
    "fontSize": '1.5em',
  },
  h3: {
    "fontWeight":  500,
    fontFamily: "Lobster Two",
    "fontSize": '1.17em',
  },
  
  },
  overrides: {
    
    MuiSelect: {
        'root': {                        
                color: '#9B8449',
                
                
        },
        icon: {
          fill: '#9B8449',
         
       },
       
    },
    MuiTabs: {
      indicator: {
        backgroundColor: "#9B8449",
        
      },
      
    },
    MuiTab: {
      
      "root":{
      "&$selected": {
      //backgroundColor: "rgba(255,255,255,0.01)",
      
      }
    }
    },
  
}
  
});

class App extends Component {
  
  
constructor(){
  
  super();
  this.state={'items':[],
   
    options: [
    
      {
        name: 'Beers',
        value: 'beers',
      },
      {
        name: 'Energy Drinks',
        value: 'energy-drinks',
      },
      
    ],
    sortOptions: [
    
      {
        name: 'Name',
        value: 'name',
      },
      {
        name: 'Price',
        value: 'price',
      },
      {
        name: 'Rating',
        value: 'preferability',
      },
    ],
   // url: 'http://localhost:3001/beers',
   
    url: 'https://my-json-server.typicode.com/jannejk/myjsonapi/beers',
    imgUrl: 'beers/thumb/',
    searchString: '',
    selectedValue: "",
    activeTab: 'beers',
   
   
    
  }
}

getProducts(){

  
 // console.log('url state in fetch: '+this.state.url);
  //console.log('imgUrl state in fetch: '+this.state.imgUrl);
  
    fetch(this.state.url, {
    method: 'GET',
    headers: {
    "Accept": "application/json",
    'Content-Type': 'application/json'
    }
})
.then(response => { 
  return response.json();
})
.then(responseData => {
  //console.log('jep',responseData); 
  return responseData;
})
.then(data => {this.setState({'items' : data}

);
//console.log('UrlEnd: ',this.state.urlEnd);
}

)
 
.catch(err => {
    console.log("fetch error" + err);
});

}

componentDidMount(){
  
  //console.log("imgUrl on mount "+this.state.imgUrl);
  this.getProducts();
 }


handleTermChange(term) {
  //console.log(term);
  let filteredList = this.state.items.filter((word) => {
    return word.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
  });
  if(term===''){
    this.getProducts();
  }
  //console.log(filteredList);
  this.setState({items: filteredList});
}


handleChange = (event, activeTab) => {
 
  //console.log('active tab: '+activeTab);

  this.setState({ value: activeTab }, function () {
    
  });
    var urlEnd=activeTab;
    this.setState({url: 'https://my-json-server.typicode.com/jannejk/myjsonapi/'+urlEnd},function () {
   // console.log("URL end "+urlEnd);
    //this.getProducts();//orig
  });
  
    this.setState({imgUrl: './images/'+urlEnd+'/thumb/'},function () {
      this.getProducts();
    });

};
selectChange = (event) => {
  this.setState({ selectedValue: event.target.value })
  var sortJsonArray = require('sort-json-array');
  var sortByVal = event.target.value;
  var sortedList;
 // console.log(sortByVal);
  if(sortByVal==='name'){
     sortedList=sortJsonArray(this.state.items, 'title','asc');
    
  }
  else if(sortByVal==='price'){
     sortedList=sortJsonArray(this.state.items, 'price-range','asc');
     
  }
  else if(sortByVal==='preferability'){
     sortedList=sortJsonArray(this.state.items, 'preferability','des');
     
  }
  this.setState({items: sortedList});
}

  render() {
    
    const {selectedValue}=this.state;
    const {classes} = this.props;
    const {activeTab}=this.state;
    let imgUrlFill=this.state.imgUrl;
    const { options, value } = this.state;
    const { sortOptions, sortValue } = this.state;
    // console.log('selected value: '+this.state.selectedValue+'selected tab: '+this.state.activeTab);
    
    return(
      <MuiThemeProvider theme={THEME}>
    

      <div className='App'>
    
      <AppBar position="sticky" >
        <Toolbar >
            <Grid className='toolBarContainer'container spacing={0}>
              
              <Grid container spacing={3}>
                  <Grid className='menuitem' item xs={12}md={6}>
                    <Tabs value={this.state.value} onChange={this.handleChange}style={Object.assign({}, tabStyle)}centered>
                      {options.map(item => (
                    <Tab key={item.value} label={item.name}value={item.value}/>
                    ))}
                    </Tabs>
                  </Grid>

                        <Grid className='menuitem' item xs={6}sm={6}md={3}>
                      
                            <Grid container className='submenuitem' alignItems="flex-start" justify="flex-end">
                            
                              <Grid  item xs={12}md={3}>
                            
                                  <Select 
                                    displayEmpty id="sortBy" onChange={this.selectChange} value={this.state.selectedValue}
                                    style={Object.assign({}, dropdownStyle)}>
                                  <MenuItem value="" disabled>
                                        <div className="myem">SORT BY</div>
                                  </MenuItem>
                                    {sortOptions.map(item => (
                                      <MenuItem value={item.value}primaryText={item.name}key={item.value}>
                                        {item.name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </Grid>
                              </Grid>
                        </Grid>
                    <Grid className='menuitem' item xs={6}md={3}>
                        <SearchBar onTermChange={term=>this.handleTermChange(term)}/>
                    </Grid>
             </Grid>
          </Grid>
        </Toolbar>
        
      </AppBar>
      
  
  <Grid className='containerGrid' container justify={'center'} align={'center'}/* spacing={"0"} */mx="auto">
 
          {this.state.items.map(function(item, index){
            
            return(
            
              
              <Grid className='myCard' item xs={6} sm={6} md={4}>
              <div className='box' key={index}>
              <Avatar onError={(e)=>{e.target.src="./images/beers/thumb/no-image.png"}}alt="nopic" 
                    src={"./images/"+imgUrlFill+item.images} style={Object.assign({}, avatarImageStyle)}/>
                    <p></p>
                    <Typography  variant="h1" >{item.title}</Typography>
                   
                    <br/>
                    
                    <Typography  component="p" >{item.description}</Typography><br/>
                    
                    <Grid className='test'container direction="row">
                        <Grid item>
                        <EuroSymbolIcon/>&nbsp; 
                        </Grid>
                        <Grid item>
                        <Typography  component="p" >Price: {item["price-range"]}</Typography>
                        </Grid>
                        <Grid className='test' container direction="row" alignItems="center">
                        <Grid item>
                        &nbsp;&nbsp;<StarsIcon/>&nbsp;
                        </Grid>
                        <Grid item>
                        <Typography  component="p" >Rating: {item.preferability}</Typography>
                        </Grid>
                    </Grid>
                    </Grid>
              </div>
              </Grid>
                ) 
            }
          )}
      </Grid>
      
 </div>
 </MuiThemeProvider>
    
      );
     
  }
}

export default App;
