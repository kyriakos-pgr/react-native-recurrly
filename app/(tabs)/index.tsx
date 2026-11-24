import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

//const SafeAreaView =  styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold ">Home</Text>

      <Link href="/onboarding" className="mt-4 font-sans-bold  rounded bg-primary text-white p-4">
      Go to Onboarding</Link>

      <Link href="/(auth)/signIn" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">
      Go to Sign In</Link>

      <Link href="/(auth)/signUp" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">
      Go to Sign Up</Link>

    
    </SafeAreaView>
  );
  
}
