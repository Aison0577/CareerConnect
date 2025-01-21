<?php

namespace App\Http\Controllers;

use App\Models\StarredJob;
use Illuminate\Http\Request;
use App\Http\Requests\StarredRequest;

class StarredJobController extends Controller
{
    public function create(StarredRequest $request)
{
    $data = $request->validated();

        $existingStarredJob = StarredJob::where('seeker_id', $data['seeker_id'])
            ->where('job_id', $data['job_id'])
            ->first();

        if ($existingStarredJob) {
            $existingStarredJob->delete();
            return response()->json(['message' => 'Starred job removed successfully'], 200);
        } else {
            StarredJob::create([
                'seeker_id' => $data['seeker_id'],
                'job_id' => $data['job_id'],
            ]);

            return response()->json(['message' => 'Starred job added successfully'], 201);
        }
}

    public function get($s_id){

        $bookmarks = StarredJob::where('seeker_id',$s_id)
        // ->with('seeker')
        ->with('job.company')
        ->get();

        if(!$bookmarks){
            return response()->json(['message'=>'No starred message'], 404);
        }

        return response()->json(['starred'=> $bookmarks], 200);

    }

}
