import { ethers } from 'ethers';
import { setGlobalState, getGlobalState } from './store';
import abi from './abis/NexusDAO.json';

const { ethereum } = window;

const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();

const connectWallet = async () => {
	try {
		if (!ethereum) return alert('Please install Metamask');
		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		setGlobalState('connectedAccount', accounts[0].toLowerCase());
	} catch (error) {
		reportError(error);
	}
};

const isWallectConnected = async () => {
	try {
		if (!ethereum) return alert('Please install Metamask');
		const accounts = await ethereum.request({ method: 'eth_accounts' });

		window.ethereum.on('chainChanged', () => {
			window.location.reload();
		});

		window.ethereum.on('accountsChanged', async () => {
			setGlobalState('connectedAccount', accounts[0].toLowerCase());
			await isWallectConnected();
		});

		if (accounts.length) {
			setGlobalState('connectedAccount', accounts[0].toLowerCase());
		} else {
			alert('Please connect wallet.');
			console.log('No accounts found.');
		}
	} catch (error) {
		reportError(error);
	}
};

const getEthereumContract = async () => {
	const connectedAccount = getGlobalState('connectedAccount');

	if (connectedAccount) {
		const network = await provider.getNetwork();
		const networkData = abi.networks[network.chainId];
		if (networkData) {
			const contract = new ethers.Contract(networkData.address, abi.abi, signer);
			return contract;
		} else {
			return null;
		}
	} else {
		return getGlobalState('contract');
	}
};

const performContribute = async (amount: string) => {
	try {
		amount = ethers.utils.parseEther(amount);
		const contract = await getEthereumContract();
		const account = getGlobalState('connectedAccount');

		await contract.contribute({ from: account, value: amount });

		window.location.reload();
	} catch (error) {
		reportError(error);
		return error;
	}
};

const getInfo = async () => {
	try {
		if (!ethereum) return alert('Please install Metamask');

		const contract = await getEthereumContract();
		const connectedAccount = getGlobalState('connectedAccount');
		const isStakeholder = await contract.isStakeholder({ from: connectedAccount });
		const balance = await contract.daoBalance();
		const mybalance = await contract.getBalance({ from: connectedAccount });

		setGlobalState('balance', ethers.utils.formatEther(balance));
		setGlobalState('mybalance', ethers.utils.formatEther(mybalance));
		setGlobalState('isStakeholder', isStakeholder);
	} catch (error) {
		reportError(error);
	}
};

const raiseProposal = async ({ title, description, beneficiary, amount }) => {
	try {
		amount = ethers.utils.parseEther(amount);
		const contract = await getEthereumContract();
		const account = getGlobalState('connectedAccount');

		await contract.createProposal(title, description, beneficiary, amount, { from: account });

		window.location.reload();
	} catch (error) {
		reportError(error);
		return error;
	}
};

const getProposals = async () => {
	try {
		if (!ethereum) return alert('Please install Metamask');

		const contract = await getEthereumContract();
		const proposals = await contract.getProposals();
		setGlobalState('proposals', structuredProposals(proposals));
	} catch (error) {
		reportError(error);
	}
};

const structuredProposals = (proposals) => {
	return proposals
		.map((proposal) => ({
			id: proposal.id,
			amount: ethers.utils.formatEther(proposal.amount),
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

const getProposal = async (id) => {
	try {
		const proposals = getGlobalState('proposals');
		return proposals.find((proposal) => proposal.id === id);
	} catch (error) {
		reportError(error);
	}
};

const voteOnProposal = async (proposalId, supported) => {
	try {
		const contract = await getEthereumContract();
		const account = getGlobalState('connectedAccount');
		await contract.performVote(proposalId, supported, { from: account });

		window.location.reload();
	} catch (error) {
		reportError(error);
	}
};

const listVoters = async (id) => {
	try {
		const contract = await getEthereumContract();
		const votes = await contract.getVotesOf(id);
		return votes;
	} catch (error) {
		reportError(error);
	}
};

const payoutBeneficiary = async (id) => {
	try {
		const contract = await getEthereumContract();
		const account = getGlobalState('connectedAccount');
		await contract.payBeneficiary(id, { from: account });
		window.location.reload();
	} catch (error) {
		reportError(error);
	}
};

const reportError = (error) => {
	console.log(JSON.stringify(error), 'red');
	throw new Error('No ethereum object.');
};

export {
	isWallectConnected,
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
