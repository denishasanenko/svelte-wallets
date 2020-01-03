<script>
	import { onMount } from 'svelte';
	import Wallets from './Wallets.svelte'
	import Wallet from "./Wallet.svelte";

	export let name;


	let activeWallet = {};
	let activeWalletId = 1;
	let wallets = [
		{
			id: 1,
			type: 'Visa',
			title: 'Main wallet',
			balance: 200000,
			currency: 'UAH'
		},
		{
			id: 2,
			type: 'Master Card',
			title: 'Moneybox',
			balance: 430034,
			currency: 'USD'
		},
		{
			id: 3,
			type: 'Master Card',
			title: 'Credit',
			balance: -1900034,
			currency: 'USD'
		}
	];

	const activateWallet = (id) => {
		activeWalletId = id;
		activeWallet = {
			...wallets.find(wallet => wallet.id === id),
			lastTopUp: 30032,
			expenses: 43002141,
			operations: []
		};
	};

	onMount(() => {
		activateWallet(1);
	});
</script>

<style>
	main {
		display: flex;
		height: 100%;
	}

	main > * {
		height: 100%;
	}
</style>

<main>
	<Wallets wallets={wallets} activeWalletId={activeWalletId} on:activateWallet={event => activateWallet(event.detail)} />
	<Wallet activeWallet={activeWallet} />
</main>
