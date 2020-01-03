<script>
    export let activeWallet = {};
</script>

<section>
    <h2>{activeWallet.title}</h2>
    <p>Current balance</p>
    <p>{activeWallet.balance/100} {activeWallet.currency}</p>
    <p>Total expenses</p>
    <p>{activeWallet.expenses/100} {activeWallet.currency}</p>
    <p>Last top-up</p>
    <p>{activeWallet.lastTopUp/100} {activeWallet.currency}</p>

    <div class="operations">
        <ul>
            {#each activeWallet.operations || [] as operation}
                <li>
                    Operation
                </li>
            {:else}
                <p>You have no operations yet!</p>
            {/each}
        </ul>
    </div>
</section>
