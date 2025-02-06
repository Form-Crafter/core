import { SomeObject, Unwrap } from '@form-crafter/utils'
import { FC, ReactNode } from 'react'

import { ComponentMeta } from './components-schema'
import { ComponentType } from './general'
import { GridComponent, ResolverComponent } from './generator'
import { OptionsBuilder, OptionsBuilderOutput } from './options-builder'
import { ViewTree } from './views'

export type GenaralComponentProps<T extends ComponentType, O extends SomeObject> = {
    meta: ComponentMeta<T>
    properties: O
    onChangeProperties: (changes: Partial<O>) => void
}

export type BaseComponentProps<O extends SomeObject> = GenaralComponentProps<'base', O>

export type ContainerComponentProps<O extends SomeObject> = GenaralComponentProps<'container', O> & {
    GridComponent: GridComponent
    ResolverComponent: ResolverComponent
    children?: ViewTree
    renderTitle?: (props: O) => ReactNode
}

export type DynamicContainerComponentProps<O extends SomeObject> = GenaralComponentProps<'dynamic-container', O> & {
    GridComponent: GridComponent
    ResolverComponent: ResolverComponent
    children?: ViewTree
    onAddChild: () => void
    onRemoveChild: (props: { index: number }) => void
}

export type BaseComponent<O extends OptionsBuilder<any>> = FC<Unwrap<GenaralComponentProps<'base', OptionsBuilderOutput<O>>>>

export type ContainerComponent<O extends OptionsBuilder<any>> = FC<Unwrap<ContainerComponentProps<OptionsBuilderOutput<O>>>>

export type DynamicContainerComponent<O extends OptionsBuilder<any>> = FC<Unwrap<DynamicContainerComponentProps<OptionsBuilderOutput<O>>>>

export type FormCrafterComponentProps<T extends ComponentType, O extends OptionsBuilder<any>> = T extends 'base'
    ? Unwrap<BaseComponentProps<OptionsBuilderOutput<O>>>
    : T extends 'container'
      ? Unwrap<ContainerComponentProps<OptionsBuilderOutput<O>>>
      : Unwrap<DynamicContainerComponentProps<OptionsBuilderOutput<O>>>

export type FormCrafterComponent<T extends ComponentType, O extends OptionsBuilder<any>> = T extends 'base'
    ? FC<FormCrafterComponentProps<'base', O>>
    : T extends 'container'
      ? FC<FormCrafterComponentProps<'container', O>>
      : FC<FormCrafterComponentProps<'dynamic-container', O>>
