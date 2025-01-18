import { IsRequiredRuleSchema } from '_validation-rules'

import { ComponentId, ComponentSchemaValue } from './general'
import { ComponentsPropertiesData, ComponentsTree } from './tree'

// TODO
// 1. можно ли реализовать всю ту валидацию из файла velidation-target?
// 2. async validation
// 3. Валидация должна быть максимально возможной на счёт передачи всех args и функций как у другой формы (setErrors и др)
// Долны уметь повторить всё что угодно через это: найти поле/поля, посмотреть на поля и setErrors если нужно.
// И как-то потом понимать, что есть оишбки на полях и не invalid=true
// 4. Не понятно как валидировать поля внутри группы multifield, и снаружи в multifield поле. Как-то по index? У них нет id в builder, как там быть?

declare global {
    type ValidationRuleSchemaAdditional = never
}

export type ValidationRuleSchema = IsRequiredRuleSchema | ValidationRuleSchemaAdditional

export type ValidationRule<T extends { ruleName: string; options: object } = any, V = ComponentSchemaValue> =
    | {
          ruleName: T['ruleName']
          kind: 'component'
          ruleDisplayName: string
          validate: (
              value: V,
              params: {
                  componentId: ComponentId
                  options: T['options']
                  fieldsProperties: ComponentsPropertiesData
                  fieldsTree: ComponentsTree
              },
          ) => string | null
      }
    | {
          ruleName: string
          kind: 'form'
          ruleDisplayName: string
          validate: (params: { options: T; fieldsProperties: ComponentsPropertiesData; fieldsTree: ComponentsTree }) => string | null
      }
