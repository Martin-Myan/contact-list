import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTATC,
  FILTER_CONTACT_LIST,
} from "../reducers";

export const addContact = (payload, url) => ({
  type: ADD_CONTACT,
  payload,
  url,
});

export const editContact = (payload, id, url) => ({
  type: EDIT_CONTACT,
  payload,
  url,
  id,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTATC,
  id,
});

export const filterContactList = (payload) => ({
  type: FILTER_CONTACT_LIST,
  payload,
});

//  gorcoxutyunner@
