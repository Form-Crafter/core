import { Unwrap } from '@form-crafter/utils'
import { FC, ReactNode } from 'react'

import { ComponentMeta } from './component-schema'
import { ComponentId } from './general'
import { ComponentType } from './general'
import { OptionsBuilder, OptionsBuilderOutput } from './options-builder'
import { ViewComponentSchema, ViewSchema } from './views'

export type GridComponentProps = {
    view?: ViewSchema
    children?: (node: ViewComponentSchema, index: number) => ReactNode
}

export type BaseComponentProps<T extends ComponentType, O extends OptionsBuilder<any>> = {
    meta: ComponentMeta<T>
    properties: OptionsBuilderOutput<O>
    onChangeProperties: (changes: Partial<OptionsBuilderOutput<O>>) => void
}

export type ContainerComponentProps<T extends ComponentType, O extends OptionsBuilder<any>> = BaseComponentProps<T, O> & {
    GridComponent: FC<GridComponentProps>
    childView?: ViewSchema
    renderTitle?: (props: OptionsBuilderOutput<O>) => ReactNode
}

export type DynamicContainerComponentProps<T extends ComponentType, O extends OptionsBuilder<any>> = BaseComponentProps<T, O> & {
    GridComponent: FC<GridComponentProps>
    childView?: ViewSchema
    onAddGroup: () => void
    onRemoveGroup: (props: { groupId: ComponentId }) => void
}

export type BaseComponent<T extends ComponentType, O extends OptionsBuilder<any>> = FC<Unwrap<BaseComponentProps<T, O>>>

export type ContainerComponent<T extends ComponentType, O extends OptionsBuilder<any>> = FC<Unwrap<ContainerComponentProps<T, O>>>

export type DynamicContainerComponent<T extends ComponentType, O extends OptionsBuilder<any>> = FC<Unwrap<DynamicContainerComponentProps<T, O>>>

export type FormCrafterComponentProps<T extends ComponentType, O extends OptionsBuilder<any>> = T extends 'base'
    ? Unwrap<BaseComponentProps<T, O>>
    : T extends 'container'
      ? Unwrap<ContainerComponentProps<T, O>>
      : Unwrap<DynamicContainerComponentProps<T, O>>

export type FormCrafterComponent<T extends ComponentType, O extends OptionsBuilder<any>> = FC<FormCrafterComponentProps<T, O>>
