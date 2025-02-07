import { ComponentId } from './general'
import { ColSpan, ResponsiveSizes } from './general'

export type ViewId = string

export type ViewNodeLayout = {
    col: ResponsiveSizes<ColSpan>
}

export type ViewNodeChild = { id: ComponentId }

export type ViewNode = {
    id: ComponentId
    parentId?: ComponentId
    layout?: ViewNodeLayout
    children?: ViewNodeChild[]
}

export type ViewTree = Record<ComponentId, ViewNode>

export type ViewNodeTemplate = Omit<ViewNode, 'id' | 'children'> & {
    templateId: ComponentId
    children?: ViewNodeChild[]
}

export type ViewTreeTemplate = Record<ComponentId, ViewNodeTemplate>

export type ViewNodeWithChildren = Omit<ViewNode, 'children'> & {
    children: Required<ViewNode>['children']
}

export type Views = {
    initialViewId: ViewId
    trees: Record<ViewId, ViewTree>
}
