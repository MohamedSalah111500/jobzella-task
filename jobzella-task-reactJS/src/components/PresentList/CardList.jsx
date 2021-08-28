import React, { Component } from 'react';
import {connect} from 'react-redux'
import Card  from '../Card/CardComp';


// statefull Component  return list of  item to present it 

class CardList extends Component {
    state = {}
    showItem = id => {return id}

    render() {
        return (
            <>
             {this.props.cardArray.map(card => <Card key={card.id} 
             value={card} 
             viewCol={this.props.viewCol} 
             showItem={this.showItem}
             />)}
          </>
        );
    }
}
function mapStateToProps(state){
    return  {
        count: state.count,
        cardArray:state.cardArray
    }
}
export default connect(mapStateToProps)(CardList);