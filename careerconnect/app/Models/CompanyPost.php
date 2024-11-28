<?php

namespace App\Models;

use App\Models\Company;
use App\Models\StarredJob;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompanyPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'jobtitle',
        'jobcategory',
        'jobdescription',
        'deadline',
        'requirements',
        'jobdurationtype',
        'views',
        'status',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function starred()
    {
        return $this->hasMany(StarredJob::class);
    }

}
