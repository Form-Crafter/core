import { Unwrap } from '@form-crafter/utils'
import { FC, ReactNode } from 'react'

import { ComponentMeta } from './componentSchema'
import { ComponentId } from './general'
import { ComponentType } from './general'
import { OptionsBuilder, OptionsBuilderOutput } from './optionsBuilder'
import { ComponentsTree, TreeNodeParentId } from './tree'

type BaseComponentProps<N extends string, T extends ComponentType, O extends OptionsBuilder<any>> = {
    meta: ComponentMeta<T, N>
    properties: OptionsBuilderOutput<O>
    parentId: TreeNodeParentId
    onChangeProperties: (changes: Partial<OptionsBuilderOutput<O>>) => void
}

export type ContainerComponentProps<N extends string, T extends ComponentType, O extends OptionsBuilder<any>> = BaseComponentProps<N, T, O> & {
    childTree: ComponentsTree
    renderTitle?: (props: OptionsBuilderOutput<O>) => ReactNode
}

export type DynamicContainerComponentProps<N extends string, T extends ComponentType, O extends OptionsBuilder<any>> = BaseComponentProps<N, T, O> & {
    childTree?: ComponentsTree
    onAddGroup: () => void
    onRemoveGroup: (props: { groupId: ComponentId }) => void
}

export type GetBaseComponent<N extends string, T extends ComponentType, O extends OptionsBuilder<any>> = FC<Unwrap<BaseComponentProps<N, T, O>>>

export type GetContainerComponent<N extends string, T extends ComponentType, O extends OptionsBuilder<any>> = FC<Unwrap<ContainerComponentProps<N, T, O>>>

export type GetDynamicContainerComponent<N extends string, T extends ComponentType, O extends OptionsBuilder<any>> = FC<
    Unwrap<DynamicContainerComponentProps<N, T, O>>
>

export type GetComponent<N extends string, T extends ComponentType, O extends OptionsBuilder<any>> = T extends 'base'
    ? GetBaseComponent<N, T, O>
    : T extends 'container'
      ? GetContainerComponent<N, T, O>
      : GetDynamicContainerComponent<N, T, O>
