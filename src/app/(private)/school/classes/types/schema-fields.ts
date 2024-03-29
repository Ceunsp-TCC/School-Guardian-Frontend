import { z } from 'zod'
import { filtersSchema } from '@/app/(private)/school/classes/schemas'

export type FiltersFields = z.infer<typeof filtersSchema>
