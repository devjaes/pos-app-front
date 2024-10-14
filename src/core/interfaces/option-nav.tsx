export interface IOption {
  label: string
  redirect?: string | URL | (() => void)
  type: 'button' | 'option' | 'image'
}
