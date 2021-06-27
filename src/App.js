import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      books:[
        {id:0, rating: 4, title: 'Hermosas criaturas', image: 'libro1.jpg'},
        {id:1, rating: 5, title: 'ILLUMINAE', image: 'libro2.jpg'},
        {id:2, rating: 5, title: 'Emma', image:'libro3.jpg'},
        {id:3, rating: 3, title: 'IT', image: 'libro4.jpg'},
        {id:4, rating: 5, title: 'Es Ángel, Es Demonio', image:'libro5.jpg'},
        {id:5, rating: 5, title: 'Equis', image:'libro6.jpg'},
        {id:6, rating: 2, title: 'Percy Jackson y El Ladrón Del Rayo', image: 'libro7.jpg'},
        {id:7, rating: 3, title: 'Violet & Finch', image:'libro8.jpg'},
        {id:8, rating: 3, title: 'Mentes Poderosas', image: 'libro9.jpg'},
        {id:9, rating: 5, title: 'La Vida Invisible de Addie Larue', image: 'libro10.jpg'},
        {id:10, rating: 4, title: 'Crónicas de una muerte anunciada', image: 'libro11.jpg'},
        {id:11, rating: 3, title: 'Elevación', image: 'libro12.jpg'},
        {id:12, rating: 3, title: 'Carrie', image: 'libro13.jpg'},
        {id:13, rating: 5, title: 'Las Jirafas no pueden bailar', image: 'libro14.jpg'},
        {id:14, rating: 4, title: 'El visitante', image: 'libro15.jpg'},
        {id:15, rating: 3, title: 'El Instituto', image: 'libro16.jpg'},
        {id:16, rating: 5, title: 'Ética', image: 'libro17.jpg'},
        {id:17, rating: 4, title: 'El Principito', image: 'libro18.jpg'},
        {id:18, rating: 4, title: 'Harry Potter y La Piedra filosofal', image: 'libro19.jpg'},
        {id:19, rating: 2, title: 'El niño con el pijama de rayas', image: 'libro20.jpg'},
        {id:20, rating: 1, title: 'El gran libro de la emociones', image: 'libro21.jpg'},
        {id:21, rating: 4, title: 'La Ladrona De Libros', image: 'libro22.jpg'},
        {id:22, rating: 2, title: 'Lo que el viento se llevó', image: 'libro23.jpg'},
        {id:23, rating: 3, title: 'Largo pétalo de mar', image: 'libro24.jpg'},
        {id:24, rating: 2, title: 'Lógica de programación', image: 'libro25.jpg'},
        {id:25, rating: 5, title: 'ORIGEN', image: 'libro26.jpg'},
        {id:26, rating: 2, title: 'Cien años de soledad', image: 'libro27.jpg'},
        {id:27, rating: 4, title: 'Sadie', image: 'libro28.jpg'},
        {id:28, rating: 5, title: 'Ángeles y Demonios', image: 'libro29.jpg'}
      ],
      copyBooks: []
    };
  }

  componentDidMount(){
    this.initBooks();
  }
 
  initBooks = () =>{
    //this.setState({copyBooks: [...this.state.books]});
    this.setState((state,props) => ({
      copyBooks: [...state.books]
    }));
  }

  onAdd = (item) => {
    let temp = [...this.state.books];
    const id = temp[temp.length-1].id + 1;
    item['id'] = id;
    temp.push(item);

    this.setState({books: [...temp]});
    this.initBooks();
  }
  
  onSearch = (query) =>{
    if(query === ''){
     this.initBooks();
    }else{
      const temp = [...this.state.books];
      var res = [];

      temp.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
    
      this.setState({copyBooks: [...res]});
    }
  }

  
  onUpdateRating = (item) =>{
    var temp = [...this.state.books];
    const index = temp.findIndex(x => x.id === item.id);
    
    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({books: [...temp]});
    this.initBooks();
  }

  onremove = (id) =>{
    var temp = [...this.state.books];
    const res = temp.filter(item => item.id != id);
    this.setState({books: [...res]});
    this.initBooks();
  }

  render(){
    return (
      <div className="app">
        <Menu title="YODA" onadd={this.onAdd} onsearch={this.onSearch} />
        <List 
        items={this.state.copyBooks}  
        onupdaterating={this.onUpdateRating}
        onremove={this.onremove} />
      </div>
    );
  }
}

export default App;