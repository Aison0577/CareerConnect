<?php

namespace App\Models;

use App\Models\JobSeeker;
use App\Models\CompanyPost;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StarredJob extends Model
{
    use HasFactory;


    protected $fillable = [
        'company_id',
        'seeker_id',
        'job_id'
    ];

    public function seeker()
    {
        return $this->belongsTo(JobSeeker::class);
    }

    public function job()
    {
        return $this->belongsTo(CompanyPost::class);
    }
}
