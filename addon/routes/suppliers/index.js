import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SuppliersIndexRoute extends Route {
    @service store;

    /**
     * Queryable parameters
     *
     * @var {Object}
     */
    queryParams = {
        page: { refreshModel: true },
        limit: { refreshModel: true },
        sort: { refreshModel: true },
        query: { refreshModel: true },
        country: { refreshModel: true },
        status: { refreshModel: true },
        name: { refreshModel: true },
        email: { refreshModel: true },
        address: { refreshModel: true },
        phone: { refreshModel: true },
        type: { refreshModel: true },
        createdAt: { refreshModel: true },
        updatedAt: { refreshModel: true },
        website_url: { refreshModel: true },
    };

    model(params) {
        return this.store.query('supplier', params);
    }
}
