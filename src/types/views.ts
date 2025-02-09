import { ColSpan, ComponentId, ResponsiveSizes } from './general'

export type ViewId = string

export type ViewNodeLayout = {
    col: ResponsiveSizes<ColSpan>
}

export type ViewNodeChild = { id: ComponentId }

export type ViewNode = {
    id: ComponentId
    parentId: ComponentId | null
    layout?: ViewNodeLayout
    children?: ViewNodeChild[]
}

export type ViewTree = Record<ComponentId, ViewNode>

export type ViewNodeTemplateChild = { templateId: ComponentId }

export type ViewNodeTemplate = Omit<ViewNode, 'id' | 'parentId' | 'children'> & {
    templateId: ViewNode['id']
    templateParentId: ViewNode['parentId']
    children?: ViewNodeTemplateChild[]
}

export type ViewTreeTemplate = Record<ComponentId, ViewNodeTemplate>

export type ViewNodeWithChildren = Omit<ViewNode, 'children'> & {
    children: Required<ViewNode>['children']
}

export type Views = {
    initialViewId: ViewId
    trees: Record<ViewId, ViewTree>
}
