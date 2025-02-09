import { SerializableObject } from '@form-crafter/utils'

import { ComponentId, ComponentType } from './general'
import { ValidationRuleSchema } from './validation-schema'
import { ViewId, ViewTreeTemplate } from './views'

export type GeneralComponent = {
    validation?: ValidationRuleSchema[]
    relations?: any[]
}

export type ComponentMeta<T extends ComponentType> = {
    id: ComponentId
    templateId?: ComponentId
    type: T
    name: string
    formKey?: string
}

export type BaseComponentSchema<T extends SerializableObject = SerializableObject> = GeneralComponent & {
    meta: ComponentMeta<'base'>
    properties: T
}

export type ContainerComponentSchema<T extends SerializableObject = SerializableObject> = GeneralComponent & {
    meta: ComponentMeta<'container'>
    properties: T
}

export type DynamicContainerComponentSchema<T extends SerializableObject = SerializableObject> = GeneralComponent & {
    meta: ComponentMeta<'dynamic-container'>
    template: {
        views: Record<ViewId, ViewTreeTemplate>
        componentsSchemas: Record<
            ComponentId,
            | TemplateComponentSchema<BaseComponentSchema>
            | TemplateComponentSchema<ContainerComponentSchema>
            | TemplateComponentSchema<DynamicContainerComponentSchema>
        >
    }
    properties: T
}

export type ComponentSchema = BaseComponentSchema | ContainerComponentSchema | DynamicContainerComponentSchema

export type TemplateComponentSchema<Schema extends ComponentSchema> = Omit<Schema, 'meta'> & {
    meta: Omit<Schema['meta'], 'id' | 'templateId'> & {
        templateId: ComponentId
    }
}

export type ComponentsPropertiesData = Record<ComponentId, Partial<ComponentSchema['properties']>>

export type ComponentsMetaData = Record<ComponentId, ComponentSchema['meta']>

export type ComponentsValidationData = Record<ComponentId, NonNullable<ComponentSchema['validation']>>

export type ComponentsRelationsData = Record<ComponentId, Required<ComponentSchema['relations']>>

export type ComponentSchemaValue = Extract<ComponentSchema, { properties: { value: unknown } }>['properties']['value']
