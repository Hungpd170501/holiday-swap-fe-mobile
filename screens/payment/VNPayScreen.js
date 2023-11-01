import { WebView } from "react-native-webview";
import { useSelector } from "react-redux";

export default function VNPAYPaymentScreen() {
  const { deposit } = useSelector((state) => state.deposit);
  const handlePaymentResult = (url) => {
    const urlParts = url.split("/");
    const id = urlParts[1];
    console.log(id);
  };
  return (
    <WebView
      source={{ uri: deposit.url }}
      onNavigationStateChange={(navState) => {
        handlePaymentResult(navState.url);
      }}
    />
  );
}
