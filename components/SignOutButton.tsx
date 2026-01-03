import { COLORS, SHARED_STYLES, TYPOGRAPHY } from '@/app/styles'
import { useClerk } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const SignOutButton = () => {
  const { signOut } = useClerk()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      router.replace('/(auth)/sign-in')
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <TouchableOpacity
      style={styles.signOutButton}
      onPress={handleSignOut}
      activeOpacity={0.8}
    >
      <Text style={styles.signOutText}>Sign Out</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  signOutButton: {
    ...SHARED_STYLES.buttonSecondary,
    borderColor: COLORS.error,
  },
  signOutText: {
    ...TYPOGRAPHY.link,
    color: COLORS.error,
    fontWeight: '600',
  },
})
