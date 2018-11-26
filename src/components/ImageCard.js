import React from 'react';

class ImageCard extends React.Component{

  state={ spans :0};

  constructor(props){

    super(props);
    this.imagRef=React.createRef();

  }
  componentDidMount(){
    this.imagRef.current.addEventListener('load' , this.setSpans);
  }

  setSpans =() =>{
    const height=this.imagRef.current.clientHeight;
    const spans=Math.ceil(height /10);
    this.setState({ spans });
  }
  render(){
    return(
      <div style={{gridRowEnd :`span ${this.state.spans}`}}>
          <img ref={this.imagRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
