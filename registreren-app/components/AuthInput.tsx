import { View, TextInput, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

interface AuthInputProps {
  label: string
  value: string
  onChangeText: (text: string) => void
  error?: string
  isPassword?: boolean
  placeholder?: string
}

export default function AuthInput({ label, value, onChangeText, error, isPassword, placeholder }: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || label}
        secureTextEntry={isPassword && !showPassword}
      />
      {isPassword && (
        <Ionicons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color="gray"
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}
        />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
  },
  icon: {
    position: "absolute",
    right: 12,
    top: 12,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
})

