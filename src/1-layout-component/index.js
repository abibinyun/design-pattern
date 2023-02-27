// import { SmallPersonListItem } from "./people/SmallPersonList";
// import { LargePersonListItem } from "./people/LargePersonList";
// import { RegularList } from "./RegularList";
// import { SmallProductListItem } from "./products/SmallProductList";
// import { NumberedList } from "./NumberedList";
import { LargeProductListItem } from "./products/LargeProductList";
import { Modal } from "./Modal";
// import { SplitScreen } from "./SplitScreen";

// const LeftHandComponent = ({ name }) => {
//   return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>
// }
// const RightHandComponent = ({ message }) => {
//   return <h1 style={{ backgroundColor: 'red' }}>{message}!</h1>
// }

const people = [{
  name: 'Doto Jhone',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', "bicycleing", "video games" ],
}, {
  name: 'Doto Jhone',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', "bicycleing", "video games" ],
}]

const product = [{
  name: 'FlattScreen',
  price: '$300',
  description: 'huge LCD screen, a great detail',
  rating: 4.5,
}, {
  name: 'FlattScreen',
  price: '$300',
  description: 'huge LCD screen, a great detail',
  rating: 4.5,
} , {
  name: 'FlattScreen',
  price: '$300',
  description: 'huge LCD screen, a great detail',
  rating: 4.5,
}]

// function App() {
//   return (
//     <SplitScreen leftWeight={1} rightWeight={3}>
//       <LeftHandComponent name="bilal" />
//       <RightHandComponent message='hello'/>  
//     </SplitScreen>
//   );
// }

function LayoutComponent() {
  return (
    <>
{/*    
   <RegularList
      items={people}
      resourceName="person"
      itemComponent={SmallPersonListItem} />
    <NumberedList
      items={people}
      resourceName="person"
      itemComponent={LargePersonListItem} />
    <RegularList
      items={product}
      resourceName="product"
      itemComponent={SmallProductListItem} />
    <NumberedList
      items={product}
      resourceName="product"
      itemComponent={LargeProductListItem} />
  */}

  <Modal>
    <LargeProductListItem product={product[0]} />
  </Modal>

    </>
  );
}

export default LayoutComponent;
