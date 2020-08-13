import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	SET_CONTACT,
	CLEAR_CONTACT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../Types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'stela dls',
				email: 'stla@email.com',
				phone: '123-12-323',
				type: 'personal'
			},
			{
				id: 2,
				name: 'gotrd aaaa',
				email: 'sa@gmail.com',
				phone: '2313-231-23',
				type: 'professional'
			},
			{
				id: 3,
				name: 'hana vvv',
				email: 'hhh@gmail.com',
				phone: '232-22',
				type: 'personal'
			}
		],
		//edit to be put on this state
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	//add contact
	const addContact = contact => {
		contact.id = uuid.v4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};
	//  delete contact
	const deleteContact = id => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};
	//  set current contact
	const setCurrent = contact => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};
	//  clear current contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};
	//  update contact
	const updateContact = contact => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};
	//  filter contacts
	const filterContacts = text => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};
	//  clear filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
