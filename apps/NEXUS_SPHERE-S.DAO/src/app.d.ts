import { ExternalProvider, JsonRpcSigner, Web3Provider } from 'ethers';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		ethereum: Ethereum;
		web3: Web3Provider;
	}
}

// Define the custom Ethereum interface
interface Ethereum extends ExternalProvider {
	isMetaMask?: boolean;
	request: (args: { method: string; params?: unknown[] }) => Promise<unkown>;
	on: (event: string, handler: (...args: unknown[]) => void) => void;
}

// Extend ethers.js types if needed
declare module 'ethers' {
	interface Web3Provider {
		provider: ExternalProvider;
		getSigner: (account?: string) => JsonRpcSigner;
	}
}

export {};
