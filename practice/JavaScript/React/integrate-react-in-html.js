const e = React.createElement;

class LikeButton extends React.Component {

    constructor(props){

        super(props)
        this.state = {liked : false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

        console.log(this.state.liked)
        this.setState({liked : !this.state.liked})
    }

    render(){

        return e(
            'button',
            { onClick: () => this.handleClick() },
            "Like"
        );
    }
}


// const domContainer = document.querySelector(".like_button_container")
// const root = ReactDOM.createRoot(domContainer)
// root.render(e(LikeButton))


// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    const root = ReactDOM.createRoot(domContainer);
    root.render(
      e(LikeButton)
    );
  });