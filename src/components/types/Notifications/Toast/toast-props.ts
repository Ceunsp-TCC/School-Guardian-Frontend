export type ToastType = 'SUCCESS' | 'INFO' | 'ERROR' | 'WARNING'
export type ToastProps = {
  title: string
  toastType?: ToastType
  description: string
  onClick?: () => void
}

export type ShowToastProps = {
  title: string
  toastType: ToastType
  description?: string
  onClick?: () => void
}
