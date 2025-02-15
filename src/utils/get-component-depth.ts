import { isEmpty } from '@form-crafter/utils'

import { EntityId, ViewDefinitionComponents } from '_types'

const deepLevelLeft = 2

export const getComponentDepth = (id: EntityId, componentsMap: ViewDefinitionComponents): number => {
    console.log('FUCK!!!!!!!!!!!!!!!!!!!!!!!!!!')

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

    return execute(id, 0) - deepLevelLeft
}
