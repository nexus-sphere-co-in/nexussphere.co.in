import { writable } from 'svelte/store';

export interface GlobalState {
	createModal: 'scale-0';
	connectedAccount: '';
	contract: null;
	proposals: [];
	isStakeholder: false;
	balance: 0;
	mybalance: 0;
}

export const globalState = writable<GlobalState>({
	createModal: 'scale-0',
	connectedAccount: '',
	contract: null,
	proposals: [],
	isStakeholder: false,
	balance: 0,
	mybalance: 0
});
