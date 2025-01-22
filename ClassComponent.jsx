import React,{Component} from 'react';
class ClassComponent extends Component{
    constructot(props){
        super(props);
        this.state={
            message:'Here is simple class component',
        }
    }
    changeMessage=() => {
        this.setState({message:'Messahe changed from class'});
    };
    render() 
    {
        return(
            <div>
                <h2>Class component</h2>
                <p>
                    {this.state.message}
                </p>
                <button onClick={this.changeMessage}>Change</button>
            </div>
        )
    }
}
export default ClassComponent;