import React from 'react'

export default function List() {
//     const numbers = [1,2,3,4,5];
//   return (
//     <ul>
//       {numbers.map((item) => (
//         <li key={item.toString}>{item}</li>
//       ))}
//     </ul>
//   );

const todos = [
    {id: 1, text: 'Drink Water'},
    {id: 1, text: 'Wash Car'},
    {id: 1, text: 'Listen Lecture'},
    {id: 1, text: 'Go to bed'},
];
const Item = (props) => {
    return <li>{props.text}</li>;
}

const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);
return <> {todoList}</>;
}
