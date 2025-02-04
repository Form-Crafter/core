import { SomeObject } from '@form-crafter/utils'

import { ComponentId, ComponentType } from './general'
import { ValidationRuleSchema } from './validation-schema'
import { ViewNodeTemplate, ViewTreeId } from './views'

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

export type BaseComponentSchema<O extends SomeObject = SomeObject> = GeneralComponent & {
    meta: ComponentMeta<'base'>
    properties: O
}

export type ContainerComponentSchema<O extends SomeObject = SomeObject> = GeneralComponent & {
    meta: ComponentMeta<'container'>
    properties: O
}

export type DynamicContainerComponentSchema<O extends SomeObject = SomeObject> = GeneralComponent & {
    meta: ComponentMeta<'dynamic-container'>
    template: {
        viewsTrees: Record<ViewTreeId, ViewNodeTemplate>
        componentsSchemas: Record<ComponentId, TemplateComponentSchema<BaseComponentSchema | ContainerComponentSchema | DynamicContainerComponentSchema>>
    }
    properties: O
}

export type TemplateComponentSchema<Schema extends { meta: { id: ComponentId } }> = Omit<Schema, 'meta'> & {
    meta: Omit<Pick<Schema, 'meta'>, 'id'> & {
        templateId: ComponentId
    }
}

export type ComponentSchema = BaseComponentSchema | ContainerComponentSchema | DynamicContainerComponentSchema

export type ComponentsPropertiesData = Record<ComponentId, Partial<ComponentSchema['properties']>>

export type ComponentsMetaData = Record<ComponentId, ComponentSchema['meta']>

export type ComponentsValidationData = Record<ComponentId, NonNullable<ComponentSchema['validation']>>

export type ComponentsRelationsData = Record<ComponentId, Required<ComponentSchema['relations']>>

export type ComponentSchemaValue = Extract<ComponentSchema, { properties: { value: unknown } }>['properties']['value']
