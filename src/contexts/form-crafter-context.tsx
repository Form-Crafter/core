import { createContext, FC, PropsWithChildren, useMemo, useState } from 'react'

import { ComponentModule } from '_types'

type FormCrafterContext = {
    theme: ComponentModule<any>[]
    PlaceholderComponent: FC
}

export const formCrafterContext = createContext<FormCrafterContext | null>(null)

const { Provider } = formCrafterContext

console.log('before asd')

export const FormCrafterProvider: FC<PropsWithChildren<FormCrafterContext>> = ({ theme, PlaceholderComponent, children }) => {
    const [asd] = useState(true)
    console.log('asd: ', asd)
    const value = useMemo(() => ({ theme, PlaceholderComponent }), [theme, PlaceholderComponent])
    return <Provider value={value}>{children}</Provider>
}
