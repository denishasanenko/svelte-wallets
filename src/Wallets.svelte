<script>
    import { createEventDispatcher } from 'svelte';
    export let wallets = [];
    export let activeWalletId = 0;

    const dispatch = createEventDispatcher();

    const activateWallet = (id) => {
        dispatch('activateWallet', id);
    };
</script>

<style>
    section {
        padding: 24px;
        box-sizing: border-box;
        width: 288px;
        background: #f2f2f2;
    }

    .wallet {
        width: 100%;
        height: 180px;
        margin: 24px auto;
        background: white;
        padding: 24px;
        box-sizing: border-box;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }

    .title {
        font-size: 24px;
        margin-bottom: 12px;
    }

    .balance {
        color: #008000;
        font-size: 24px;
    }

    .balance.negative {
        color: red;
    }

    .wallet:hover {
        padding: 22px;
        cursor: pointer;
        border: 2px solid rgba(30, 144, 255, 0.37);
    }

    .wallet.active {
        padding: 22px;
        border: 2px solid dodgerblue;
    }
</style>

<section>
    <h1>My wallets</h1>
    {#each wallets as wallet}
        <div class="wallet" class:active={wallet.id === activeWalletId} on:click={() => activateWallet(wallet.id)}>
            <p>Wallet name</p>
            <p class="title">{wallet.title}</p>
            <p>Current balance</p>
            <p class="balance" class:negative={wallet.balance < 0}>{wallet.balance/100} {wallet.currency}</p>
        </div>
    {/each}
</section>
