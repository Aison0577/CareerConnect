<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\JobSeekerController;
use App\Http\Controllers\StarredJobController;
use App\Http\Controllers\CompanyPostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/companyregister',[
    CompanyController::class,'signup'
]);

Route::post('/companylogin',[
    CompanyController::class,'login'
]);


Route::delete('/companyaccount/delete/{company_id}',[
    CompanyController::class,'deleteCompanyAccount'
]);

Route::post('/signup',[
    JobSeekerController::class,'signup'
]);


Route::post('/login',[
    JobSeekerController::class,'login'
]);


Route::post('/createjobs',[
    CompanyPostController::class,'create'
]);


Route::post('/companyjobs',[
    CompanyPostController::class,'getJobPostsByCompanyId'
]);

Route::post('/foryoujobs',[
    CompanyPostController::class,'getJobPostsByJobType'
]);


Route::delete('/deletejob',[
    CompanyPostController::class,'deleteJob'
]);


Route::put('/updatejob/{job_id}',[
    CompanyPostController::class,'updateJob'
]);


Route::put('/updateseeker/{seeker_id}',[
    JobSeekerController::class,'updateSeeker'
]);

Route::delete('/deleteaccount/{seeker_id}',[
    JobSeekerController::class,'deleteAccount'
]);


Route::get('/getalljobs',[
    CompanyPostController::class,'getJobs'
]);

Route::get('/job/{job_id}',[
    CompanyPostController::class,'getJobsDetails'
]);


Route::post('/companies/{id}/update',[
    CompanyController::class,'updateCompany'
]);


Route::delete('/companyjob/{company_id}/delete',[
    CompanyPostController::class,'deleteJobPostsByCompanyId'
]);


Route::post('/starjob',[
    StarredJobController::class,'create'
]);









// Route::post('/logout',[AuthController::class,'logout']);
