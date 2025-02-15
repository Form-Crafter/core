import { isNotEmpty } from '@form-crafter/utils'

import { ViewComponent, ViewComponentWithParent } from '_types'

export const isViewComponentWithParent = (component: ViewComponent): component is ViewComponentWithParent => {
    return isNotEmpty(component.parentId)
}
