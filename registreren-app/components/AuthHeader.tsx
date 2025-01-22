import { View, Image, StyleSheet, Dimensions } from "react-native"

export default function AuthHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "",
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "#0066FF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
})

