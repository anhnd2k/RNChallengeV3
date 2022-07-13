export enum APP_SCREEN {
  HOME = 'HOME',
  CARD_ROTATE = 'CARD_ROTATE',
  SPACE_BUTTON = 'SPACE_BUTTON',
  CARD_GRADIENT = 'CARD_GRADIENT',
}

export type RootStackParamList = {
  [APP_SCREEN.HOME]: undefined;
  [APP_SCREEN.CARD_ROTATE]: undefined;
  [APP_SCREEN.CARD_GRADIENT]: undefined;
  [APP_SCREEN.SPACE_BUTTON]: undefined;
};
