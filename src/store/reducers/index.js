import shortid from "shortid";

import { contacts } from "../../utils";

export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTATC = "DELETE_CONTATC";
export const FILTER_CONTACT_LIST = "FILTER_CONTACT_LIST";

const initialState = {
  isSearch: false,
  contactsList: contacts,
  filteredList: contacts,
};

const reducers = (state = initialState, { payload, type, id }) => {
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,

        contactsList: [
          ...state.contactsList,
          { ...payload, id: shortid.generate() },
        ],

        filteredList: [
          ...state.contactsList,
          { ...payload, id: shortid.generate() },
        ],
      };
    case EDIT_CONTACT:
      const newContactList = state.contactsList.map((item) => {
        if (item.id === id) {
          return {
            id,
            url: "",
            name: payload.name,
            email: payload.email,
            number: payload.number,
          };
        }
        return item;
      });

      const filterContactList = state.filteredList.map((item) => {
        if (item.id === id) {
          return {
            id,
            url: "",
            name: payload.name,
            email: payload.email,
            number: payload.number,
          };
        }
        return item;
      });
      return {
        ...state,
        contactsList: newContactList,
        filteredList: filterContactList,
      };

    case DELETE_CONTATC:
      const deleteContactList = state.contactsList.filter(
        (item) => item.id !== id
      );

      const deleteFilterList = state.filteredList.filter(
        (item) => item.id !== id
      );

      return {
        ...state,
        contactsList: deleteContactList,
        filteredList: deleteFilterList,
      };

    case FILTER_CONTACT_LIST:
      return {
        ...state,
        filteredList: payload
          ? state.contactsList.filter((item) => {
              return item.name.toLowerCase().includes(payload.toLowerCase());
            })
          : state.contactsList,
        isSearch: payload ? true : false,
      };

    default:
      return state;
  }
};

export default reducers;

// state @ poxellu hamar redusers
