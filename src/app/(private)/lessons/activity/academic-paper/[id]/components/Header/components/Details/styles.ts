import { Button } from '@/components'
import tw from 'tailwind-styled-components'

export const ContainerMaster = tw.div`
flex
w-full
justify-center
`
export const ContainerMasterItems = tw.div`
border
border-gray-500
p-10
flex
flex-col
justify-center
text-white
items-center
w-full
h-56
`

export const TitleItem = tw.p`
font-extrabold
xl:text-3xl
text-xl
`

export const DescriptionItem = tw.p`
xl:text-xl
text-lg
`

export const ButtonCustom = tw(Button)`
text-sm
h-12
items-center
`

export const ContainerGraphAvaliationButton = tw.div`
flex
flex-col

`
