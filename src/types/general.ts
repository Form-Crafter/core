import { FactoryOpts } from 'imask'

import { maxColSpan } from '_consts'

export type ResponsiveSizes<T> = {
    default: T
    xxl?: T
    xl?: T
    lg?: T
    md?: T
    sm?: T
}

export type ColSpan = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | typeof maxColSpan

export type MaskOptions = FactoryOpts

export type SelectionOption = {
    label: string
    value: string
}

export type ComponentId = string

export type ComponentType = 'base' | 'container' | 'dynamic-container'
