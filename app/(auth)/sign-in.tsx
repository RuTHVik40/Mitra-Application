import { COLORS } from '@/app/styles'
import { useSignIn } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import * as React from 'react'
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

const { width } = Dimensions.get('window')

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

  const fadeAnim = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start()
  }, [])

  const onSignInPress = async () => {
    if (!isLoaded) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        router.replace('/')
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message ?? 'Invalid email or password')
    } finally {
      setIsLoading(false)
    }
  }

  const isFormValid = emailAddress.trim() && password.trim()

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Decorative Market Lines */}
          <View style={styles.decorativeChart1} />
          <View style={styles.decorativeChart2} />
          <View style={styles.priceTick1} />
          <View style={styles.priceTick2} />

          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <View style={styles.logoWrapper}>
                <Ionicons name="log-in" size={36} color={COLORS.success} />
              </View>
              <Text style={styles.title}>Welcome Back</Text>
            </View>
            <Text style={styles.subtitle}>
              Access your trading dashboard
            </Text>
          </View>

          {/* Card */}
          <View style={styles.card}>
            <View style={styles.form}>
              {/* Email */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Trading Email</Text>
                <TextInput
                  style={[styles.input, error && styles.inputError]}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholder="trader@invest.com"
                  placeholderTextColor="rgba(156,163,175,0.5)"
                  value={emailAddress}
                  onChangeText={(v) => {
                    setEmailAddress(v)
                    setError(null)
                  }}
                />
              </View>

              {/* Password */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Trading Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[
                      styles.input,
                      styles.passwordInput,
                      error && styles.inputError,
                    ]}
                    secureTextEntry={!isPasswordVisible}
                    placeholder="Enter your password"
                    placeholderTextColor="rgba(156,163,175,0.5)"
                    value={password}
                    onChangeText={(v) => {
                      setPassword(v)
                      setError(null)
                    }}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    <Ionicons
                      name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                      size={20}
                      color="rgba(156,163,175,0.7)"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Error */}
              {error && (
                <View style={styles.errorBox}>
                  <Ionicons name="alert-circle" size={16} color={COLORS.error} />
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              )}

              {/* Sign In Button */}
              <TouchableOpacity
                style={[
                  styles.signInButton,
                  (!isFormValid || isLoading) && styles.buttonDisabled,
                ]}
                onPress={onSignInPress}
                disabled={!isFormValid || isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="#FFF" />
                ) : (
                  <>
                    <Text style={styles.signInButtonText}>Enter Market</Text>
                    <Ionicons name="arrow-forward" size={20} color="#FFF" />
                  </>
                )}
              </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View style={styles.signUpSection}>
              <Text style={styles.signUpText}>
                New to trading?
              </Text>
              <Link href="/sign-up" asChild>
                <TouchableOpacity>
                  <Text style={styles.signUpLinkText}>Open Account</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Animated.View>
  )
}

/* ================= MATCHING STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0F1A' },
  keyboardAvoidingView: { flex: 1 },
  scrollContent: { flexGrow: 1, padding: 24, paddingTop: 60 },

  decorativeChart1: {
    position: 'absolute',
    width: width * 0.6,
    height: 4,
    backgroundColor: 'rgba(34,197,94,0.3)',
    top: 140,
    right: 40,
    transform: [{ rotate: '-20deg' }],
  },
  decorativeChart2: {
    position: 'absolute',
    width: width * 0.45,
    height: 3,
    backgroundColor: 'rgba(239,68,68,0.25)',
    bottom: 220,
    left: 50,
    transform: [{ rotate: '15deg' }],
  },
  priceTick1: {
    position: 'absolute',
    width: 70,
    height: 2,
    backgroundColor: 'rgba(59,130,246,0.4)',
    top: 240,
    right: 120,
  },
  priceTick2: {
    position: 'absolute',
    width: 90,
    height: 2,
    backgroundColor: 'rgba(16,185,129,0.4)',
    bottom: 280,
    left: 100,
  },

  header: { alignItems: 'center', marginBottom: 36 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoWrapper: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: 'rgba(34,197,94,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  title: { fontSize: 34, fontWeight: '900', color: '#22C55E' },
  subtitle: { fontSize: 16, color: '#9CA3AF', marginTop: 6 },

  card: {
    backgroundColor: 'rgba(15,23,42,0.9)',
    borderRadius: 28,
    padding: 32,
    borderWidth: 1,
    borderColor: 'rgba(51,65,85,0.6)',
  },

  form: { marginBottom: 28 },
  inputContainer: { marginBottom: 24 },
  inputLabel: { color: '#F8FAFC', fontWeight: '700', marginBottom: 10 },
  input: {
    height: 56,
    backgroundColor: 'rgba(30,41,59,0.7)',
    borderRadius: 16,
    paddingHorizontal: 18,
    color: '#FFF',
  },
  inputError: { borderColor: 'red', borderWidth: 1 },

  passwordContainer: { position: 'relative' },
  passwordInput: { paddingRight: 50 },
  eyeIcon: { position: 'absolute', right: 16, top: 16 },

  errorBox: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(239,68,68,0.2)',
    padding: 14,
    borderRadius: 12,
  },
  errorText: { color: '#FECACA', flex: 1 },

  signInButton: {
    height: 60,
    borderRadius: 20,
    backgroundColor: '#22C55E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  signInButtonText: { color: '#FFF', fontWeight: '800', fontSize: 18 },
  buttonDisabled: { opacity: 0.6 },

  signUpSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  signUpText: { color: '#9CA3AF', marginRight: 6 },
  signUpLinkText: { color: '#22C55E', fontWeight: '800' },
})
