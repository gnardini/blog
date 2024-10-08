import colors from 'tailwindcss/colors';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const { theme } = resolveConfig(tailwindConfig);

// This is a lie, sometimes colors is recursive.
const customColors = theme!.colors as Record<string, string>;

export const gray0 = colors.white;
export const gray1 = colors.gray[100];
export const gray2 = colors.gray[200];
export const gray3 = colors.gray[300];
export const gray4 = colors.gray[400];
export const gray5 = colors.gray[500];
export const gray6 = colors.gray[600];
export const gray7 = colors.gray[700];
export const gray9 = colors.gray[900];

export const primaryBackground = customColors['primary-background'];
export const primaryAccent = customColors['primary-accent'];
export const textPrimary = customColors['text-primary'];
export const textSecondary = customColors['text-secondary'];
