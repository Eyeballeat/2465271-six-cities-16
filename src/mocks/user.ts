import { UserType } from '../types/user-type';

export const user: UserType = {
  name: 'Oliver Conner',
  avatarUrl: 'https://url-to-image/image.png',
  isPro: false,
  email: 'Oliver.conner@gmail.com',
  token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
} as const;
