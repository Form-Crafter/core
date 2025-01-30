import { createContext, FC, PropsWithChildren, useMemo } from 'react'

import { ComponentModule } from '_types'

type FormCrafterContext = {
    theme: ComponentModule<any>[]
    PlaceholderComponent: FC
}

export const formCrafterContext = createContext<FormCrafterContext | null>(null)

const { Provider } = formCrafterContext

export const FormCrafterProvider: FC<PropsWithChildren<FormCrafterContext>> = ({ theme, PlaceholderComponent, children }) => {
    const value = useMemo(() => ({ theme, PlaceholderComponent }), [theme, PlaceholderComponent])
    return <Provider value={value}>{children}</Provider>
}
