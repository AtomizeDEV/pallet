import PlaceModel from '@atomizedev/fleetops-data/models/place';
import { hasMany } from '@ember-data/model';

export default class WarehouseModel extends PlaceModel {
    @hasMany('warehouse-section') sections;
}
