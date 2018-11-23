import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


let Serchbox = styled.input`
    height: 40px;
    width: 250px;
    background-color: black;
    color: white;
    border: none;
    outline: none;
    border-radius: 20px;
    padding: 0px 0px 0px 15px;
    font-size: 20px;
`;

let Topbar = styled.header`
    height: 100px;
    justify-content: space-between;
    display: flex;
    padding: 0 10% ;
    align-items: center;
`;

let Newslist = styled.main`
    background-color: gray;
`;

let Nwesbar = styled.div`
    background-color: white;
    display: flex;
    margin: 0 10%;
`;

let Text = styled.div`
    font-family: Roboto,sans-serif;
`;


class Newsapp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
      

    }
    componentDidMount(){
        
        fetch(`https://newsapi.org/v2/everything?q=iraq&apiKey=978d6c3818ff431b8c210ae86550fb1f`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                news: json.articles
            })
        });
        console.log(this.news)
    }



    render() {
       
            return (
                <React.Fragment>
                    <Topbar>
                        <img src="logo" />
                        <Serchbox placeholder="serch...." type="text" />
                    </Topbar>
                 
                    <Newslist>
                    {  this.state.news.map(item => (
                        <Nwesbar>
                            <img src="${item.urlToImage}" />
                            <Text>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <time>{item.publishedAt}</time>
                            </Text>
                        </Nwesbar>
                    ))}
                    </Newslist>
                  
                </React.Fragment>
        


            )


}
}


function App() {
    return (
        <Newsapp />
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false
//         }
//     }
//     componentDidMount() {
//         fetch('https://newsapi.org/v2/everything?q=iraq&apiKey=978d6c3818ff431b8c210ae86550fb1f')
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     items: json
//                 })
//             });
//     }
//     render() {
//         var { isLoaded, items } = this.state;
//         if (!isLoaded) {
//             return <div>Loading...</div>;
//         }
//         return (
//             <div >

//                 <ul>
//                     {items.map(item => (
//                         <li key="{item.id}">
//                             Name: {item.title} | Email: {item.author}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<App />, document.getElementById("root"))