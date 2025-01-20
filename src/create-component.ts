import { ComponentType, GetComponent, OptionsBuilder } from '_types'

type CreateComponentParams<N extends string, T extends ComponentType, O extends OptionsBuilder<any>> = {
    name: N
    type: T
    optionsBuilder: O
    component: GetComponent<N, T, O>
}

export const createComponent = <N extends string, T extends ComponentType, O extends OptionsBuilder<any>>(params: CreateComponentParams<N, T, O>) => {
    return params
}
