import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'blue.800',
        padding: '0.5rem 2rem',
        lineHeight: 'tall',
        color: 'blue.100',
  
      },
      'ul, li': {
        listStyleType: 'none',
      },
      'h1,h2,h3,h4,h5,h6': {
        color:'orange.400'
      }
    }
  },
  colors: {
    'blue': {
      '50': '#EDF4F8',
      '100': '#CCE0EA',
      '200': '#ACCCDD',
      '300': '#8CB7CF',
      '400': '#6BA3C2',
      '500': '#4B8FB4',
      '600': '#3C7390',
      '700': '#2D566C',
      '800': '#1E3948',
      '900': '#0F1D24'
    },
    'orange': {
      '50': '#FFECE5',
      '100': '#FFC9B8',
      '200': '#FFA68A',
      '300': '#FF835C',
      '400': '#FF602E',
      '500': '#FF3D00',
      '600': '#CC3100',
      '700': '#992500',
      '800': '#661900',
      '900': '#330C00'
    },
    'white': '#f5f0e1',
  },
})