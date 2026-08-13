export const DEVICE_OS = {
  ANDROID: 'android',
  IOS: 'ios',
  DESKTOP: 'desktop',
} as const;

export type DeviceOS = (typeof DEVICE_OS)[keyof typeof DEVICE_OS];