import ApplicationSerializer from '@atomizedev/ember-core/serializers/application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class WarehouseSerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {
    /**
     * Embedded relationship attributes
     *
     * @var {Object}
     */
    get attrs() {
        return {
            sections: { embedded: 'always' },
            aisles: { embedded: 'always' },
            racks: { embedded: 'always' },
            bins: { embedded: 'always' },
        };
    }
}
