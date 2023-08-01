import Students from '@/app/(private)/students/page'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { act } from 'react-dom/test-utils'
import { ToastContainerCustom } from '@components'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('Students', () => {
  it('Should be render a students page', async () => {
    const { getByText } = render(<Students />, {
      wrapper,
    })

    const title = getByText('Alunos')
    const description = getByText('Gerencie seus alunos')
    const newStudentButton = getByText('Novo')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(newStudentButton).toBeInTheDocument()
  })
  it('Should be open modal new student', async () => {
    const { getByText, debug } = render(<Students />, {
      wrapper,
    })

    const newStudentButton = getByText('Novo')

    act(() => {
      fireEvent.click(newStudentButton)
    })

    const titleModal = getByText('Registre seu aluno')

    expect(titleModal).toBeInTheDocument()
  })
})
