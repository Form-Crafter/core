import { SomeObject } from '@form-crafter/utils'
import { FC, ReactNode } from 'react'

import { ViewNode, ViewTree } from './views'

export type GridComponent = FC<{
    viewTree?: ViewTree
    children?: (viewNode: ViewNode, index: number) => ReactNode
}>

export type ResolverComponent = FC<ViewNode & SomeObject>
