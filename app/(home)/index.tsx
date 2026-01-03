import { SignOutButton } from '@/components/SignOutButton'
import { SignedIn, useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const { width } = Dimensions.get('window')

export default function Page() {
  const { user } = useUser()
  const router = useRouter()

  const marketOverview = [
    { label: 'Portfolio', value: '$24,750', change: '+2.8%', color: '#10B981' },
    { label: 'Daily P&L', value: '$1,247', change: '+5.2%', color: '#10B981' },
    { label: "Today's Gain", value: '+3.47%', change: '+12.4%', color: '#F59E0B' },
  ]

  const watchlist = [
    { symbol: 'AAPL', price: '$245.67', change: '+1.2%', color: '#10B981' },
    { symbol: 'TSLA', price: '$348.21', change: '-0.8%', color: '#EF4444' },
    { symbol: 'GOOGL', price: '$178.45', change: '+2.1%', color: '#10B981' },
    { symbol: 'MSFT', price: '$425.89', change: '+0.9%', color: '#10B981' },
  ]

  const quickActions = [
    { icon: 'trending-up', title: 'Markets', color: '#22C55E' },
    { icon: 'pie-chart', title: 'Portfolio', color: '#3B82F6' },
    { icon: 'bar-chart', title: 'Watchlist', color: '#F59E0B' },
    { icon: 'calculator', title: 'Trade', color: '#EF4444' },
    { icon: 'newspaper', title: 'News', color: '#8B5CF6' },
    { icon: 'settings', title: 'Settings', color: '#6B7280' },
  ]

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SignedIn>
        {/* ===== HEADER / HERO ===== */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              style={styles.avatar}
              activeOpacity={0.85}
              onPress={() => router.push('/(home)/profile')}
            >
              <Ionicons name="person" size={26} color="#FFF" />
            </TouchableOpacity>

            <View>
              <Text style={styles.greeting}>Welcome back</Text>
              <Text style={styles.userName}>
                {user?.firstName || 'Trader'}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.notification}>
            <Ionicons name="notifications-outline" size={22} color="#FFF" />
            <View style={styles.badge} />
          </TouchableOpacity>
        </View>

        {/* ===== PORTFOLIO HERO CARD ===== */}
        <View style={styles.heroCard}>
          <Text style={styles.heroLabel}>Portfolio Value</Text>
          <Text style={styles.heroValue}>$24,750</Text>
          <Text style={styles.heroChange}>+ $1,247 today (5.2%)</Text>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* ===== MARKET OVERVIEW ===== */}
        <Text style={styles.sectionTitle}>Market Overview</Text>
        <View style={styles.marketList}>
  {marketOverview.map((item, i) => (
    <View key={i} style={styles.marketRow}>
      <View>
        <Text style={styles.marketLabel}>{item.label}</Text>
        <Text style={styles.marketValue}>{item.value}</Text>
      </View>

      <View style={styles.marketRight}>
        <Ionicons
          name="trending-up"
          size={18}
          color={item.color}
        />
        <Text style={[styles.marketChange, { color: item.color }]}>
          {item.change}
        </Text>
      </View>
    </View>
  ))}
</View>


        {/* ===== WATCHLIST ===== */}
        <Text style={styles.sectionTitle}>Watchlist</Text>
        <View style={styles.card}>
          {watchlist.map((item, i) => (
            <View
              key={i}
              style={[
                styles.watchItem,
                i !== watchlist.length - 1 && styles.watchBorder,
              ]}
            >
              <Text style={styles.symbol}>{item.symbol}</Text>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={[styles.change, { color: item.color }]}>
                  {item.change}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* ===== QUICK ACTIONS ===== */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickGrid}>
          {quickActions.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.quickItem}
              activeOpacity={0.85}
            >
              <View
                style={[
                  styles.quickIcon,
                  { backgroundColor: item.color + '22' },
                ]}
              >
                <Ionicons
                  name={item.icon as any}
                  size={22}
                  color={item.color}
                />
              </View>
              <Text style={styles.quickText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ===== SIGN OUT ===== */}
        <View style={styles.signOut}>
          <SignOutButton />
        </View>
      </SignedIn>
    </ScrollView>
  )
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0F1A' },

  /* HEADER */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 32,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(34,197,94,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(34,197,94,0.45)',
  },
  greeting: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '600',
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFF',
  },
  notification: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },

  /* HERO CARD */
  heroCard: {
    backgroundColor: 'rgba(15,23,42,0.95)',
    borderRadius: 26,
    padding: 28,
    marginHorizontal: 24,
    marginBottom: 36,
    borderWidth: 1,
    borderColor: 'rgba(51,65,85,0.7)',
  },
  heroLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 6,
  },
  heroValue: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFF',
    marginBottom: 6,
  },
  heroChange: {
    fontSize: 15,
    fontWeight: '700',
    color: '#22C55E',
    marginBottom: 18,
  },
  progressTrack: {
    height: 6,
    backgroundColor: 'rgba(71,85,105,0.5)',
    borderRadius: 3,
  },
  progressFill: {
    width: '78%',
    height: '100%',
    backgroundColor: '#22C55E',
    borderRadius: 3,
  },

  /* SECTIONS */
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFF',
    marginLeft: 24,
    marginBottom: 16,
  },

  /* MARKET */
  marketGrid: {
    flexDirection: 'row',
    gap: 14,
    paddingHorizontal: 24,
    marginBottom: 36,
  },
  marketCard: {
    flex: 1,
    backgroundColor: 'rgba(15,23,42,0.85)',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(51,65,85,0.6)',
  },
  // marketLabel: {
  //   fontSize: 13,
  //   color: '#9CA3AF',
  //   marginBottom: 6,
  // },
  // marketValue: {
  //   fontSize: 22,
  //   fontWeight: '800',
  //   color: '#FFF',
  // },
  // marketChange: {
  //   fontSize: 14,
  //   fontWeight: '700',
  //   marginTop: 4,
  // },

  /* WATCHLIST */
  card: {
    backgroundColor: 'rgba(15,23,42,0.9)',
    borderRadius: 22,
    padding: 24,
    marginHorizontal: 24,
    marginBottom: 36,
    borderWidth: 1,
    borderColor: 'rgba(51,65,85,0.6)',
  },
  watchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  watchBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(71,85,105,0.3)',
  },
  symbol: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFF',
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFF',
  },/* MARKET OVERVIEW – FIXED */
marketList: {
  marginHorizontal: 24,
  marginBottom: 36,
},

marketRow: {
  backgroundColor: 'rgba(15,23,42,0.9)',
  borderRadius: 18,
  paddingVertical: 18,
  paddingHorizontal: 20,
  marginBottom: 14,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'rgba(51,65,85,0.6)',
},

marketRight: {
  alignItems: 'flex-end',
  gap: 4,
},

marketLabel: {
  fontSize: 14,
  color: '#9CA3AF',
  marginBottom: 4,
  fontWeight: '600',
},

marketValue: {
  fontSize: 22,
  fontWeight: '800',
  color: '#FFF',
},

marketChange: {
  fontSize: 14,
  fontWeight: '700',
},

  change: {
    fontSize: 13,
    fontWeight: '700',
  },

  /* QUICK ACTIONS */
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 36,
  },
  quickItem: {
    width: (width - 72) / 3,
    alignItems: 'center',
    marginBottom: 24,
  },
  quickIcon: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  quickText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFF',
  },

  signOut: {
    marginHorizontal: 24,
    marginBottom: 80,
  },
  
})
