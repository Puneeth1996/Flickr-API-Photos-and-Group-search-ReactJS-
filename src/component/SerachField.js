import React, { Component } from 'react';

class SerachField extends Component {
    constructor(){
      super();
      this.state = {
        pictures: [],
        searchString: '',
        numPhotos: 20,
      };
      this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.loadImg();
    }
    Delay = (function(){ 
        var timer=0;
        return function(callback, ms){
        clearTimeout(timer);
        timer = setTimeout(callback,ms);
        };
    })();
        

    loadImg = () => {
        
        let str = (this.state.searchString).length > 0 ? (this.state.searchString): 'birds';
        console.log(str);

        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0cfe5982584801c4b835e6231df36efb&tags='+str+'&per_page='+(this.state.numPhotos)+'&page=1&safe_search=1&format=json&nojsoncallback=1')
        .then(function(response){
            return response.json();
        })
        .then(function(j){
            let picArray = j.photos.photo.map((pic) => {
            console.log(pic);
            var titlePic = pic.title;
            var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
            var KeyID = pic.id;
            var KeyID2 =srcPath;
            return(
                <div>
                    <h3 key={KeyID} >{titlePic}</h3>
                    <img key={KeyID2} alt="birds" src={srcPath}></img>
                </div>
                
            )
            })
            this.setState({pictures: picArray});
        }.bind(this))
    }



    // here we are setting up the code for string search that user types in the input field
    handleChange(event){
        const {name, value, type} = event.target
        if(type === "select-one"){
            let newNumPhotos = value;
            this.setState({numPhotos: newNumPhotos});
        }   
        if(type === "text"){
            let newSearchString = value;
            this.setState({searchString: newSearchString})
        }            
        this.loadImg()
    }

  
    render() {
      return (
        <div>
            <form>
                <input 
                    name="Search For Photos" 
                    value={this.state.searchString} 
                    onChange={this.handleChange} 
                    onKeyUp={() => this.Delay(function(){
                        this.loadImg();
                        }.bind(this), 1000)}
                    placeholder="Search For Photos"
                />
                <select 
                    value={this.state.numPhotos} 
                    name="Number of Photos to display" 
                    onChange={this.handleChange}
                >
                    <option value="">-- Please Choose a Number(Max 500) --</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="499">499</option>
                </select>
            </form>
            <br />  
            <h2>Search String: {this.state.searchString}</h2>
            <p className="App-intro">
                {this.state.pictures}
            </p>
        </div>
      );
    }
  }


export default SerachField