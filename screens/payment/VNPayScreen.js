import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { DEPOSIT_RESET } from "../../redux/constants/depositConstants";

export default function VNPAYPaymentScreen() {
  const deposit = useSelector((state) => state.deposit);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePaymentResult = (url) => {
    let id;
    if (url) {
      const urlParts = url?.split("/");
      id = urlParts[1];
    }
    console.log(id, "oh");
  };

  useEffect(() => {
    console.log(deposit?.deposit?.url ?? ``, "deposit");
    console.log("Check deposit", typeof deposit.url);

    if (deposit && deposit?.deposit?.url?.includes("vnp_Amount")) {
      navigation.navigate("root");
      dispatch({ type: DEPOSIT_RESET });
    }
  }, [deposit]);

  return (
    <>
      {deposit && deposit.deposit && deposit.deposit.url && (
        <WebView
          source={{ uri: `${deposit?.deposit?.url}` }}
          onNavigationStateChange={(navState) => {
            console.log(navState);
            handlePaymentResult(navState?.url ?? ``);
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          // injectedJavaScript={this.state.cookie}
          startInLoadingState={false}
        />
      )}
    </>
  );
}
