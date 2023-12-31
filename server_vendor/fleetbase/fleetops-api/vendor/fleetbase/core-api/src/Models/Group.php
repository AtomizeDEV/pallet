<?php

namespace Fleetbase\Models;

use Fleetbase\Traits\Filterable;
use Fleetbase\Traits\HasPolicies;
use Fleetbase\Traits\HasApiModelBehavior;
use Fleetbase\Traits\HasUuid;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Group extends Model
{
    use HasUuid, HasApiModelBehavior, HasPermissions, HasPolicies, HasRoles, HasSlug, Filterable;

    /**
     * The database connection to use.
     *
     * @var string
     */
    protected $connection = 'mysql';

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'groups';

    /**
     * The attributes that can be queried
     *
     * @var array
     */
    protected $searchableColumns = ['name'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['_key', 'company_uuid', 'name', 'description', 'slug'];

    /**
     * The relationships that will always be appended.
     *
     * @var array
     */
    protected $with = ['users', 'permissions', 'policies'];

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    /**
     * Waypoints between start and end.
     *
     * @return \Illuminate\Database\Eloquent\Concerns\HasRelationships
     */
    public function users()
    {
        return $this->hasManyThrough(User::class, GroupUser::class, 'group_uuid', 'uuid', 'uuid', 'user_uuid');
    }
}
