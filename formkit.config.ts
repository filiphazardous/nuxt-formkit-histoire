import "@formkit/themes/genesis"
import { genesisIcons } from "@formkit/icons"
import { defineFormKitConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes';
import formkitTheme from './formkit-theme';

export default defineFormKitConfig({
  config: {
    classes: generateClasses(formkitTheme),
  },
  icons: { ...genesisIcons }
})
