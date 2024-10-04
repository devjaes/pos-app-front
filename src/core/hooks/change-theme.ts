import { useCallback } from 'react'
import { THEMES } from '../contants/themes'
import { ElementType } from '../types/element-type'

export const UseChangeTheme = () => {
  const link: HTMLLinkElement | null = document.getElementById(
    'theme-link'
  ) as HTMLLinkElement

  const handleThemeChange = useCallback(
    (newTheme: ElementType<typeof THEMES>) => {
      if (!link) {
        return
      }
      console.log('link.href', link.href)
      const themePath = './themes/' + newTheme + '/theme.css'
      link.href = themePath
    },
    [link]
  )

  return { handleThemeChange }
}
