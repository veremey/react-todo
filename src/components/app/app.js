import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";

import './app.css';

class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const newArray = todoData.slice();
            const idx = newArray.findIndex((el)=> el.id === id );
            newArray.splice(idx, 1);
            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {
       const newItem = {
           label: text,
           important: false,
           id: this.maxId++
       };

       this.setState(({todoData}) => {
            const newArr = [
                ... todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
       });
    };

    

    render() {
        const {todoData} = this.state;
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted = {this.deleteItem}
                />
                <ItemAddForm
                    onItemAdded = {this.addItem}
                />
            </div>
        );
    }

};

export default App;
