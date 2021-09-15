import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { deleteUser, updateUser } from "../actions/usersActions";
import Popup from "./Popup";
import { Button, TextField } from "@material-ui/core";

function Table({ users }) {
  const dispatch = useDispatch();

  const [newUserData, setNewUserData] = useState({
    name: "",
    code: 0,
    address: { country: "", city: "" },
    status: "",
  });
  const [currentId, setCurrentId] = useState(0);

  const user = currentId ? users.find((user) => user.id === currentId) : null;

  const [trigger, setTrigger] = useState(false);

  const sortValue={1:"name",2:"country",3:"city",5:"code"};

  const handleDelete = (user) => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Student?"
    );
    if (confirmBox === true) {
      dispatch(deleteUser(user.id));
    }
  };

  useEffect(() => {
    if (user) setNewUserData(user);
  }, [user]);


  return (
    <>
      <table className="w-full my-5">
        <thead>
          <tr>
            {Array(7)
              .fill()
              .map((_, index) => {
                if (index !== 0 && index !== 4 && index !== 6) {
                  console.log(index);
                  return (
                    <th>
                      <button
                        className="bg-yellow-300 rounded-full w-2/4 m-2"
                        onClick={() =>
                          dispatch({ type: "SORT", value: sortValue[index] })
                        }
                      >
                        Sort
                      </button>
                    </th>
                  );
                } else {
                  return <th></th>;
                }
              })}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr
                key={index}
                className="border border-black text-center hover:bg-gray-300"
              >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address.country}</td>
                <td>{user.address.city}</td>
                <td className={user.status}>{user.status}</td>
                <td>{user.code}</td>
                <td>
                  <EditIcon
                    onClick={() => {
                      setTrigger(true);
                      setCurrentId(user.id);
                    }}
                  />
                  <DeleteOutlineIcon
                    onClick={() => {
                      handleDelete(user);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Popup trigger={trigger} setTrigger={setTrigger}>
        <TextField
          name="name"
          variant="filled"
          label="Name"
          value={newUserData.name}
          onChange={(e) =>
            setNewUserData({ ...newUserData, name: e.target.value })
          }
        />
        <TextField
          name="country"
          variant="filled"
          label="Country"
          value={newUserData.address.country}
          onChange={(e) =>
            setNewUserData({
              ...newUserData,
              address: { ...newUserData.address, country: e.target.value },
            })
          }
        />
        <TextField
          name="city"
          variant="filled"
          label="City"
          value={newUserData.address.city}
          onChange={(e) =>
            setNewUserData({
              ...newUserData,
              address: { ...newUserData.address, city: e.target.value },
            })
          }
        />
        <TextField
          name="code"
          variant="filled"
          label="Code"
          value={newUserData.code}
          onChange={(e) =>
            setNewUserData({ ...newUserData, code: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(updateUser(currentId, newUserData))
            setTrigger(false);
          }
          }
            
        >
          Save
        </Button>
      </Popup>
    </>
  );
}

export default Table;
