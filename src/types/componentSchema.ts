import { ComponentId, ComponentSchema, ComponentType } from './general'
import { OptionsBuilder, OptionsBuilderOutput } from './optionsBuilder'
import { ValidationRuleSchema } from './validationSchema'
import { ViewSchemaId, ViewTemplateComponentSchema } from './views'

export type GeneralComponent = {
    validation?: ValidationRuleSchema[]
    relations?: any[]
}

export type ComponentMeta<T extends ComponentType, N extends string> = {
    id: ComponentId
    name: N
    type: T
    formKey?: string
}

export type BaseComponentSchema<N extends string, O extends OptionsBuilder<any>> = GeneralComponent & {
    meta: ComponentMeta<'base', N>
    properties: OptionsBuilderOutput<O>
}

export type ContainerComponentSchema<N extends string, O extends OptionsBuilder<any>> = GeneralComponent & {
    meta: ComponentMeta<'container', N>
    properties: OptionsBuilderOutput<O>
}

export type DynamicContainerComponentSchema<N extends string, O extends OptionsBuilder<any>> = GeneralComponent & {
    meta: ComponentMeta<'dynamic-container', N>
    templateViews: Record<ViewSchemaId, ViewTemplateComponentSchema>
    templateComponents: Record<ComponentId, TemplateComponentSchema<ComponentSchema>>
    properties: OptionsBuilderOutput<O>
}

export type TemplateComponentSchema<Schema extends { meta: { id: ComponentId } }> = Omit<Schema, 'meta'> & {
    meta: Omit<Pick<Schema, 'meta'>, 'id'> & {
        templateId: ComponentId
    }
}
