import { Sidebar } from '@components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { useAuthStore } from '@store'
import { mockUserSchoolState } from '@tests/helpers'
import { act } from 'react-dom/test-utils'

describe('Sidebar', () => {
  it('Should be render a sidebar when is school user', async () => {
    const { result } = renderHook(() => useAuthStore())
    act(() => {
      result.current.setUserState(mockUserSchoolState as any)
    })
    const { getByText } = render(<Sidebar />)

    const linkStudents = getByText('Alunos')
    const linkTeachers = getByText('Professores')

    expect(linkStudents).toBeInTheDocument()
    expect(linkTeachers).toBeInTheDocument()
  })
})