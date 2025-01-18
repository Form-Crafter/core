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

export type MaskOptions = FactoryOpts & {
    returnMaskedValue?: boolean
}

export type SelectionOption = {
    label: string
    value: string
}

export type ComponentSchema = any

export type ComponentId = string

export type ComponentSchemaValue = Extract<ComponentSchema, { properties: { value: unknown } }>['properties']['value']

// export type ComponentName =
//     | 'input'
//     | 'mask-input'
//     | 'date'
//     | 'time'
//     | 'email'
//     | 'textarea'
//     | 'select'
//     | 'checkbox'
//     | 'radio'
//     | 'text'
//     | 'button'
//     | 'group'
//     | 'multifield'
//     | 'table'

export type ComponentType = 'base' | 'container' | 'dynamic-container'
