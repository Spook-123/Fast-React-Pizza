import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // Step-3: get the data into the components
  const menu = useLoaderData();
  console.log(menu);
  return (
    // giving margin at bottom of every element
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  // Step-1: Create a loader
  const menu = await getMenu();
  return menu;
}

export default Menu;
