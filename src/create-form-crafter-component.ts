import { ComponentType, FormCrafterComponent, OptionsBuilder } from '_types'

type Params<T extends ComponentType, O extends OptionsBuilder<any>> = {
    name: string
    label: string
    type: T
    optionsBuilder: O
    Component: FormCrafterComponent<T, O>
}

export const createFormCrafterComponent = <T extends ComponentType, O extends OptionsBuilder<any>>(params: Params<T, O>) => {
    return params
}
