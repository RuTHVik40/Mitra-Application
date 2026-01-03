import { useSSO } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Preloads the browser for Android devices to reduce authentication load time
// See: https://docs.expo.dev/guides/authentication/#improving-user-experience
export const useWarmUpBrowser = () => {
  useEffect(() => {
    if (Platform.OS !== 'android') return
    void WebBrowser.warmUpAsync()
    return () => {
      // Cleanup: closes browser when component unmounts
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

// Handle any pending authentication sessions
WebBrowser.maybeCompleteAuthSession()

interface GoogleSignProps {
  disabled?: boolean
}

export default function GoogleSign({ disabled = false }: GoogleSignProps) {
  useWarmUpBrowser()
  
  const [isLoading, setIsLoading] = useState(false)
  
  // Use the `useSSO()` hook to access the `startSSOFlow()` method
  const { startSSOFlow } = useSSO()

  const onPress = useCallback(async () => {
    if (disabled) return
    
    setIsLoading(true)
    try {
      // Start the authentication process by calling `startSSOFlow()`
      const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
        strategy: 'oauth_google',
        // For web, defaults to current path
        // For native, you must pass a scheme, like AuthSession.makeRedirectUri({ scheme, path })
        // For more info, see https://docs.expo.dev/versions/latest/sdk/auth-session/#authsessionmakeredirecturioptions
        redirectUrl: AuthSession.makeRedirectUri(),
      })

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({
          session: createdSessionId,
          // Check for session tasks and navigate to custom UI to help users resolve them
          // See https://clerk.com/docs/guides/development/custom-flows/overview#session-tasks
          navigate: async ({ session }) => {
            if (session?.currentTask) {
              console.log(session?.currentTask)
              // router.push('/sign-in/tasks')
              return
            }

            // router.push('/')
          },
        })
      } else {
        // If there is no `createdSessionId`,
        // there are missing requirements, such as MFA
        // See https://clerk.com/docs/guides/development/custom-flows/authentication/oauth-connections#handle-missing-requirements
      }
    } catch (err) {
      // See https://clerk.com/docs/guides/development/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    } finally {
      setIsLoading(false)
    }
  }, [disabled, startSSOFlow])

  return (
    <TouchableOpacity 
      style={[
        styles.googleButton,
        disabled && styles.buttonDisabled
      ]} 
      onPress={onPress} 
      activeOpacity={0.8}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#4285F4" size="small" />
      ) : (
        <>
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color="#000000ff" />
          </View>
          <Text style={styles.googleText}>Continue with Google</Text>
        </>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  googleIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  googleText: {
    color: '#3C4043',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
})