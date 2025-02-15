import { isEmpty } from '@form-crafter/utils'

import { EntityId, ViewDefinitionComponents } from '_types'

export const getComponentDepth = (id: EntityId, componentsMap: ViewDefinitionComponents): number => {
    console.log('id: ', id)
    console.log('componentsMap: ', componentsMap)

    const execute = (currentId: EntityId, depth: number): number => {
        console.log('currentId: ', currentId)
        console.log('depth: ', depth)

        const { parentId } = componentsMap[currentId]
        console.log('parentId: ', parentId)
        console.log('-: '.repeat(100))

        if (isEmpty(parentId)) {
            return depth
        }
        return execute(parentId, depth + 1)
    }

    return execute(id, 0)
}
