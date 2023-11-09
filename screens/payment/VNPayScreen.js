import { useEffect } from "react";
import { WebView } from "react-native-webview";
import { useSelector } from "react-redux";

export default function VNPAYPaymentScreen() {
  const deposit = useSelector((state) => state.deposit);
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
