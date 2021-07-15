import React from "react";
import WhoseHouse from "./houses/WhoseHouse";
import Hufflepuff from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";

GryffFunctions.colors();
// => 'Scarlet and Gold'

GryffFunctions.gryffMascot();
// => 'The Lion'

// GryffFunctions.values();
// => Attempted import error

 function Hogwarts() {
 
  return (
    <div>
      <h1>Welcome to Hogwarts!</h1>
      <Hufflepuff />
      <WhoseHouse />
    </div>
  );
}
export default Hogwarts;