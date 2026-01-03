// app/styles.ts - Create this file for shared styles
import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#7C3AED', // Soft purple from Student Mitra
  primaryLight: '#8B5CF6',
  primaryDark: '#6D28D9',
  background: '#F9FAFB',
  card: '#FFFFFF',
  text: '#1F2937',
  textLight: '#6B7280',
  border: '#E5E7EB',
  error: '#EF4444',
  success: '#10B981',
};

export const TYPOGRAPHY = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    color: COLORS.text,
    lineHeight: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.text,
    marginBottom: 8,
  },
  link: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '500',
  },
  small: {
    fontSize: 14,
    color: COLORS.textLight,
  },
});

export const SHARED_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    width: '100%',
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: COLORS.text,
  },
  gradientButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
});