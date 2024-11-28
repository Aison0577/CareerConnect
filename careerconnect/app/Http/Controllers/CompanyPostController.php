<?php

namespace App\Http\Controllers;

use App\Models\CompanyPost;
use Illuminate\Http\Request;
use App\Http\Requests\CompanyRequest;


class CompanyPostController extends Controller
{
    public function create(CompanyRequest $request){

        $data = $request->validated();

        $newJob = CompanyPost::create($data);

        return response()->json([
            'message'=> 'Job post successfully created!',
            'post'=> $newJob,
            $newJob]);

    }


    public function getJobPostsByCompanyId(Request $request)
    {

        $companyId = $request->input('company_id');

        $company = CompanyPost::where('company_id', $companyId)->get();

        if ($company) {
            return response()->json([
                'jobs'=> $company
            ]);
        }

        return response()->json(['message' => 'Company not found'], 404);
    }


    public function deleteJobPostsByCompanyId(Request $request,$company_id){

        $jobs = CompanyPost::where('company_id', $company_id)->get();

        if($jobs){

            foreach($jobs as $job){
                $job->delete();
            }

            return response()->json(['message'=>'All Jobs Deleted Successfully'],200);
        }

        return response()->json(['message'=>'No Job Found'],404);
    }



    public function getJobPostsByJobType(Request $request)
    {

        $jobtype = $request->input('jobtype');

        // return $jobtype;
        $job_type = CompanyPost::where('jobcategory', $jobtype)
        ->with('Company')
        ->get();

        if ($job_type) {
            return response()->json([
                'jobs'=> $job_type
            ]);
        }

        return response()->json(['message' => 'Jobtype not found'], 404);
    }




    public function getJobs(Request $request)
    {

        $jobs = CompanyPost::with('Company')
        // ->with('StarredJob')
        ->get();

        if ($jobs) {
            return response()->json([
                'jobs'=> $jobs
            ]);
        }

        return response()->json(['message' => 'jobs not found'], 404);
    }




    public function deleteJob(Request $request){
        $validate = $request->validate([
            'job_id'=>'required|exists:company_posts,id'
        ]);

        $job = CompanyPost::find($validate['job_id']);
        $job->delete();


        return response()->json(['message'=>'Job deleted successfully']);
    }

    public function updateJob(Request $request,$job_id){

        $data = $request->validate([
            'jobtitle' => 'required|string|max:255',
            'jobcategory' => 'required|string|max:255',
            'jobdescription' => 'required|string',
            'deadline' => 'required|date',
            'requirements' => 'required|string',
            'jobdurationtype' => 'required|string',
            'status'=>'required'
        ]);

        // return $data;

        $job = CompanyPost::find($job_id);

        // if (!$job) {
        //     return response()->json(['message' => 'Job not found'], 404);
        // }

        $job->update($data);

        return response()->json(['message' => 'Job updated successfully'], 200);
    }


    public function getJobsDetails(Request $request,$job_id){

        $job = CompanyPost::where('id', $job_id)
        ->with('Company')
        ->first();

        if (!$job) {
            return response()->json(['message' => 'Job not found'], 404);
        }

        $job->increment('views');

        return response()->json(['job' => $job ], 200);
    }



}
