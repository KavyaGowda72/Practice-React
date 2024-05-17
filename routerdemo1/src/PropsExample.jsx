import propTypes from "prop-types";
import ButtonComponent from "./Component/ButtonComponent";
const PropsExample = (props) => {
  // fruits.sort((a, b) => a.name.localeCompare(b.name));
  // const filterFruits = fruits.filter((fruit) => fruit.calories >= 100);
  // const itemList = props.items;
  // const cat = props.category;

  // const ListItems = itemList.map((item) => (
  //   <li key={item.name}>
  //     {item.name} : &nbsp;
  //     {item.calories}
  //   </li>
  // ));

  /////////////////////////////////
  const message=[greeting, setGreeting]=useState("");
  return (
    <ButtonComponent
    greetingMessage={}
    // <>
    //   <h2>{cat}</h2>
    //   <ol>{ListItems}</ol>
    // </>
  );
};

// PropsExample.propTypes = {
//   category: propTypes.string,
//   items: propTypes.arrayOf(
//     propTypes.shape({
//       name: propTypes.string,
//       calories: propTypes.number,
//     })
//   ),
// };

// PropsExample.defaultProps = {
//   category: "category",
//   items: [],
// };

export default PropsExample;
