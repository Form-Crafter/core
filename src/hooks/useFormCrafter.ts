import { isNull } from '@form-crafter/utils'
import { useContext } from 'react'

import { errors } from '_consts'
import { formCrafterContext } from '_contexts'

export const useFormCrafter = () => {
    const data = useContext(formCrafterContext)

    if (isNull(data)) {
        throw new Error(errors.formCrafterContextNotProvided)
    }

    return data
}
