import { isNotEmpty, Maybe } from '@form-crafter/utils'

import { rootComponentId } from '_consts'
import { EntityId } from '_types'

export const isExistComponentId = (id: Maybe<EntityId>): boolean => isNotEmpty(id) && id !== rootComponentId
