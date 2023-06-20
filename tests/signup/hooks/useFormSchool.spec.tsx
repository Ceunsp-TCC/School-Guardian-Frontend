import { renderHook } from '@testing-library/react'
import { useFormSchool } from '@/app/(public)/signup/hooks'
import { faker } from '@faker-js/faker'
import { act } from 'react-dom/test-utils'

const schoolNameMock = faker.company.name()
const schoolEmailMock = faker.internet.email()
const schoolPhoneNumberMock = faker.phone.number('119########')
const schoolCNPJMock = faker.string.numeric(14)

describe('useFormSchool', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useFormSchool())

    expect(result.current.errors).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.handleNavigate).toBeDefined()
  })

  it('Should call onSubmit with data when is submitted', () => {
    const { result } = renderHook(() => useFormSchool())

    const mockConsoleLog = jest.spyOn(console, 'log')
    const mockData = {
      name: schoolNameMock,
      email: schoolEmailMock,
      phoneNumber: schoolPhoneNumberMock,
      CNPJ: schoolCNPJMock,
    }
    act(() => {
      result.current.onSubmit(mockData)
    })

    expect(mockConsoleLog).toHaveBeenCalledWith('fields', mockData)

    mockConsoleLog.mockReset()
    mockConsoleLog.mockRestore()
  })
})