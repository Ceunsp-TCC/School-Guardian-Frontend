import { Sidebar } from '@components'
import { render, renderHook } from '@testing-library/react'
import { useAuthStore } from '@store'
import { mockUserSchoolState, mockUserStudentState } from '@tests/helpers'
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
    const linkCourses = getByText('Cursos')
    const linkClasses = getByText('Turmas')

    expect(linkStudents).toBeInTheDocument()
    expect(linkTeachers).toBeInTheDocument()
    expect(linkCourses).toBeInTheDocument()
    expect(linkClasses).toBeInTheDocument()
  })
  it('Should be render a sidebar when is teacher or student user', async () => {
    const { result } = renderHook(() => useAuthStore())
    act(() => {
      result.current.setUserState(mockUserStudentState as any)
    })
    const { getByText } = render(<Sidebar />)

    const linkLessons = getByText('Aulas')

    expect(linkLessons).toBeInTheDocument()
  })
  it('Should be render a sidebar when is student user', async () => {
    const { result } = renderHook(() => useAuthStore())
    act(() => {
      result.current.setUserState(mockUserStudentState as any)
    })
    const { getByText } = render(<Sidebar />)

    const linkLessons = getByText('Aulas')
    const linkOrtographyCorrections = getByText('Correção ortográfica')

    expect(linkLessons).toBeInTheDocument()
    expect(linkOrtographyCorrections).toBeInTheDocument()
  })
})
