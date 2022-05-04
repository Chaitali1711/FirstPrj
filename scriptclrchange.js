        class App extends React.Component {
            constructor () {
                super();
                this.name = "a";
                this.state = {
                    ans:'give input first',
                    color:"red"
                };
                // console.log(this,"Constructor");
            }

        fn = () => {
            let n1 = this.refs.n1.value;
            // console.log(this,"fn")

            if (n1 % 2==0)
                this.setState({ans:'Even Number',color:"blue"});

            else
                this.setState({ans:'Odd Number',color:"green"});
            
        }

        render =() => {
            // debugger;
            console.log(this, "render");
            
            return (<div>
                <b>Your number</b>
                <input ref="n1" />
                <br />   <br />
                <button onClick={this.fn}>Click </button>
                <h1 style={{color:this.state.color}}>Ans:{this.state.ans} </h1>
                </div>
            );
            
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);




