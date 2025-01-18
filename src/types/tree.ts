import { ComponentId, ComponentSchema } from './general'

export type ComponentsTree = {
    id: ComponentId
    parentId?: ComponentId | null
    childTree?: ComponentsTree
}[]

export type TreeNode = ComponentsTree[0]

export type TreeNodeParentId = TreeNode['parentId']

export type TreeNodeWithChild = Omit<TreeNode, 'childTree'> & Pick<Required<TreeNode>, 'childTree'>

export type ComponentsPropertiesData = Record<ComponentId, Partial<ComponentSchema['properties']>>

export type ComponentsMetaData = Record<ComponentId, ComponentSchema['meta']>

export type ComponentsValidationData = Record<ComponentId, NonNullable<ComponentSchema['validation']>>

export type ComponentsRelationsData = Record<ComponentId, Required<ComponentSchema['relations']>>
