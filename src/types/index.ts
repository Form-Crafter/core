import { FactoryOpts } from 'imask'

import { maxColSpan } from '_consts/layout'

export type OptionalKeys<T extends object> = keyof {
    [K in keyof T as undefined extends T[K] ? K : never]: T[K]
}

export type RequiredKeys<T extends object> = keyof Omit<T, OptionalKeys<T>>

export type PartialIfUndefined<T extends object> = {
    [K in keyof T as K extends OptionalKeys<T> ? K : never]?: T[K]
} & {
    [K in keyof T as K extends RequiredKeys<T> ? K : never]: T[K]
}

export type GetComponentPropertiesSchema<T extends Record<string, { __outputType: any }>> = PartialIfUndefined<{
    [K in keyof T]: T[K]['__outputType']
}>

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
