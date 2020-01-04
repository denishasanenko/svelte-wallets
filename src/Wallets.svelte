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
    .wallets {
        padding: 24px;
        box-sizing: border-box;
        width: 420px;
        background: #F7F7F7;
        border-right: 1px solid #F1F1F1;
    }

    .wrapper {
        overflow-y: scroll;
        height: 100%;
        width: calc(100% + 48px);
        margin-left: -24px;
    }

    .wallet {
        width: 90%;
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
        color: #87B825;
        font-size: 24px;
    }

    .balance.negative {
        color: #FF9900;
    }

    .wallet:hover {
        padding: 22px;
        cursor: pointer;
        border: 2px solid #B7D5ED;
    }

    .wallet.active {
        padding: 22px;
        border: 2px solid #4290CE;
    }
</style>

<section class="wallets">
    <h1>My wallets</h1>
    <div class="wrapper">
        {#each wallets as wallet}
            <div class="wallet" class:active={wallet.id === activeWalletId} on:click={() => activateWallet(wallet.id)}>
                <p>Wallet name</p>
                <p class="title">{wallet.title || ''}</p>
                <p>Current balance</p>
                <p class="balance" class:negative={wallet.balance < 0}>{(wallet.balance || 0)/100} {wallet.currency || ''}</p>
            </div>
        {:else}
            <p>You have no wallets yet</p>
        {/each}
    </div>
</section>
