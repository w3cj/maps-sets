import { defineMonacoSetup } from '@slidev/types'

console.log('monaco!!')

export default defineMonacoSetup(async (monaco) => {
  return {
    editorOptions: {
      suggestFontSize: 30,
      fontSize: 30,
    }
  }
})