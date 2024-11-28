<?php

namespace App\Policies;

use App\Models\CompanyPost;
use App\Models\JobSeeker;
use Illuminate\Auth\Access\HandlesAuthorization;

class CompanyPostPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\JobSeeker  $jobSeeker
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(JobSeeker $jobSeeker)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\JobSeeker  $jobSeeker
     * @param  \App\Models\CompanyPost  $companyPost
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(JobSeeker $jobSeeker, CompanyPost $companyPost)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\JobSeeker  $jobSeeker
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(JobSeeker $jobSeeker)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\JobSeeker  $jobSeeker
     * @param  \App\Models\CompanyPost  $companyPost
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(JobSeeker $jobSeeker, CompanyPost $companyPost)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\JobSeeker  $jobSeeker
     * @param  \App\Models\CompanyPost  $companyPost
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(JobSeeker $jobSeeker, CompanyPost $companyPost)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\JobSeeker  $jobSeeker
     * @param  \App\Models\CompanyPost  $companyPost
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(JobSeeker $jobSeeker, CompanyPost $companyPost)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\JobSeeker  $jobSeeker
     * @param  \App\Models\CompanyPost  $companyPost
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(JobSeeker $jobSeeker, CompanyPost $companyPost)
    {
        //
    }
}
