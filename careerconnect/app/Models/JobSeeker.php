<?php

namespace App\Models;

use App\Models\StarredJob;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class JobSeeker extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'jobtype',
        'password'
    ];


    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function starred()
    {
        return $this->hasMany(StarredJob::class);
    }
}
