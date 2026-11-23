import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

const SafeAreaView =  styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">
      Go to Onboarding</Link>

      <Link href="/(auth)/signIn" className="mt-4 rounded bg-primary text-white p-4">
      Go to Sign In</Link>

      <Link href="/(auth)/signUp" className="mt-4 rounded bg-primary text-white p-4">
      Go to Sign Up</Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link
      href={{
        pathname: "/subscriptions/[id]",
        params: { id: "claude" },
      }}
      >

        Claude Max Subscription 
      </Link>
    </View>
    </SafeAreaView>
  );
  
}
