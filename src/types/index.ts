type OptionalKeys<T extends Object> = keyof {
    [K in keyof T as undefined extends T[K] ? K : never]: T[K]
};

type RequiredKeys<T extends Object> = keyof Omit<T, OptionalKeys<T>>;

type PartialIfUndefined<T extends Object> =
    {
        [K in keyof T as K extends OptionalKeys<T> ? K : never]?: T[K]
    } &
    {
        [K in keyof T as K extends RequiredKeys<T> ? K : never]: T[K]
    };

export type GetComponentPropertiesSchema<T extends Record<string, {__outputType: any}>> = PartialIfUndefined<{
    [K in keyof T]: T[K]['__outputType']
}>;

export type SelectionOption = {
    label: string;
    value: string;
};
