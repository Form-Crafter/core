import { SerializableValue } from '@form-crafter/utils'

export interface OptionsBuilder<Output extends SerializableValue = SerializableValue> {
    __outputType: Output
}

export type OptionsBuilderOutput<T extends OptionsBuilder> = T['__outputType']
