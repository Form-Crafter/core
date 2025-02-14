import { EntityId } from './general'

export type RowSchema = {
    id: EntityId
    templateId?: EntityId
}

export type RowsSchemas = Record<EntityId, RowSchema>
