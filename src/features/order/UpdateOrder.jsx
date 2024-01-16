import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
function UpdateOrder({ order }) {
  // Update the data irrespective the page data
  // Writing the data
  const fetcher = useFetcher();

  return (
    // fetcher.Form -> would not navigate instead submit the form and re-evaluation/re-validation the form
    // re-validation -> react-router knows that the data has changed as a result of action
    // it re-renders the page with new data without causing the navigation
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
