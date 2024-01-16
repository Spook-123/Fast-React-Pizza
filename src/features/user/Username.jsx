import { useSelector } from "react-redux";

function Username() {
  // Get the state from redux -> useSelector()
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
