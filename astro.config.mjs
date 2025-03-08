// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            // Tailwind CSS v4 uyumluluğu için ayarlar
            applyBaseStyles: false, // Base stilleri otomatik uygulamasını kapat, çünkü v4'te bu işlemi @import hallediyor
        }),
    ],
});
