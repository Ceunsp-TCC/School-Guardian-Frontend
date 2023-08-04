import { schoolGuardianApi } from '@services'
import type { DefaultResponse } from '@types'

export const userServices = {
  validEmail: async (email: string) => {
    const body = {
      email,
    }

    const response = await schoolGuardianApi.post<DefaultResponse>(
      '/v1/users/valid-email',
      body,
      {
        auth: {
          username:
            process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_AUTHENTICATOR_USERNAME,
          password:
            process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_AUTHENTICATOR_PASSWORD,
        },
      },
    )

    return response.data
  },
  validZipcode: async (zipcode: string) => {
    const body = {
      zipcode,
    }

    const response = await schoolGuardianApi.post<DefaultResponse>(
      '/v1/users/valid-zipcode',
      body,
    )

    return response.data
  },
}
