import type { LanguageCode } from './languages';
import type { DeviceOS } from './operation-system-list';

import LogoAndroidImage from '../assets/device-logo/android.svg';
import LogoIosImage from '../assets/device-logo/ios.svg';
import LogoDesktopImage from '../assets/device-logo/chrome.svg';
import QrCodeImage from '../assets/QR.svg';

import AndroidImageOne from '../assets/instruction-images-webp/android/android-1.webp';
import AndroidImageTwo from '../assets/instruction-images-webp/android/android-2.webp';
import AndroidImageThree from '../assets/instruction-images-webp/android/android-3.webp';

import IOSImageOne from '../assets/instruction-images-webp/ios/ios-1.webp';
import IOSImageTwo from '../assets/instruction-images-webp/ios/ios-2.webp';
import IOSImageThree from '../assets/instruction-images-webp/ios/ios-3.webp';

import DesktopImageOne from '../assets/instruction-images-webp/desktop/desktop-1.webp';
import DesktopImageTwo from '../assets/instruction-images-webp/desktop/desktop-2.webp';
import DesktopImageThree from '../assets/instruction-images-webp/desktop/desktop-3.webp';

export type ContentData = Record<LanguageCode, DeviceContentData & {
  qr: QrDataContent;
  cta: CtaDataContent
  header: HeaderDataContent
}>;

export type DeviceContentData = Record<DeviceOS, {
  title: string,
  logoImage: string
  instructionStepList: string[],
  instructionImageList: string[]
}>;

export type QrDataContent = {
  image: string,
  title: string,
  subTitle: string,
  subText: string,
};

export type CtaDataContent = {
  title: string,
  subText: string,
  buttonText: string
};

export type HeaderDataContent = {
  title: string,
  subTitle: string
};

const AndroidInstructionImageList = [AndroidImageOne, AndroidImageTwo, AndroidImageThree];
const IOSInstructionImageList = [IOSImageOne, IOSImageTwo, IOSImageThree];
const DesktopInstructionImageList = [DesktopImageOne, DesktopImageTwo, DesktopImageThree];

export const CONTENT_DATA: ContentData = {
/*
*                    ╔══════════════════════════════════════════╗
*                    ║                ENGLISH                   ║
*                    ╚══════════════════════════════════════════╝
*/
  en: {
    header: {
      title: 'Quick access to BigsBet',
      subTitle: 'Add BigsBet to your Home Screen and open the site in one tap',
    },
    desktop: {
      title: 'Add on PC (Google Chrome)',
      logoImage: LogoDesktopImage,
      instructionStepList: [
        'Open BigsBet, tap the three-dot menu.',
        'Select "Cast, save, and share".',
        'Choose “Install Bigsbet”.',
      ],
      instructionImageList: DesktopInstructionImageList,
    },
    android: {
      title: 'Add on Android',
      logoImage: LogoAndroidImage,
      instructionStepList: [
        'Open BigsBet in Google Chrome.',
        'Tap the three-dot menu.',
        'Select "Install and create shortcut".',
        'Choose “Create shortcut”.',
      ],
      instructionImageList: AndroidInstructionImageList,
    },
    ios: {
      title: 'Add on iOS',
      logoImage: LogoIosImage,
      instructionStepList: [
        'Open BigsBet in Safari.',
        'Tap the "Share" button.',
        'Select "Add to Home Screen".',
        'Confirm the addition.',
      ],
      instructionImageList: IOSInstructionImageList,
    },
    qr: {
      image: QrCodeImage,
      title: 'Continue on your phone',
      subTitle: 'Scan the QR code with your phone camera',
      subText: 'No download is required — \nthe shortcut is created in your browser',
    },
    cta: {
      title: 'Ready to play?',
      subText: 'Explore the best casino games and exclusive bonuses',
      buttonText: 'Open BigsBet',
    },
  },
  /*
*                    ╔══════════════════════════════════════════╗
*                    ║                RUSSIAN                   ║
*                    ╚══════════════════════════════════════════╝
*/
  ru: {
    header: {
      title: 'Быстрый доступ к BigsBet',
      subTitle: 'Добавьте BigsBet на главный экран и открывайте сайт одним нажатием.',
    },
    desktop: {
      title: 'Добавить на ПК (Google Chrome)',
      logoImage: LogoDesktopImage,
      instructionStepList: [
        'Откройте BigsBet и далее меню с тремя точками.',
        'Нажмите «Транслировать, сохранить, поделиться».',
        '«Установить приложение Bigsbet»',
      ],
      instructionImageList: DesktopInstructionImageList,
    },
    android: {
      title: 'Добавить на Android',
      logoImage: LogoAndroidImage,
      instructionStepList: [
        'Откройте BigsBet в Google Chrome.',
        'Нажмите меню с тремя точками.',
        'Выберите «Установить и создать ярлык».',
        'Выберите «Создать ярлык».',
      ],
      instructionImageList: AndroidInstructionImageList,
    },
    ios: {
      title: 'Добавить на iOS',
      logoImage: LogoIosImage,
      instructionStepList: [
        'Откройте BigsBet в Safari.',
        'Нажмите «Поделиться».',
        'Выберите «На экран "Домой"».',
        'Нажмите «Добавить».',
      ],
      instructionImageList: IOSInstructionImageList,
    },
    qr: {
      image: QrCodeImage,
      title: 'Продолжить на телефоне',
      subTitle: 'Отсканируйте QR-код камерой телефона.',
      subText: 'Скачивать ничего не нужно —\nярлык создаётся прямо в браузере.',
    },
    cta: {
      title: 'Готовы играть?',
      subText: 'Откройте для себя лучшие игры казино\nи эксклюзивные бонусы.',
      buttonText: 'Открыть BigsBet',
    },
  },
  /*
*                    ╔══════════════════════════════════════════╗
*                    ║                TURKISH                   ║
*                    ╚══════════════════════════════════════════╝
*/
  tr: {
    header: {
      title: 'BigsBet’e hızlı erişim',
      subTitle: 'BigsBet’i ana ekranınıza ekleyin ve siteyi tek dokunuşla açın.',
    },
    desktop: {
      title: 'PC’ye ekle (Google Chrome)',
      logoImage: LogoDesktopImage,
      instructionStepList: [
        'BigsBet’i açın ve üç noktalı menüye tıklayın.',
        '“Yayınla, kaydet ve paylaş” seçeneğini seçin.',
        '“BigsBet Uygulamasını Yükle...” seçeneğini seçin.',
      ],
      instructionImageList: DesktopInstructionImageList,
    },
    android: {
      title: 'Android’e ekle',
      logoImage: LogoAndroidImage,
      instructionStepList: [
        'BigsBet’i Google Chrome’da açın.',
        'Üç noktalı menüye dokunun.',
        '“Yükle ve kısayol oluştur” seçeneğine dokunun.',
        '“Kısayol oluştur” seçeneğine dokunun.',
      ],
      instructionImageList: AndroidInstructionImageList,
    },
    ios: {
      title: 'iOS’a ekle',
      logoImage: LogoIosImage,
      instructionStepList: [
        'BigsBet’i Safari’de açın.',
        '“Paylaş” düğmesine dokunun.',
        '“Ana Ekrana Ekle” seçeneğine dokunun.',
        '“Ekle”ye dokunun.',
      ],
      instructionImageList: IOSInstructionImageList,
    },
    qr: {
      image: QrCodeImage,
      title: 'Telefonunuzda devam edin',
      subTitle: 'QR kodunu telefonunuzun kamerasıyla tarayın.',
      subText: 'İndirme gerekmez — \nkısayol doğrudan tarayıcınızda oluşturulur.',
    },
    cta: {
      title: 'Oynamaya hazır mısınız?',
      subText: 'En iyi casino oyunlarını ve özel bonusları keşfedin.',
      buttonText: 'BigsBet’i aç',
    },
  },
  /*
*                    ╔══════════════════════════════════════════╗
*                    ║                UZBEK                     ║
*                    ╚══════════════════════════════════════════╝
*/
  uz: {
    header: {
      title: 'BigsBet’ga tezkor kirish',
      subTitle: 'BigsBet’ni bosh ekranga qo‘shing va saytni bir tegishda oching.',
    },
    desktop: {
      title: 'Kompyuterga qo‘shish (Google Chrome)',
      logoImage: LogoDesktopImage,
      instructionStepList: [
        'BigsBet’ni oching va uch nuqtali menyuni bosing.',
        '“Translatsiya qilish, saqlash va ulashish”ni tanlang.',
        '“BigsBet ilovasini o‘rnatish...”ni tanlang.',
      ],
      instructionImageList: DesktopInstructionImageList,
    },
    android: {
      title: 'Android’ga qo‘shish',
      logoImage: LogoAndroidImage,
      instructionStepList: [
        'BigsBet’ni Google Chrome’da oching.',
        'Uch nuqtali menyuni bosing.',
        '“Oʻrnatish va yorliq yaratish” bandini tanlang.',
        '“Yorliq yaratish” bandini tanlang.',
      ],
      instructionImageList: AndroidInstructionImageList,
    },
    ios: {
      title: 'iOS’ga qo‘shish',
      logoImage: LogoIosImage,
      instructionStepList: [
        'BigsBet’ni Safari’da oching.',
        '«Поделиться» tugmasini bosing.',
        '«На экран "Домой"» bandini tanlang.',
        '«Добавить» tugmasini bosing.',
      ],
      instructionImageList: IOSInstructionImageList,
    },
    qr: {
      image: QrCodeImage,
      title: 'Telefonda davom eting',
      subTitle: 'QR-kodni telefon kamerasi bilan skanerlang.',
      subText: 'Hech narsa yuklab olish shart emas —\nyorliq to‘g‘ridan-to‘g‘ri brauzerda yaratiladi.',
    },
    cta: {
      title: 'O‘ynashga tayyormisiz?',
      subText: 'Eng yaxshi kazino o‘yinlari va eksklyuziv bonuslarni kashf eting.',
      buttonText: 'BigsBet’ni ochish',
    },
  },
};