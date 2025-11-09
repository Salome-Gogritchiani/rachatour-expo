import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const quickActions = [
  {
    title: 'ჩვენს შესახებ',
    subtitle: 'გაიცანი გუნდი და ისტორია',
    icon: 'people',
    href: '/(tabs)/about',
  },
  {
    title: 'კონტაქტი',
    subtitle: 'დაგვირეკე ან მოგვწერე',
    icon: 'chatbubbles',
    href: '/(tabs)/contact',
  },
  {
    title: 'ტურები',
    subtitle: 'განრიგი და შეთავაზებები',
    icon: 'map',
    href: '/modal',
  },
  {
    title: 'სერვისები',
    subtitle: 'ტრანსპორტი, გიდები, მეტი',
    icon: 'briefcase',
    href: '/(tabs)/about',
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const primary = useThemeColor({}, 'primary');
  const cardBg = useThemeColor({}, 'cardBackground');
  const border = useThemeColor({}, 'border');
  const accent = useThemeColor({}, 'accent');

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}
    >
      <ThemedView style={styles.content}>
        <ThemedView style={[styles.headerCard, { backgroundColor: primary }]}
        >
          <Ionicons name="compass" size={46} color="#FFF5F0" style={styles.headerIcon} />
          <ThemedText type="title" style={[styles.title, { color: '#FFFFFF' }]}
          >მოგესალმებით!</ThemedText>
          <ThemedText style={[styles.description, { color: '#FFF5F0' }]}
          >ეს არის Rachatour აპლიკაციის მთავარი გვერდი</ThemedText>
        </ThemedView>

        <ThemedView style={styles.menuGrid}>
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href} asChild>
              <TouchableOpacity style={[styles.menuCard, { backgroundColor: cardBg, borderColor: border }]}>
                <ThemedView style={[styles.menuIconBadge, { backgroundColor: accent }]}>
                  <Ionicons name={action.icon as any} size={26} color={primary} />
                </ThemedView>
                <ThemedText type="subtitle" style={[styles.menuTitle, { color: primary }]}>
                  {action.title}
                </ThemedText>
                <ThemedText style={styles.menuSubtitle}>{action.subtitle}</ThemedText>
                <ThemedView style={styles.menuFooter}>
                  <ThemedText style={[styles.menuFooterText, { color: primary }]}>გადასვლა</ThemedText>
                  <Ionicons name="arrow-forward" size={20} color={primary} />
                </ThemedView>
              </TouchableOpacity>
            </Link>
          ))}
        </ThemedView>

        <ThemedView style={[styles.section, { backgroundColor: cardBg, borderColor: border }]}>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: primary }]}
          >ჩვენი სერვისები</ThemedText>
          <ThemedView style={styles.serviceList}>
            <ThemedView style={[styles.serviceItem, { borderLeftColor: accent }]}>
              <ThemedText style={styles.serviceText}>🍷 ტურისტული ტურები</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.serviceItem, { borderLeftColor: accent }]}>
              <ThemedText style={styles.serviceText}>🚗 ტრანსპორტირება</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.serviceItem, { borderLeftColor: accent }]}>
              <ThemedText style={styles.serviceText}>🏨 ჰოსტინგი</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.serviceItem, { borderLeftColor: accent }]}>
              <ThemedText style={styles.serviceText}>💼 კონსულტაცია</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  headerCard: {
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#8B1538',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    gap: 10,
  },
  headerIcon: {
    marginBottom: 4,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  menuCard: {
    width: '48%',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 6,
    gap: 10,
  },
  menuIconBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 18,
  },
  menuSubtitle: {
    fontSize: 14,
    opacity: 0.8,
  },
  menuFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 6,
    marginTop: 4,
  },
  menuFooterText: {
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    gap: 12,
  },
  sectionTitle: {
    marginBottom: 4,
    fontSize: 22,
  },
  serviceList: {
    gap: 12,
  },
  serviceItem: {
    paddingLeft: 16,
    paddingVertical: 12,
    borderLeftWidth: 4,
    borderRadius: 4,
  },
  serviceText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
