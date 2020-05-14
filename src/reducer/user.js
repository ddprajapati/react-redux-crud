import { ADD_USER } from "../constants/action-types";
import { UPDATE_USER } from "../constants/action-types";
import { DELETE_USER } from "../constants/action-types";

import { OPEN_FORM } from "../constants/action-types";
import { CLOSE_FORM } from "../constants/action-types";
import { OPEN_EDIT_FORM } from "../constants/action-types";
import { CLOSE_EDIT_FORM } from "../constants/action-types";

const initialState = {
  //Read
  users: [
    {
      id: 1,
      name: "Dilip Prajapati",
      role: "Partner",
      created: "10/11/2019",
      status: "inactive",
    },
    {
      id: 2,
      name: "Sagar Valad",
      role: "Admin",
      created: "12/11/2019",
      status: "active",
    },
    {
      id: 3,
      name: "Tarak Mehta",
      role: "Partner",
      created: "12/11/2019",
      status: "active",
    },
  ],
  uiState: {
    //Create
    openFormDialog: false,
    //Update
    openEditDialog: false,
    userToEdit: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    //-----------------CREAT----------------------------
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case OPEN_FORM:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openFormDialog: true,
        },
      };

    case CLOSE_FORM:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openFormDialog: false,
        },
      };

    //----------------UPDATE-------------------
    case UPDATE_USER:
      console.log("Save updated user" + JSON.stringify(action));

      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id !== action.payload.id) {
            return user;
          } else {
            return { ...user, user: action.payload.user };
          }
        }),
      };

    case OPEN_EDIT_FORM:
      console.log("Open Edit User Form" + JSON.stringify(action));
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openEditDialog: true,
          articleToEdit: action.payload,
        },
      };

    case CLOSE_EDIT_FORM:
      console.log("Close Edit User Form" + JSON.stringify(action));
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openEditDialog: false,
        },
      };

    //-----------------DELETE-------------

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };

    default:
      return state;
  }
};
