<script>
	import Wallets from './Wallets.svelte'
	import Wallet from "./Wallet.svelte";

	export let name;

	let activeWallet = 2;
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
		activeWallet = id;
	}
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
	<Wallets wallets={wallets} activeWallet={activeWallet} on:activateWallet={event => activateWallet(event.detail)} />
	<Wallet/>
</main>
