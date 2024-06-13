import { ethers } from 'ethers';
import { globalState } from '$stores/global';
import abi from '$abis/NexusDAO.json';
import { get } from 'svelte/store';

const { ethereum } = window;

const provider = new ethers.BrowserProvider(ethereum);
const signer = await provider.getSigner();

const setGlobalState = (key: string, value: unknown) =>
	globalState.update((state) => ({ ...state, [key]: value }));

const connectWallet = async (): Promise<void> => {
	try {
		if (!ethereum) return alert('Please install Metamask');
		const accounts: string[] = await ethereum.request({ method: 'eth_requestAccounts' });
		globalState.update((state) => ({ ...state, connectedAccount: accounts[0].toLowerCase() }));
	} catch (error) {
		reportError(error);
	}
};

const isWalletConnected = async (): Promise<void> => {
	try {
		if (!ethereum) return alert('Please install Metamask');
		const accounts: string[] = await ethereum.request({ method: 'eth_accounts' });

		window.ethereum.on('chainChanged', () => {
			window.location.reload();
		});

		window.ethereum.on('accountsChanged', async () => {
			globalState.update((state) => ({ ...state, connectedAccount: accounts[0].toLowerCase() }));
			await isWalletConnected();
		});

		if (accounts.length) {
			globalState.update((state) => ({ ...state, connectedAccount: accounts[0].toLowerCase() }));
		} else {
			alert('Please connect wallet.');
			console.log('No accounts found.');
		}
	} catch (error) {
		reportError(error);
	}
};

const getEthereumContract = async (): Promise<ethers.Contract | null> => {
	const connectedAccount = get(globalState).connectedAccount;

	if (connectedAccount) {
		const network = await provider.getNetwork();
		const networkData = abi.networks[network.chainId.toString()];
		if (networkData) {
			const contract = new ethers.Contract(networkData.address, abi.abi, signer);
			return contract;
		} else {
			return null;
		}
	} else {
		return get(globalState).contract;
	}
};

const performContribute = async (amount: string): Promise<void> => {
	try {
		const etherAmount = ethers.parseEther(amount);
		const contract = await getEthereumContract();
		const account = get(globalState).connectedAccount;

		if (contract) {
			await contract.contribute({ from: account, value: etherAmount });
		}

		window.location.reload();
	} catch (error) {
		reportError(error);
	}
};

const getInfo = async (): Promise<void> => {
	try {
		if (!ethereum) return alert('Please install Metamask');

		const contract = await getEthereumContract();
		const connectedAccount = get(globalState).connectedAccount;
		if (contract && connectedAccount) {
			const isStakeholder = await contract.isStakeholder({ from: connectedAccount });
			const balance = await contract.daoBalance();
			const mybalance = await contract.getBalance({ from: connectedAccount });

			globalState.update((state) => ({ ...state, balance: ethers.formatEther(balance) }));
			globalState.update((state) => ({ ...state, mybalance: ethers.formatEther(mybalance) }));
			globalState.update((state) => ({ ...state, isStakeholder }));
		}
	} catch (error) {
		reportError(error);
	}
};

interface Proposal {
	title: string;
	description: string;
	beneficiary: string;
	amount: string;
}

const raiseProposal = async ({
	title,
	description,
	beneficiary,
	amount
}: Proposal): Promise<void> => {
	try {
		const etherAmount = ethers.parseEther(amount);
		const contract = await getEthereumContract();
		const account = get(globalState).connectedAccount;

		if (contract && account) {
			await contract.createProposal(title, description, beneficiary, etherAmount, {
				from: account
			});
			window.location.reload();
		}
	} catch (error) {
		reportError(error);
	}
};

const getProposals = async (): Promise<void> => {
	try {
		if (!ethereum) return alert('Please install Metamask');

		const contract = await getEthereumContract();
		if (contract) {
			const proposals = await contract.getProposals();
			setGlobalState('proposals', structuredProposals(proposals));
		}
	} catch (error) {
		reportError(error);
	}
};

interface StructuredProposal {
	id: string;
	amount: string;
	title: string;
	description: string;
	paid: boolean;
	passed: boolean;
	proposer: string;
	upvotes: number;
	downvotes: number;
	beneficiary: string;
	executor: string;
	duration: number;
}

const structuredProposals = (proposals: any[]): StructuredProposal[] => {
	return proposals
		.map((proposal) => ({
			id: proposal.id,
			amount: ethers.formatEther(proposal.amount),
			title: proposal.title,
			description: proposal.description,
			paid: proposal.paid,
			passed: proposal.passed,
			proposer: proposal.proposer,
			upvotes: Number(proposal.upvotes),
			downvotes: Number(proposal.downvotes),
			beneficiary: proposal.beneficiary,
			executor: proposal.executor,
			duration: proposal.duration
		}))
		.reverse();
};

const getProposal = async (id: string): Promise<StructuredProposal | undefined> => {
	try {
		const proposals = get(globalState).proposals as StructuredProposal[];
		return proposals.find((proposal) => proposal.id === id);
	} catch (error) {
		reportError(error);
	}
};

const voteOnProposal = async (proposalId: string, supported: boolean): Promise<void> => {
	try {
		const contract = await getEthereumContract();
		const account = get(globalState).connectedAccount;
		if (contract && account) {
			await contract.performVote(proposalId, supported, { from: account });
			window.location.reload();
		}
	} catch (error) {
		reportError(error);
	}
};

const listVoters = async (id: string): Promise<any> => {
	try {
		const contract = await getEthereumContract();
		if (contract) {
			const votes = await contract.getVotesOf(id);
			return votes;
		}
	} catch (error) {
		reportError(error);
	}
};

const payoutBeneficiary = async (id: string): Promise<void> => {
	try {
		const contract = await getEthereumContract();
		const account = get(globalState).connectedAccount;
		if (contract && account) {
			await contract.payBeneficiary(id, { from: account });
			window.location.reload();
		}
	} catch (error) {
		reportError(error);
	}
};

const reportError = (error: any): void => {
	console.error(JSON.stringify(error), 'red');
	throw new Error('No ethereum object.');
};

export {
	isWalletConnected,
	connectWallet,
	performContribute,
	getInfo,
	raiseProposal,
	getProposals,
	getProposal,
	voteOnProposal,
	listVoters,
	payoutBeneficiary
};
