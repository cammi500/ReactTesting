// 
// date 2
// function App() {
//   return <Fruit name="You have to pay...."/>
// }
// function Fruit(props) {
//   return <Bell gg={props.name}/>
  
// }
// function Bell(props) {
//   return <h1>{props.gg}</h1>;
  
// }
// export default App;


//destructing
// const [r,b,h] =['red','green','blue']
// console.log(b);
// function App() {
//   return <h1>Hello!!</h1>
// }

import Air from "./Air";

function App(){
  return <Air name="Egg" age="23" address="no.12"/>

}
// function Air({name,age,address}){
//   return (
//     <div className="">
//       <h1 className="h1">
//       My name is {name}
//     </h1>
//     <footer/>
//     </div>
//   );
// }


export default App;