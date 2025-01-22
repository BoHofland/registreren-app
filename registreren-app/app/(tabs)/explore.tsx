import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import AuthHeader from "../../components/AuthHeader"
import AuthInput from "../../components/AuthInput"
import SocialButtons from "../../components/SocialButtons"

export default function RegisterScreen() {
  const navigation = useNavigation()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
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

  const handleRegister = () => {
    if (validateEmail(email)) {
      // Handle registration logic
    }
  }

  return (
    <View style={styles.container}>
      <AuthHeader />
      <View style={styles.content}>
        <Text style={styles.title}>Registreren</Text>
        <Text style={styles.subtitle}>Welkom, maak hier je account aan</Text>

        <AuthInput label="Voornaam" value={firstName} onChangeText={setFirstName} />
        <AuthInput label="Achternaam" value={lastName} onChangeText={setLastName} />
        <AuthInput label="E-mailadres" value={email} onChangeText={setEmail} error={emailError} />
        <AuthInput label="Wachtwoord" value={password} onChangeText={setPassword} isPassword />

        <TouchableOpacity
          style={[
            styles.button,
            (!firstName || !lastName || !email || !password || emailError) && styles.buttonDisabled,
          ]}
          onPress={handleRegister}
          disabled={!firstName || !lastName || !email || !password || !!emailError}
        >
          <Text style={styles.buttonText}>Registreren</Text>
        </TouchableOpacity>

        <SocialButtons text="Of registreer met" />

        <TouchableOpacity onPress={() => navigation.navigate("Login" as never)} style={styles.footer}>
          <Text>
            Heb je al een account? <Text style={styles.link}>Log in</Text>
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
    marginBottom: 20, 
  },
  link: {
    color: "#0066FF",
    fontWeight: "bold",
  },
})

