import React from 'react';

export const themesBTN = {
      light: {
        foreground: '#000000',
        background: '#eeeeee',
      },
      dark: {
        foreground: '#ffffff',
        background: 'pink',
      }
}

export const themesBody = {
      green: {
        background: '#99ff99'
      },
      white: {
        background: 'white'
      }
}

export const ThemeBTN = React.createContext(themesBTN.light)
export const ThemeBody = React.createContext(themesBody.white)