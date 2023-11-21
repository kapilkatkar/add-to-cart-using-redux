import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./user.slice";

const UserComponent = () => {
  const users = useSelector((state) => {
    console.log("state", state);
    return state.users;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log("users", users.data);

  return (
    <div>
      <h1>all users {users.isLoading && <p>loading ...</p>}</h1>
      <div>
        {Array.isArray(users.data) &&
          users.data.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default UserComponent;
