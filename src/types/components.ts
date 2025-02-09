import { Nullable, OptionalSerializableObject, OptionalSerializableValue, Unwrap } from '@form-crafter/utils'
import { FC, ReactNode } from 'react'

import { ComponentMeta } from './components-schema'
import { ComponentType } from './general'
import { ViewNodeChild } from './views'

export type GridComponentProps = {
    childNodes: ViewNodeChild[]
    renderChild?: (childNode: ViewNodeChild, index: number) => ReactNode
}

export type GridComponent = FC<GridComponentProps>

export type GenaralComponentProps<T extends ComponentType, P extends OptionalSerializableObject> = {
    meta: ComponentMeta<T>
    properties: P
    onChangeProperties: (changes: Partial<P>) => void
}

export type BaseComponentProperties = OptionalSerializableObject & { value: OptionalSerializableValue }

export type ContainerComponentProperties = OptionalSerializableObject & { title?: Nullable<string> }

export type ComponentProperties<T extends ComponentType> = T extends 'base'
    ? BaseComponentProperties
    : T extends 'container'
      ? ContainerComponentProperties
      : OptionalSerializableObject

export type BaseComponentProps<P extends BaseComponentProperties = BaseComponentProperties> = GenaralComponentProps<'base', P>

export type ContainerComponentProps<P extends ContainerComponentProperties = ContainerComponentProperties> = GenaralComponentProps<'container', P> & {
    GridComponent: GridComponent
    renderTitle?: (params: Pick<GenaralComponentProps<'container', P>, 'meta' | 'properties'>) => ReactNode
    childNodes?: ViewNodeChild[]
}

export type DynamicContainerComponentProps<P extends OptionalSerializableObject = OptionalSerializableObject> = GenaralComponentProps<
    'dynamic-container',
    P
> & {
    GridComponent: GridComponent
    ResolverContainer: ResolverContainer
    childNodes?: ViewNodeChild[]
    onAddChild: () => void
    onRemoveChild: (props: { index: number }) => void
}

export type FormCrafterComponentProps<T extends ComponentType, S extends ComponentProperties<T>> = T extends 'base'
    ? S extends ComponentProperties<T>
        ? Unwrap<BaseComponentProps<S>>
        : never
    : T extends 'container'
      ? S extends ComponentProperties<T>
          ? Unwrap<ContainerComponentProps<S>>
          : never
      : S extends ComponentProperties<T>
        ? Unwrap<DynamicContainerComponentProps<S>>
        : never

export type BaseComponent<T extends ComponentProperties<'base'>> = FC<Unwrap<BaseComponentProps<T>>>

export type ContainerComponent<T extends ComponentProperties<'container'>> = FC<Unwrap<ContainerComponentProps<T>>>

export type DynamicContainerComponent<T extends ComponentProperties<'dynamic-container'>> = FC<Unwrap<DynamicContainerComponentProps<T>>>

export type FormCrafterComponent<T extends ComponentType, S extends ComponentProperties<T>> = T extends 'base'
    ? S extends ComponentProperties<'base'>
        ? BaseComponent<S>
        : never
    : T extends 'container'
      ? S extends ComponentProperties<'container'>
          ? ContainerComponent<S>
          : never
      : S extends ComponentProperties<'dynamic-container'>
        ? DynamicContainerComponent<S>
        : never

export type ResolverBase = FC<ViewNodeChild>

export type ResolverContainer = FC<ViewNodeChild & Pick<ContainerComponentProps, 'renderTitle'>>

export type ResolverDynamicContainer = FC<ViewNodeChild>
