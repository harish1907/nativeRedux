import React, { useEffect } from "react";
import { SafeAreaView, Image } from "react-native";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    // accessToken();
    setTimeout(async () => {
      navigation?.replace("UserScreens");
    }, 500);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <Image
        source={{
          uri: "https://imgs.search.brave.com/LnT2NnFpzYhJ4ppOaIoxi_ic4RhpMfbSrfNN505Jb9Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU4LzQx/L2NiLzU4NDFjYmFh/NzJkZjM5Y2YyY2Ix/MGYwYTVmMWE1ZmQ3/LmpwZw",
        }}
        style={{
          height: 250,
          width: 250,
          resizeMode: "contain",
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
