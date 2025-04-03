import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/balance";
import Guest from "@/components/guest";
import IncomeExpense from "@/components/inomeExpense";
import TransactionList from "@/components/transactionList";
import { currentUser } from "@clerk/nextjs/server";


const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />
  }
  return ( 
    <main>
      <h2>Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </main>
   );
}
 
export default HomePage;