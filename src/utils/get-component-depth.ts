import { isEmpty } from '@form-crafter/utils'

import { EntityId, ViewDefinitionComponents } from '_types'

export const getComponentDepth = (id: EntityId, componentsMap: ViewDefinitionComponents): number => {
    const execute = (currentId: EntityId, depth: number): number => {
        const { parentId } = componentsMap[currentId]
        if (isEmpty(parentId)) {
            return depth
        }
        return execute(parentId, depth + 1)
    }

    return execute(id, 0)
}
