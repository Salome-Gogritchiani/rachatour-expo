import { StyleSheet, ScrollView, Linking, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const contactActions = [
  {
    label: 'ტელეფონი',
    value: '+995 555 123 456',
    icon: 'call',
    onPress: () => {
      const phoneNumber = '+995555123456';
      const url = Platform.select({ ios: `telprompt:${phoneNumber}`, android: `tel:${phoneNumber}` });
      if (url) Linking.openURL(url);
    },
  },
  {
    label: 'ელ. ფოსტა',
    value: 'info@rachatour.ge',
    icon: 'mail',
    onPress: () => Linking.openURL('mailto:info@rachatour.ge'),
  },
  {
    label: 'ვებ-საიტი',
    value: 'www.rachatour.ge',
    icon: 'globe',
    onPress: () => Linking.openURL('https://www.rachatour.ge'),
  },
];

export default function ContactScreen() {
  const colorScheme = useColorScheme();
  const primary = useThemeColor({}, 'primary');
  const cardBg = useThemeColor({}, 'cardBackground');
  const border = useThemeColor({}, 'border');
  const accent = useThemeColor({}, 'accent');
  const secondary = useThemeColor({}, 'secondary');
  const sectionBackground = useThemeColor({}, 'sectionBackground');

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}
    >
      <ThemedView style={styles.content}>
        <ThemedView style={[styles.headerSection, { backgroundColor: primary }]}>
          <Ionicons name="chatbubbles" size={42} color="#FFF5F0" />
          <ThemedText type="title" style={[styles.title, { color: '#FFFFFF' }]}
          >დაგვიკავშირდით</ThemedText>
          <ThemedText style={[styles.headerSubtitle, { color: '#FCE7E7' }]}
          >მოგზაურობა იწყება დიალოგით</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.section, { backgroundColor: cardBg, borderColor: border }]}
        >
          <ThemedView style={[styles.iconContainer, { backgroundColor: secondary }]}>
            <Ionicons name="call" size={28} color="#FFF5F0" />
          </ThemedView>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: primary }]}>
            კონტაქტის ინფორმაცია
          </ThemedText>

          {contactActions.map((item) => (
            <TouchableOpacity
              key={item.label}
              onPress={item.onPress}
              style={[styles.contactItem, { backgroundColor: sectionBackground, borderColor: accent }]}
            >
              <ThemedView style={[styles.contactIconBadge, { backgroundColor: primary }]}
              >
                <Ionicons name={item.icon as any} size={20} color="#FFF5F0" />
              </ThemedView>
              <ThemedView style={styles.contactTextWrapper}>
                <ThemedText style={styles.contactLabel}>{item.label}</ThemedText>
                <ThemedText style={[styles.contactValue, { color: primary }]}>{item.value}</ThemedText>
              </ThemedView>
              <Ionicons name="chevron-forward" size={18} color={accent} />
            </TouchableOpacity>
          ))}
        </ThemedView>

        <ThemedView style={[styles.section, { backgroundColor: cardBg, borderColor: border }]}
        >
          <ThemedView style={[styles.iconContainer, { backgroundColor: secondary }]}>
            <Ionicons name="location" size={28} color="#FFF5F0" />
          </ThemedView>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: primary }]}>
            მისამართი
          </ThemedText>
          <ThemedText style={styles.sectionText}>
            თბილისი, საქართველო{'
'}რუსთაველის გამზირი 1{'
'}0108
          </ThemedText>
        </ThemedView>

        <ThemedView style={[styles.section, { backgroundColor: cardBg, borderColor: border }]}
        >
          <ThemedView style={[styles.iconContainer, { backgroundColor: secondary }]}>
            <Ionicons name="time" size={28} color="#FFF5F0" />
          </ThemedView>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: primary }]}>
            სამუშაო საათები
          </ThemedText>
          <ThemedText style={styles.sectionText}>
            ორშაბათი - პარასკევი: 09:00 - 18:00{'
'}შაბათი: 10:00 - 16:00{'
'}კვირა: დასვენება
          </ThemedText>
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
  headerSection: {
    padding: 28,
    borderRadius: 20,
    alignItems: 'center',
    gap: 12,
    shadowColor: '#8B1538',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
  },
  title: {
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    letterSpacing: 0.5,
  },
  section: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 6,
    gap: 16,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 22,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
  },
  contactIconBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactTextWrapper: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 13,
    opacity: 0.7,
  },
  contactValue: {
    fontSize: 18,
    fontWeight: '600',
  },
});

