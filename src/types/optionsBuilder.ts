export interface OptionsBuilder<Output> {
    __outputType: Output
}

export type OptionsBuilderOutput<T extends OptionsBuilder<any>> = T['__outputType']
