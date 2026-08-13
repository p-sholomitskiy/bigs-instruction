import FlagRuImage from '../assets/flags/ru.svg';
import FlagEnImage from '../assets/flags/en.svg';
import FlagTrImage from '../assets/flags/tr.svg';
import FlagUzImage from '../assets/flags/uz.svg';

export const LANGUAGES = [
  { code: 'uz', label: 'Oʻzbekcha', flag: FlagUzImage },
  { code: 'tr', label: 'Türkçe', flag: FlagTrImage },
  { code: 'ru', label: 'Русский', flag: FlagRuImage },
  { code: 'en', label: 'English', flag: FlagEnImage },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]['code'];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';