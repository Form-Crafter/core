import { ComponentId } from './general'
import { ColSpan, ResponsiveSizes } from './general'

export type ViewSchemaId = string

export type ViewComponentSchema = {
    componentId: ComponentId
    layout: {
        col: ResponsiveSizes<ColSpan>
    }
    children?: ViewSchema
}

export type ViewSchema = ViewComponentSchema[]

export type ViewTemplateComponentSchema = Omit<ViewComponentSchema, 'componentId' | 'children'> & {
    templateComponentId: ComponentId
    children?: ViewTemplateComponentSchema[]
}

export type ViewsSchemas = {
    initialViewId: ViewSchemaId
    schemas: Record<ViewSchemaId, ViewSchema>
}
