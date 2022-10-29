import {
  GRAY_100,
  GRAY_200,
  GRAY_300,
  GRAY_400,
  GRAY_500,
  GRAY_600,
  WHITE,
  DRACULAR_BACKGROUND_DEEP_DARK,
  PURPLE_DARK,
  GREEN
} from "@src/constants/palette";

import { ColorTheme } from "./types";

export const dark: Readonly<ColorTheme> = Object.freeze({
  scheme: {
    $white: WHITE,

    $gray100: GRAY_100,
    $gray200: GRAY_200,
    $gray300: GRAY_300,
    $gray400: GRAY_400,
    $gray500: GRAY_500,
    $gray600: GRAY_600,
    $tagFontColor: GREEN
  },
  semanticScheme: {
    sideBarBg: PURPLE_DARK,
    mainBg: DRACULAR_BACKGROUND_DEEP_DARK,
  },
});
