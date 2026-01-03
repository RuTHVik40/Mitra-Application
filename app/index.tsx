import { ClerkLoaded, ClerkLoading, useAuth } from '@clerk/clerk-expo'
import { Redirect } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'

export default function Index() {
  const { isSignedIn } = useAuth()

  return (
    <>
      <ClerkLoading>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      </ClerkLoading>

      <ClerkLoaded>
        {isSignedIn ? (
          <Redirect href="/(home)" />
        ) : (
          <Redirect href="/(auth)/sign-in" />
        )}
      </ClerkLoaded>
    </>
  )
}
