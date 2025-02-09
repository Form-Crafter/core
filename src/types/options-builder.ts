import { SerializableObject } from '@form-crafter/utils'

export interface OptionsBuilder<Output extends SerializableObject = SerializableObject> {
    __outputType: Output
}

export type OptionsBuilderOutput<T extends OptionsBuilder> = T['__outputType']
