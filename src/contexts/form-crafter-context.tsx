import { createContext, FC, PropsWithChildren, useContext, useMemo } from 'react'

import { ComponentModule } from '_types'

type FormCrafterContext = {
    theme: ComponentModule[]
    PlaceholderComponent: FC
}

const formCrafterContext = createContext<FormCrafterContext | null>(null)

const { Provider } = formCrafterContext

export const FormCrafterProvider: FC<PropsWithChildren<FormCrafterContext>> = ({ theme, PlaceholderComponent, children }) => {
    const value = useMemo(() => ({ theme, PlaceholderComponent }), [theme, PlaceholderComponent])
    return <Provider value={value}>{children}</Provider>
}

export const useFormCrafterContext = () => {
    const data = useContext(formCrafterContext)
    return data
}
