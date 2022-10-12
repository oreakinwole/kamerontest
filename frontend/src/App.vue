<template>
  <div id="app">
    <h5>Deposit Accounts: {{ summary.depositAccounts }}</h5>
    <h5>LoanAccounts: {{ summary.loanAccounts }}</h5>
    <div>
      <h5>Deposit Summary:</h5>
      <p>Total: {{ summary.depositSummary.availableTotal }}</p>
      <p>Opening Total: {{ summary.depositSummary.openingLedgerTotal }}</p>
    </div>
    <h5>Loan Accounts: {{ summary.loanAccounts }}</h5>
    <p>
      <span>Principal Balance Total: {{ summary.loanSummary.principalBalanceTotal }}</span>
    </p>
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  name: 'App',
  apollo: {
    // Simple query that will update the 'hello' vue property
    summary: gql`
      query {
        summary {
          depositAccounts
          loanAccounts
          depositSummary {
            availableTotal
            openingLedgerTotal
          }
          loanSummary {
            principalBalanceTotal
          }
        }
      }
    `,
  },

  components: {},
};
</script>
