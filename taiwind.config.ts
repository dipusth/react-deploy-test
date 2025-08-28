// tailwind.config.ts
import { type Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        nohemi: ['Nohemi', 'sans-serif'], // <== custom font name
      },
    },
  },
  plugins: [],
};

export default config;
