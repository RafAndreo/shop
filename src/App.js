import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items:[
        {
        id:1,
        title: '2',
        img: 'cluch.jpeg',
        desc: '12',
        category: '21',
        price: '21'
        },
        {
          id:2,
          title: '3',
          img: 'cluch.jpeg',
          desc: '12',
          category: '2',
          price: '3'
          },
          {
            id:3,
            title: '23',
            img: 'cluch.jpeg',
            desc: 'fef',
            category: '2',
            price: '3'
            },
            {
              id:4,
              title: '12',
              img: 'cluch.jpeg',
              desc: '5',
              category: '4',
              price: '5'
              },
              {
                id:5,
                title: '3',
                img: 'cluch.jpeg',
                desc: '3',
                category: '3',
                price: '3'
                },
                {
                  id:6,
                  title: '3',
                  img: 'cluch.jpeg',
                  desc: '3',
                  category: '3',
                  price: '4'
                  },
      ]
    }
  }
  render(){
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items} />
      <Footer />
    </div>
  );
  }
}

export default App;
