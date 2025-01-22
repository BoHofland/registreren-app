import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import AuthHeader from "../../components/AuthHeader"
import AuthInput from "../../components/AuthInput"
import SocialButtons from "../../components/SocialButtons"

export default function LoginScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError("Vul een geldig e-mailadres in")
      return false
    }
    setEmailError("")
    return true
  }

  const handleLogin = () => {
    if (validateEmail(email)) {
      // Handle login logic
    }
  }

  return (
    <View style={styles.container}>
      <AuthHeader />
      <View style={styles.content}>
        <Text style={styles.title}>Welkom terug!</Text>
        <Text style={styles.subtitle}>Welkom terug we hebben je gemist</Text>

        <AuthInput label="E-mailadres" value={email} onChangeText={setEmail} error={emailError} />
        <AuthInput label="Wachtwoord" value={password} onChangeText={setPassword} isPassword />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Wachtwoord vergeten?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, (!email || !password || emailError) && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={!email || !password || !!emailError}
        >
          <Text style={styles.buttonText}>Inloggen</Text>
        </TouchableOpacity>

        <SocialButtons text="Of login met" />

        <TouchableOpacity onPress={() => navigation.navigate("Register" as never)} style={styles.footer}>
          <Text>
            Nieuw bij de app? <Text style={styles.link}>Registreren</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  forgotPassword: {
    color: "#666",
    textAlign: "right",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#0066FF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  buttonDisabled: {
    backgroundColor: "#99C2FF",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: "auto",
    alignItems: "center",
  },
  link: {
    color: "#0066FF",
    fontWeight: "bold",
  },
})

