import { ComponentId, ComponentType } from './general'
import { OptionsBuilder, OptionsBuilderOutput } from './options-builder'
import { ValidationRuleSchema } from './validation-schema'
import { ViewSchemaId, ViewTemplateComponentSchema } from './views'

export type GeneralComponent = {
    validation?: ValidationRuleSchema[]
    relations?: any[]
}

export type ComponentMeta<T extends ComponentType> = {
    id: ComponentId
    type: T
    name: string
    formKey?: string
}

export type BaseComponentSchema<O extends OptionsBuilder<any>> = GeneralComponent & {
    meta: ComponentMeta<'base'>
    properties: OptionsBuilderOutput<O>
}

export type ContainerComponentSchema<O extends OptionsBuilder<any>> = GeneralComponent & {
    meta: ComponentMeta<'container'>
    properties: OptionsBuilderOutput<O>
}

export type DynamicContainerComponentSchema<O extends OptionsBuilder<any>> = GeneralComponent & {
    meta: ComponentMeta<'dynamic-container'>
    templateViews: Record<ViewSchemaId, ViewTemplateComponentSchema>
    templateComponents: Record<ComponentId, TemplateComponentSchema<ComponentSchema>>
    properties: OptionsBuilderOutput<O>
}

export type TemplateComponentSchema<Schema extends { meta: { id: ComponentId } }> = Omit<Schema, 'meta'> & {
    meta: Omit<Pick<Schema, 'meta'>, 'id'> & {
        templateId: ComponentId
    }
}

export type ComponentSchema = any

export type ComponentsPropertiesData = Record<ComponentId, Partial<ComponentSchema['properties']>>

export type ComponentsMetaData = Record<ComponentId, ComponentSchema['meta']>

export type ComponentsValidationData = Record<ComponentId, NonNullable<ComponentSchema['validation']>>

export type ComponentsRelationsData = Record<ComponentId, Required<ComponentSchema['relations']>>
