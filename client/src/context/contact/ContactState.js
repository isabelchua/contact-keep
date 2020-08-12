import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

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
		]
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	//add contact
	//  delete contact
	//  set current contact
	//  clear current contact
	//  update contact
	//  filter contacts
	//  clear filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
