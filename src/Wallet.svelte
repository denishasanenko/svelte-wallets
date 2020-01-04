<script>
    export let activeWallet = {};
</script>

<style>
    .wallet {
        width: 100%;
    }

    .wrapper {
        height: 100%;
        width: 720px;
        margin: 0 auto;
        padding: 24px;
    }

    .head, .stat {
        height: 60px;
    }

    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .stat .item > p {
        line-height: 40px;
        float: left;
        font-size: 18px;
    }

    .stat .item .amount {
        line-height: 24px;
        margin-left: 18px;
        font-weight: bold;
        color: #87B825;
        border: 2px solid #87B825;
        border-radius: 48px;
        padding: 6px 12px;
    }

    .stat .item.expenses .amount {
        color: #4290CE;
        border-color: #4290CE;
    }

    .balance {
        font-size: 24px;
        font-weight: bold;
        color: #87B825;
    }

    .negative {
        color: #FF9900;
    }

    .transactions {
        height: calc(100% - 150px);
        overflow-y: scroll;
    }

    .transactions .transaction {
        height: 60px;
        border-bottom: 1px solid #F1F1F1;
        padding: 12px 0;
    }

    .transactions .transaction > div {
        float: left;
    }

    .transactions .transaction > .amount {
        float: right;
    }

    .info {
        width: 60%;
    }

    .info .title {
        font-size: 18px;
        font-weight: bold;
    }

    .info .time {
        text-transform: capitalize;
        color: #999999;
    }

    .amount p {
        font-size: 18px;
        font-weight: 500;
        line-height: 60px;
        padding: 0 24px;
        color: #4290CE;
    }

    .amount .received {
        color: #87B825;
    }
</style>

<section class="wallet">
    <div class="wrapper">
        <div class="head">
            <h2 class="left">{activeWallet.title}</h2>
            <p class="right balance" class:negative={activeWallet.balance < 0}>{activeWallet.balance/100} {activeWallet.currency}</p>
        </div>
        <div class="stat">
            <div class="item left expenses">
                <p>Total expenses</p>
                <p class="amount">{activeWallet.expenses/100} {activeWallet.currency}</p>
            </div>
            <div class="item right top-up">
                <p>Last top-up</p>
                <p class="amount">{activeWallet.lastTopUp/100} {activeWallet.currency}</p>
            </div>
        </div>

        <div class="transactions">
            {#each activeWallet.transactions || [] as transaction}
                <div class="transaction">
                    <div class="category">

                    </div>
                    <div class="info">
                        <p class="title">{transaction.title}</p>
                        <p class="time">{transaction.operation} - {new Date(transaction.timestamp).toDateString()}</p>
                    </div>
                    <div class="amount right">
                        <p class="{transaction.operation}">{transaction.amount/100} {activeWallet.currency}</p>
                    </div>
                </div>
            {:else}
                <p class="placeholder">You have no operations yet!</p>
            {/each}
        </div>
    </div>
</section>
