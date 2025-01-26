import { SomeObject } from '@form-crafter/utils'
import { FC, ReactNode } from 'react'

import { ViewComponentSchema, ViewSchema } from './views'

export type GridComponent = FC<{
    view?: ViewSchema
    children?: (node: ViewComponentSchema, index: number) => ReactNode
}>

export type ResolverComponent = FC<ViewComponentSchema & SomeObject>
