import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr className={css.thead}>
          <th className={css.type}>Type</th>
          <th className={css.amount}>Amount</th>
          <th className={css.currency}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <td className={css.type}>{transaction.type}</td>
              <td className={css.amount}>{transaction.amount}</td>
              <td className={css.currency}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { TransactionHistory };
