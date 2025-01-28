import { createContext, FC, PropsWithChildren, useContext, useMemo } from 'react'

import { ComponentModule, Schema } from '_types'

type FormCrafterContext = {
    theme: ComponentModule[]
    schema: Schema
    PlaceholderComponent: FC
}

const formCrafterContext = createContext<FormCrafterContext | null>(null)

const { Provider } = formCrafterContext

export const FormCrafterProvider: FC<PropsWithChildren<FormCrafterContext>> = ({ theme, schema, PlaceholderComponent, children }) => {
    const value = useMemo(() => ({ theme, schema, PlaceholderComponent }), [theme, schema, PlaceholderComponent])
    return <Provider value={value}>{children}</Provider>
}

export const useFormCrafterContext = () => {
    const data = useContext(formCrafterContext)
    return data
}
