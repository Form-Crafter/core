import { Unwrap } from '@form-crafter/utils'
import { FC, ReactNode } from 'react'

import { ComponentMeta } from './component-schema'
import { ComponentId } from './general'
import { ComponentType } from './general'
import { OptionsBuilder, OptionsBuilderOutput } from './options-builder'
import { ComponentsTree, TreeNodeParentId } from './tree'

type BaseComponentProps<T extends ComponentType, O extends OptionsBuilder<any>> = {
    meta: ComponentMeta<T>
    properties: OptionsBuilderOutput<O>
    parentId: TreeNodeParentId
    onChangeProperties: (changes: Partial<OptionsBuilderOutput<O>>) => void
}

export type ContainerComponentProps<T extends ComponentType, O extends OptionsBuilder<any>> = BaseComponentProps<T, O> & {
    childTree: ComponentsTree
    renderTitle?: (props: OptionsBuilderOutput<O>) => ReactNode
}

export type DynamicContainerComponentProps<T extends ComponentType, O extends OptionsBuilder<any>> = BaseComponentProps<T, O> & {
    childTree?: ComponentsTree
    onAddGroup: () => void
    onRemoveGroup: (props: { groupId: ComponentId }) => void
}

export type GetBaseComponent<T extends ComponentType, O extends OptionsBuilder<any>> = FC<Unwrap<BaseComponentProps<T, O>>>

export type GetContainerComponent<T extends ComponentType, O extends OptionsBuilder<any>> = FC<Unwrap<ContainerComponentProps<T, O>>>

export type GetDynamicContainerComponent<T extends ComponentType, O extends OptionsBuilder<any>> = FC<Unwrap<DynamicContainerComponentProps<T, O>>>

export type FormCrafterComponent<T extends ComponentType, O extends OptionsBuilder<any>> = T extends 'base'
    ? GetBaseComponent<T, O>
    : T extends 'container'
      ? GetContainerComponent<T, O>
      : GetDynamicContainerComponent<T, O>
