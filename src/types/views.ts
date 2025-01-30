import { ComponentId } from './general'
import { ColSpan, ResponsiveSizes } from './general'

export type ViewTreeId = string

export type ViewNode = {
    componentId: ComponentId
    layout: {
        col: ResponsiveSizes<ColSpan>
    }
    children?: ViewTree
}

export type ViewNodeWithChildren = Omit<ViewNode, 'children'> & {
    children: Required<ViewNode>['children']
}

export type ViewTree = ViewNode[]

export type ViewNodeTemplate = Omit<ViewNode, 'componentId' | 'children'> & {
    templateComponentId: ComponentId
    children?: ViewNodeTemplate[]
}

export type ViewsTrees = {
    initialViewId: ViewTreeId
    trees: Record<ViewTreeId, ViewTree>
}
