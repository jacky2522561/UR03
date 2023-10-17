import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './index.css';

const App = () => {
    const [books, setBooks] = useState([]);
    const editBook = (id,newTitle)=>{
        const updateBooks = books.map((book)=>{
            if(book.id === id)  return {...book,title: newTitle};
            else return book;
        })
        setBooks(updateBooks);
    }
    const deleteBook = (id) =>{
        const updateList = books.filter((book)=>book.id !== id);
        setBooks(updateList);
    }
    const createBook = (title) => {
        const updateBooks = [
            ...books,
            { id: Math.round(Math.random()*9999), title }
        ];
        setBooks(updateBooks);
    }
    return (
        <div>
            <div>now we have {books.length} books.</div>
            <BookList onEdit={editBook} onDelete = {deleteBook} books = {books}/>
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;