import { FormCrafterComponent } from './components-props'
import { ComponentType } from './general'
import { OptionsBuilder } from './options-builder'

export type ComponentModule<T extends ComponentType = ComponentType, O extends OptionsBuilder<any> = OptionsBuilder<any>> = {
    name: string
    label: string
    type: T
    optionsBuilder: O
    Component: FormCrafterComponent<T, O>
}
