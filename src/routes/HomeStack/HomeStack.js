import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Payment from "../../screens/Payment/Payment";
import Cashout from "../../screens/Cashout/Cashout";
import CashoutForm from "../../screens/Cashout/CashoutForm";
import PaymentRequest from "../../screens/Payment/PaymentRequest";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      name="Home"
      screenOptions={{
        headerShown: false,
      }}

    >
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentRequest" component={PaymentRequest} />
      <Stack.Screen name="Cashout" component={Cashout} />
      <Stack.Screen name="CashoutForm" component={CashoutForm} />

    </Stack.Navigator>
  )
}