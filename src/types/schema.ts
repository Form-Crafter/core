import { ComponentSchema } from './components-schema'
import { ComponentId, ResponsiveSizes } from './general'
import { ViewsSchemas } from './views'

export type SchemaLayout = {
    rowsSpanPx?: ResponsiveSizes<number>
    colsSpanPx?: ResponsiveSizes<number>
}

export type Schema = {
    id: string
    version: string
    layout?: SchemaLayout
    viewsSchemas: ViewsSchemas
    componentsSchemas: Record<ComponentId, ComponentSchema>
    validationRules: any[]
    relationsRules: any[]
}
