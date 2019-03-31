import React, { Component } from 'react';


class Sections extends Component {

    constructor(){
        super();
        this.state = {
          groups: [],
          groupName: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.loadGrp()
    }
    Delay = (function(){ 
        var timer=0;
        return function(callback, ms){
        clearTimeout(timer);
        timer = setTimeout(callback,ms);
        };
    })();

    loadGrp = () => {
        let str = (this.state.groupName).length > 0 ? (this.state.groupName): 'ninja';
        console.log(str);

        fetch('https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=0cfe5982584801c4b835e6231df36efb&text='+str+'&per_page=50&page=1&format=json&nojsoncallback=1')
        .then(function(response){
            return response.json();
        })
        .then(function(j){
            console.log(j);
            let groupArray = j.groups.group.map( (grp) => {
            console.log(grp);
            var grpName = grp.name;
            var nsid = grp.nsid;
            var grpMembers = grp.members;
            var grpLink = 'https://www.flickr.com/groups/'+nsid+'/';
            var grpImg = 'https://farm'+grp.iconfarm +'.staticflickr.com/'+grp.iconserver+'/buddyicons/'+nsid+'.jpg';

            return(
                <div>
                    
                    <br/>
                    <a src={grpLink}>{grpName}</a>
                    <br/>
                    <img key={grpName} alt="dogs" className="Img-group" src={grpImg}></img>
                    <h2 key={nsid} >Members: {grpMembers}</h2>
                    <br/>                    
                    <hr/>
                </div>
                
            )
            })
            this.setState({groups: groupArray});
        }.bind(this))
    }

    // here we are setting up the code for string search that user types in the input field
    handleChange(event){
        const {name, value, type} = event.target
        if(type === "text"){
            let newGroupName = value;
            this.setState({groupName: newGroupName})
        }            
        this.loadGrp()
    }
    
    render() {
        return (
            <div>
            <form>
            <input 
                name="Search For Group Name" 
                value={this.state.groupName} 
                onChange={this.handleChange} 
                onKeyUp={() => this.Delay(function(){
                    this.loadGrp();
                    }.bind(this), 1000)}
                placeholder="Search For Photos"
            />
            </form>
            <hr/>
            <h1>{this.state.groups}</h1> 
            </div>           
        )
    }
}
    
export default Sections