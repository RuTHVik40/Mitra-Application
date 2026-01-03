import { ClerkLoaded, useAuth } from '@clerk/clerk-expo'
import { Redirect, Stack } from 'expo-router'

export default function AuthLayout() {
  const { isSignedIn } = useAuth()

  return (
    <ClerkLoaded>
      {isSignedIn ? (
        <Redirect href="/(home)" />
      ) : (
        <Stack screenOptions={{ headerShown: false }} />
      )}
    </ClerkLoaded>
  )
}
