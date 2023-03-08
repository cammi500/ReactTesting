import Footer  from "./Footer";
import './main.css';

const  Air =({name,age,address}) =>{
    return (
      <div className="">
        <h1 className="h1">
        My name is {name}
      </h1>
      <footer/>
      </div>
    );
  }
//   function Air({name,age,address}){
//     return (
//       <div className="">
//         <h1 className="h1">
//         My name is {name}
//       </h1>
//       <footer/>
//       </div>
//     );
//   }


 //es6
//   const Air = () => <h1>Hello</h1>
  export default Air;