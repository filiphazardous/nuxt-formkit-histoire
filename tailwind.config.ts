import { fontFamily } from 'tailwindcss/defaultTheme';

/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js,ts,mdx}',
    './nuxt.config.{js,ts}',
      './formkit-*.ts',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '320px',
      md: '650px',
      lg: '880px',
      xl: '1920px',
    },
    containers: {
      sm: '320px',
      md: '650px',
      lg: '880px',
      xl: '1920px',
    },
    fontSize: {
      base: ['1rem', '1.5rem'],
      sm: ['0.875rem', '1.125rem'],
      md: ['1.125rem', '1.75rem'],
      lg: ['1.250rem', '1.75rem'],
    },
    colors: {
      white: '#fff',
      black: '#000',
      current: 'currentColor',
      transparent: 'transparent',
      blue: {
        50: '#f7fcfe',
        100: '#c0e1f0',
        200: '#91c6e3',
        300: '#65abd6',
        400: '#3e90c9',
        500: '#1b73bc',
        600: '#236ca8',
        700: '#2a6496',
        800: '#2d5b82',
        900: '#274e70',
      },
      green: {
        50: '#e3f4e5',
        100: '#b9e4bd',
        200: '#8bd392',
        300: '#5dc166',
        400: '#3ab345',
        500: '#17a624',
        600: '#18941e',
        700: '#1d891f',
        800: '#19751a',
        900: '#145f15',
      },
      red: {
        50: '#fff5f3',
        100: '#f5c9c1',
        200: '#eb9f94',
        300: '#e07969',
        400: '#d65442',
        500: '#cd301e',
        600: '#c22715',
        700: '#b31d0c',
        800: '#a81707',
        900: '#9c1000',
      },
      orange: {
        50: '#fffbf4',
        100: '#f7e1be',
        200: '#f0c58d',
        300: '#fba329',
        400: '#e88515',
        500: '#da6c07',
        600: '#d66406',
        700: '#d05905',
        800: '#c94904',
        900: '#c23d02',
      },
      gray: {
        50: '#fafafa',
        100: '#f4f4f4',
        200: '#d8d8d8',
        300: '#aaa',
        400: '#949494',
        500: '#7a7a7a',
        600: '#636363',
        700: '#4d4d4d',
        800: '#3c3c3c',
        900: '#262626',
      },
      brand: {
        facebook: '#4267B2',
        twitter: '#1DA1F2',
        linkedin: '#0077B5',
        youtube: '#FF0000',
        x: '#000000',
      },
      'primary-light': '#f7fcfe',
      primary: '#1b73bc',
      'primary-dark': '#2d5b82',
      'primary-darker': '#274e70',
      'secondary-light': '#e3f4e5',
      secondary: '#17a624',
      'secondary-dark': '#1d891f',
      'secondary-darker': '#145f15',
      'tertiary-light': '#fff5f3',
      tertiary: '#cd301e',
      'tertiary-dark': '#9c1000',
      'accent-light': '#fffbf4',
      accent: '#da6c07',
      'accent-dark': '#c23d02',
      text: '#4d4d4d',
      link: '#1b73bc',
      'link-hover': '#2d5b82',
      info: '#1b73bc',
      'info-light': '#f7fcfe',
      warning: '#d05905',
      'warning-light': '#fffbf4',
      success: '#145f15',
      'success-light': '#e3f4e5',
      error: '#cd301e',
      'error-light': '#fff5f3',
      help: '#145f15',
      'heading-alt': '#1d891f',
      idle: '#aaa',
      subdued: '#7a7a7a',
      placeholder: '#949494',
      border: '#d8d8d8',
      'border-focus': '#4d4d4d',
      'divider-soft': '#d8d8d8',
      'divider-strong': '#aaa',
      'hover-hint': 'rgba(0, 0, 0, 0.10)',
      'input-text': '#4d4d4d',
      'input-placeholder': '#949494',
      'input-border': '#d8d8d8',
      'input-border-focus': '#4d4d4d',
      'input-bg': '#fff',
      'input-error': '#cd301e',
      inherit: 'inherit',
    },
    boxShadow: {
      'hard-sm':
        '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
      'hard-md':
        '0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
      'hard-lg':
        '0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.2)',
      'soft-sm': '0 2px 3px 0 rgba(0, 0, 0, 0.15)',
      'soft-md': '0 2px 16px -2px rgba(0, 0, 0, 0.15)',
      'inset-sm': 'inset 0 1px 3px rgb(0, 0, 0, 0.3)',
      orange: '0px 1px 3px 0px rgba(218, 108, 7, 1)',
      green: '0px 1px 3px 0px rgba(29, 137, 31, 1)',
      'tabs-active': '0 5px 10px -2px rgba(0, 0, 0, 0.15)',
      'content-accordion': 'inset -5px 0px 3px -2px rgba(0,0,0,.15)',
      none: 'none',
    },
    typography: (theme: PluginAPI['theme']) => ({
      DEFAULT: {
        css: {
          '*:last-child': {
            marginBottom: '0 !important',
          },
          lineHeight: '1.625rem',
          wordBreak: 'break-word',
          wordWrap: 'break-word',
          color: theme('colors.gray.700'),
          h2: {
            color: theme('colors.green.700'),
            fontWeight: 700,
            fontFamily: '"Paralucent Condensed", Arial, Helvetica, sans-serif',
            fontSize: '1.7rem',
            lineHeight: '1.875rem',
            marginTop: '1rem',
            marginBottom: '1rem',
            '&:first-child': {
              marginTop: '0',
            },
          },
          h3: {
            fontWeight: 400,
            fontFamily: '"Paralucent Condensed", Arial, Helvetica, sans-serif',
            fontSize: '1.65rem',
            lineHeight: '2.125rem',
            marginTop: '1rem',
            marginBottom: '0.75rem',
            '&:first-child': {
              marginTop: '0',
            },
          },
          h4: {
            fontWeight: 400,
            fontFamily: '"Paralucent Condensed", Arial, Helvetica, sans-serif',
            fontSize: '1.2rem',
            lineHeight: '1.4375rem',
            marginTop: '0',
            marginBottom: '0',
          },
          a: {
            color: theme('colors.blue.500'),
            textDecoration: 'underline',
            '&:hover': {
              color: theme('colors.blue.800'),
              textDecoration: 'none',
            },
            '&:focus-visible': {
              outline: '3px solid rgb(27, 115, 188)',
              outlineOffset: '2px',
              borderRadius: '0.25rem',
              color: theme('colors.blue.800'),
            },
          },
          p: {
            marginTop: '0',
            marginBottom: '.5rem',
            width: '100%',
            '&:last-of-type': {
              marginBottom: '0 !important',
            },
          },
          strong: {
            fontWeight: 700,
          },
          table: {
            borderSpacing: '0',
            maxWidth: '100%',
            display: 'inline-block',
            overflow: 'auto',
            margin: '0 0 1em',
            '& thead': {
              backgroundColor: theme('colors.gray.50'),
              textAlign: 'left',
              borderRadius: '0.25rem',
              overflow: 'hidden',
            },
            '& th': {
              padding: '0.5rem',
              whiteSpace: 'nowrap',
            },
            '& tbody td': {
              padding: '0.5rem',
              wordBreak: 'normal',
              position: 'relative',
              '&::after': {
                content: '""',
                backgroundImage:
                  'linear-gradient(to top,#d8d8d8 0%,#fafafa 50%)',
                height: '6px',
                position: 'absolute',
                top: '0px',
                left: '0',
                width: '100%',
              },
            },
          },
          hr: {
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
          },
          'ul, ol': {
            marginTop: '0',
            padding: 0,
            listStyle: 'none',
            marginBottom: '1.75rem',
          },
          'ul li': {
            paddingLeft: '1.75rem',
            position: 'relative',
            marginBottom: '0.5rem',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '0.5625rem',
              height: '0.5625rem',
              borderRadius: '11px',
              marginTop: '0.45em',
              top: '0',
              left: '0',
              background: theme('colors.green.700'),
            },
          },
          ol: {
            counterReset: 'item',
          },
          'ol li': {
            counterIncrement: 'list',
            listStyleType: 'none',
            position: 'relative',
            marginLeft: '28px',
            marginBottom: '20px',
            paddingLeft: '1em',
            paddingTop: '0.1875em',
            '&::before': {
              backgroundColor: theme('colors.white'),
              borderRadius: '50%',
              boxShadow:
                '0 1px 5px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2)',
              color: theme('colors.green.700'),
              content: 'counter(list) ""',
              left: '-2rem',
              top: '0',
              lineHeight: '1.625rem',
              position: 'absolute',
              textAlign: 'center',
              height: '2rem',
              width: '2rem',
              padding: '0.1875rem',
            },
          },
          blockquote: {
            display: 'flex',
            border: 'none',
            margin: '1rem 0 !important',
            maxWidth: theme('screens.md'),
            '&::before': {
              content: '""',
              display: 'inline-block',
              marginRight: '1.25rem',
              backgroundImage:
                'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMWQ4OTFmIiBkPSJtMjAgMGMtMTEuMSAwLTIwIDguOS0yMCAyMHM4LjkgMjAgMjAgMjAgMjAtOC45IDIwLTIwLTguOS0yMC0yMC0yMHptLTUuMiAyOC4zYy0xIDEuMy0xLjkgMi0yLjcgMi0uOSAwLTEuMy0uNC0xLjMtMS4zIDAtLjMuMy0uOC44LTEuNC45LTEuMSAxLjctMi4zIDIuMy0zLjguNy0xLjQgMS4xLTIuNSAxLjEtMy4ycy0uNC0xLjEtMS4yLTEuMWgtMS4zYy0uOS0uMS0xLjctLjQtMi4zLTEuMi0uNy0uOC0xLTEuNy0xLTIuOCAwLTEuMi40LTIuMiAxLjMtMy4xczItMS4yIDMuMi0xLjJjMS41IDAgMi43LjYgMy43IDEuOHMxLjUgMi43IDEuNSA0LjdjLS4xIDMuNC0xLjQgNy00LjEgMTAuNnptMTEuOSAwYy0xLjEgMS4zLTEuOSAyLTIuNyAycy0xLjItLjQtMS4yLTEuM2MwLS4zLjItLjguOC0xLjQuOC0xLjEgMS42LTIuMyAyLjMtMy44LjctMS40IDEuMS0yLjUgMS4xLTMuMnMtLjQtMS4xLTEuMi0xLjFoLTEuM2MtLjktLjEtMS44LS40LTIuNC0xLjItLjctLjgtMS0xLjctMS0yLjggMC0xLjIuNC0yLjIgMS4zLTMuMS45LS44IDItMS4yIDMuMi0xLjIgMS41IDAgMi44LjYgMy43IDEuOCAxIDEuMiAxLjUgMi43IDEuNSA0LjcgMCAzLjMtMS40IDYuOS00LjEgMTAuNnoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              height: '40px',
              width: '40px',
            },
            '& p': {
              color: theme('colors.green.700'),
              fontFamily:
                '"Paralucent Condensed", Arial, Helvetica, sans-serif',
              margin: '0',
              fontSize: '1.4rem',
              lineHeight: '1.6rem',
              maxWidth: theme('screens.md'),
              '&::before': {
                content: '"“"',
              },
              '&::after': {
                content: '"”"',
              },
            },
          },
        },
      },
      lg: {
        css: {
          h2: {
            fontSize: '2.35rem',
            lineHeight: '3rem',
          },
          blockquote: {
            alignItems: 'center',
            '&::before': {
              width: '64px',
              height: '64px',
            },
            '& p': {
              fontSize: '1.9rem',
              lineHeight: '2.5rem',
            },
          },
        },
      },
    }),
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        4: '1rem',
        5: '1.25rem',
        'gutter-sm': '0.5rem',
        gutter: '1rem',
        'gutter-lg': '1.5rem',
      },
      borderRadius: {
        large: '22px',
      },
      opacity: {
        15: '0.15',
        57: '0.57',
      },
      scale: {
        1: '0.01',
        115: '1.15',
        120: '1.2',
        250: '2.5',
      },
      margin: {
        '1/2': '0.125rem',
      },
      padding: {
        15: '3.75rem',
        22: '5.25rem',
      },
      width: {
        14: '3.5rem',
        15: '3.75rem',
      },
      height: {
        'header-height': 'var(--header-height)',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '17': '4.25rem',
      },
      zIndex: {
        1: '1',
        11: '11',
      },
      textShadow: {
        sm: '1px 1px 5px var(--tw-shadow-color)',
        DEFAULT: '0 0 6px var(--tw-shadow-color)',
        none: 'none',
      },
      transformOrigin: {
        'top-center': 'top center',
        'bottom-center': 'bottom center',
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        progress: 'progress-rotate 1.4s linear infinite',
        'progress-dash': 'progress-rotate-dash 1.4s ease-in-out infinite',
        'nav-block-hide': 'nav-block-hide 0.4s ease-in-out 1 normal forwards',
        'nav-block-show': 'nav-block-show 0.4s ease-in-out 1 normal forwards',
        'u-bounce': 'u-bounce 2s infinite',
        'u-shake': 'u-shake 0.9s ease-in-out',
        ripple: 'ripple-ripple 0.4s linear',
        'scale-ripple': 'scale-ripple-ripple 1s ease-in-out',
        'scale-from-center': 'scale-ripple-ripple 0.2s ease-in-out',
      },
      keyframes: {
        'ripple-ripple': {
          '100%': {
            opacity: '0',
            transform: 'scale(2.5)',
          },
        },
        'progress-rotate': {
          '100%': { transform: 'rotate(270deg)' },
        },
        'progress-rotate-dash': {
          '0%': { strokeDasharray: '1, 100', strokeDashoffset: '0' },
          '50%': { strokeDasharray: '45, 100', strokeDashoffset: '-20px' },
          '100%': { strokeDasharray: '45, 100', strokeDashoffset: '-62px' },
        },
        'nav-block-hide': {
          '99.999%': { visibility: 'visible' },
          '100%': { visibility: 'hidden' },
        },
        'nav-block-show': {
          '0.0001%': { visibility: 'visible' },
          '100%': { visibility: 'visible' },
        },
        'u-bounce': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        'u-shake': {
          '10%': {
            transform: 'translateX(0)',
          },
          '30%': {
            transform: 'translateX(-16px)',
          },
          '50%': {
            transform: 'translateX(16px)',
          },
          '70%': {
            transform: 'translateX(-8px)',
          },
          '90%': {
            transform: 'translateX(8px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'scale-ripple-ripple': {
          '0%': {
            transform: 'scaleX(0)',
          },
          '20%': {
            transform: 'scaleX(1)',
            opacity: '0.2',
          },
          '100%': {
            transform: 'scaleX(1)',
            opacity: '0',
          },
        },
        'scale-from-center-ripple': {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        size: 'width, height',
        spacing: 'margin, padding',
      },
      transitionTimingFunction: {
        back: 'cubic-bezier(.8, .7, .6, 1.6)',
      },
      aspectRatio: {
        square: '1 / 1',
        '5/3': '5 / 3',
      },
      fontFamily: {
        lato: ['Lato', ...fontFamily.sans],
        paralucent: ['Paralucent Condensed', ...fontFamily.sans],
        mono: ['Roboto Mono', ...fontFamily.mono],
      },
      dropShadow: {
        'hard-sm':
          '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // require('@headlessui/tailwindcss'),
    require('@tailwindcss/container-queries'),
    require('@formkit/themes/tailwindcss'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.storybook-bg': {
          '@apply mx-auto container rounded my-6 bg-[#e3f4e5] p-6 md:p-8 lg:p-12 shadow-soft-md':
            {},
        },
        '.storybook-bg-inner': {
          '@apply p-6 md:p-8 bg-white rounded shadow-hard-sm': {},
        },
        '.storybook-popup': {
          '@apply relative cursor-pointer font-lato': {},
        },
        '.heading-1': {
          '@apply font-paralucent font-bold text-[2.375rem]/[2rem] lg:text-[4.75rem]/[4rem]':
            {},
        },
        '.heading-2': {
          '@apply font-paralucent font-bold text-[1.75rem]/[2rem] lg:text-[2.35rem]/none':
            {},
        },
        '.heading-3': {
          '@apply font-paralucent font-normal text-[1.65rem]/[1.6875rem]': {},
        },
        '.heading-4': {
          '@apply font-paralucent font-normal text-[1.1875rem]/[1.4375rem] mb-3':
            {},
        },
        '.preamble': {
          '@apply text-[1.1875rem]/[1.75rem] lg:text-[1.375rem]/[2rem]': {},
        },
        '.blockquote': {
          '@apply font-paralucent font-normal text-[1.4rem]/[2rem] lg:text-[1.9rem]/[2.5rem]':
            {},
        },
        '.container-heading-2': {
          '@apply font-paralucent font-bold text-[1.75rem]/[2rem] mb-gutter-sm':
            {},
        },
        '.site-width': {
          '@apply max-w-[960px] mx-auto': {},
        },
        '.site-width-inner': {
          '@apply max-w-[700px] mx-auto': {},
        },
        '.green-gradient': {
          '@apply bg-gradient-to-b from-green-500 to-green-700': {},
        },
        '.gray-gradient': {
          '@apply bg-gradient-to-b from-white to-gray-100': {},
        },
        '.gutter-top': {
          '@apply mt-12 lg:mt-14': {},
        },
        '.gutter-bottom': {
          '@apply mb-12 lg:mb-14': {},
        },
        '.no-gutter': {
          '@apply !mt-0 !mb-0 lg:!mt-0 lg:!mb-0': {},
        },
        '.u-grid-1': {
          '@apply grid grid-cols-1 gap-6 lg:gap-10 gutter-bottom': {},
        },
        '.u-grid-2': {
          '@apply grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 gutter-bottom':
            {},
        },
        '.u-grid-3': {
          '@apply grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 gutter-bottom':
            {},
        },
        '.wysiwyg': {
          '@apply prose lg:prose-lg': {},
        },
        '.container': {
          '@apply @container bg-white rounded [&>div]:p-5 [&>div]:@sm:p-10': {},
        },
        '.container-brick': {
          '@apply bg-white rounded p-5': {},
        },
        '.icon-sm': {
          '@apply w-4 h-4 flex': {},
        },
        '.icon-md': {
          '@apply w-6 h-6 flex': {},
        },
        '.icon-lg': {
          '@apply w-10 h-10 flex': {},
        },
        '.ui-card-default': {
          '@apply rounded bg-white py-5 pl-5 pr-1 md:py-10 md:pl-10 md:pr-2 [&_.ui-card-inner]:pr-4 [&_.ui-card-inner]:md:pr-8':
            {},
        },
        '.ui-card-container': {
          '@apply rounded bg-white @container [&_.ui-card-inner]:p-5 [&_.ui-card-inner]:@sm:p-10':
            {},
        },
        '.ui-card-brick': {
          '@apply rounded bg-white py-5 pl-5 pr-1 [&_.ui-card-inner]:pr-4': {},
        },
      });
    }),
  ],
} satisfies Config;
