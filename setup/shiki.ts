import { defineShikiSetup } from '@slidev/types'
import JustBlackTheme from '../just-black-theme.json';

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: JustBlackTheme,
    },
  }
})