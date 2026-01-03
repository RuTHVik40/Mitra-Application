import { SignOutButton } from '@/components/SignOutButton'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const { width } = Dimensions.get('window')

export default function ProfileScreen() {
  const { user, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && !user) {
      router.replace('/(auth)/sign-in')
    }
  }, [isLoaded, user])

  if (!isLoaded || !user) return null

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={22} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 44 }} />
      </View>

      {/* PROFILE CARD */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={34} color="#FFF" />
        </View>

        <Text style={styles.name}>
          {user.firstName || 'Trader'} {user.lastName || ''}
        </Text>
        <Text style={styles.username}>
          @{user.username || user.primaryEmailAddress?.emailAddress?.split('@')[0]}
        </Text>
        <Text style={styles.email}>
          {user.primaryEmailAddress?.emailAddress}
        </Text>
      </View>

      {/* ACCOUNT DETAILS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Details</Text>

        <View style={styles.card}>
          <InfoRow
            icon="id-card"
            label="Trader ID"
            value={user.id}
          />
          <Divider />
          <InfoRow
            icon="mail"
            label="Email"
            value={user.primaryEmailAddress?.emailAddress || ''}
          />
          <Divider />
          <InfoRow
            icon="shield-checkmark"
            label="Status"
            value="Active Trader"
            accent
          />
        </View>
      </View>

      {/* SECURITY */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security</Text>
        <View style={styles.card}>
          <View style={styles.securityRow}>
            <Ionicons name="lock-closed" size={20} color="#22C55E" />
            <Text style={styles.securityText}>Secure Session Active</Text>
          </View>
          <SignOutButton />
        </View>
      </View>

      {/* APP INFO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Application</Text>
        <View style={styles.cardCenter}>
          <Ionicons name="trending-up" size={30} color="#22C55E" />
          <Text style={styles.appName}>ShareTrack</Text>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
          <Text style={styles.appDesc}>
            Professional trading platform for portfolio management and market insights.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

/* ================= HELPERS ================= */

function InfoRow({
  icon,
  label,
  value,
  accent,
}: {
  icon: any
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoLeft}>
        <Ionicons
          name={icon}
          size={18}
          color={accent ? '#22C55E' : '#9CA3AF'}
        />
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <Text
        style={[
          styles.infoValue,
          accent && { color: '#22C55E' },
        ]}
        numberOfLines={2}
      >
        {value}
      </Text>
    </View>
  )
}

function Divider() {
  return <View style={styles.divider} />
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F1A',
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 24,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFF',
  },

  /* PROFILE */
  profileCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(15,23,42,0.95)',
    marginHorizontal: 24,
    marginBottom: 36,
    padding: 32,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(51,65,85,0.6)',
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: 'rgba(34,197,94,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'rgba(34,197,94,0.45)',
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFF',
    marginBottom: 4,
  },
  username: {
    fontSize: 15,
    fontWeight: '700',
    color: '#22C55E',
    marginBottom: 6,
  },
  email: {
    fontSize: 14,
    color: '#9CA3AF',
  },

  /* SECTIONS */
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 16,
  },

  /* CARDS */
  card: {
    backgroundColor: 'rgba(15,23,42,0.9)',
    borderRadius: 22,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(51,65,85,0.6)',
  },
  cardCenter: {
    backgroundColor: 'rgba(15,23,42,0.9)',
    borderRadius: 22,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(51,65,85,0.6)',
  },

  /* INFO ROW */
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoLabel: {
    fontSize: 15,
    color: '#9CA3AF',
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFF',
    maxWidth: '60%',
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(71,85,105,0.4)',
  },

  /* SECURITY */
  securityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  securityText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF',
  },

  /* APP INFO */
  appName: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFF',
    marginTop: 12,
  },
  appVersion: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 10,
  },
  appDesc: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 22,
  },
})
