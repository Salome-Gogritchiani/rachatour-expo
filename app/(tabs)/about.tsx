import { StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const aboutSections = [
  {
    title: 'რა არის Rachatour?',
    description:
      'Rachatour არის ტურისტული კომპანია, რომელიც გთავაზობთ უნიკალურ ტურისტულ გამოცდილებას საქართველოში.',
    icon: 'wine',
  },
  {
    title: 'ჩვენი მისია',
    description:
      'ჩვენი მიზანია მოგაწოდოთ უმაღლესი ხარისხის ტურისტული სერვისები და დავეხმაროთ მოგზაურებს აღმოაჩინონ საქართველოს სილამაზე.',
    icon: 'earth',
  },
];

const advantages = [
  { text: 'გამოცდილი გიდები', icon: 'ribbon' },
  { text: 'უსაფრთხო და კომფორტული ტრანსპორტი', icon: 'bus' },
  { text: 'ინდივიდუალური მიდგომა', icon: 'people' },
  { text: 'კონკურენტუნარიანი ფასები', icon: 'cash' },
];

export default function AboutScreen() {
  const colorScheme = useColorScheme();
  const primary = useThemeColor({}, 'primary');
  const cardBg = useThemeColor({}, 'cardBackground');
  const border = useThemeColor({}, 'border');
  const accent = useThemeColor({}, 'accent');
  const secondary = useThemeColor({}, 'secondary');

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}
    >
      <ThemedView style={styles.content}>
        <ThemedView style={[styles.headerSection, { backgroundColor: primary }]}>
          <Ionicons name="vine" size={44} color="#FFF5F0" style={styles.headerIcon} />
          <ThemedText type="title" style={[styles.title, { color: '#FFFFFF' }]}>
            ჩვენს შესახებ
          </ThemedText>
          <ThemedText style={[styles.headerText, { color: '#FCE7E7' }]}>Racha • Adventure • Wine</ThemedText>
        </ThemedView>

        {aboutSections.map((section) => (
          <ThemedView
            key={section.title}
            style={[styles.section, { backgroundColor: cardBg, borderColor: border }]}
          >
            <ThemedView style={[styles.iconContainer, { backgroundColor: secondary }]}>
              <Ionicons name={section.icon as any} size={28} color="#FFF5F0" />
            </ThemedView>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: primary }]}>
              {section.title}
            </ThemedText>
            <ThemedText style={styles.sectionText}>{section.description}</ThemedText>
          </ThemedView>
        ))}

        <ThemedView style={[styles.section, { backgroundColor: cardBg, borderColor: border }]}
        >
          <ThemedView style={[styles.iconContainer, { backgroundColor: secondary }]}>
            <Ionicons name="trophy" size={28} color="#FFF5F0" />
          </ThemedView>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: primary }]}>
            რატომ ჩვენ?
          </ThemedText>
          <ThemedView style={styles.featureList}>
            {advantages.map((item) => (
              <ThemedView
                key={item.text}
                style={[styles.featureItem, { borderLeftColor: accent }]}
              >
                <Ionicons name={item.icon as any} size={20} color={primary} style={styles.featureIcon} />
                <ThemedText style={styles.featureText}>{item.text}</ThemedText>
              </ThemedView>
            ))}
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
  headerSection: {
    padding: 28,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8B1538',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
    gap: 12,
  },
  headerIcon: {
    marginBottom: 4,
  },
  headerText: {
    fontSize: 14,
    letterSpacing: 1,
  },
  title: {
    textAlign: 'center',
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
    gap: 12,
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
    marginBottom: 4,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  featureList: {
    gap: 12,
  },
  featureItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureIcon: {
    marginRight: 4,
  },
  featureText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

