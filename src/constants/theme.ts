/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// რახას ფერები - ღვინისფერი/წითელი პალიტრა
const tintColorLight = '#8B1538'; // ღვინისფერი
const tintColorDark = '#C41E3A'; // ღია წითელი

export const Colors = {
  light: {
    text: '#2C1810',
    background: '#FFF5F0',
    tint: tintColorLight,
    icon: '#8B1538',
    tabIconDefault: '#A0A0A0',
    tabIconSelected: tintColorLight,
    primary: '#8B1538', // მთავარი ღვინისფერი
    secondary: '#C41E3A', // მეორე წითელი
    accent: '#D4A574', // ოქროსფერი აქცენტი
    cardBackground: '#FFFFFF',
    sectionBackground: '#FFF8F5',
    border: '#E8D5C4',
  },
  dark: {
    text: '#FFF5F0',
    background: '#1A0F0A',
    tint: tintColorDark,
    icon: '#C41E3A',
    tabIconDefault: '#6B6B6B',
    tabIconSelected: tintColorDark,
    primary: '#C41E3A', // ღია წითელი
    secondary: '#8B1538', // ღვინისფერი
    accent: '#D4A574', // ოქროსფერი აქცენტი
    cardBackground: '#2A1F1A',
    sectionBackground: '#241914',
    border: '#3D2E24',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
