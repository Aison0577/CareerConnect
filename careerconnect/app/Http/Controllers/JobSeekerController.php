<?php

namespace App\Http\Controllers;

use App\Models\JobSeeker;
use Illuminate\Http\Request;
use App\Http\Requests\SeekerLogin;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\SeekerRegister;

class JobSeekerController extends Controller
{
    public function login(SeekerLogin $request){

        $credentials = $request->validated();


        if(!Auth::guard('job_seeker')->attempt($credentials)){
            return response([
                'message'=>'Provided email or password is incorrect'
            ]);
        }


        // return $credentials;

        $seeker = Auth::guard('job_seeker')->user();
        $token = $seeker->createToken('main')->plainTextToken;

        return response()->json([
            'message'=>'Welcome back',
            'token'=> $token,
            'user'=> $seeker
        ],200);
    }


    public function signup(SeekerRegister $request){


        $data = $request->validated();


        $user = JobSeeker::create([
            'firstname'=> $data['firstname'],
            'lastname'=> $data['lastname'],
            'jobtype'=> $data['jobtype'],
            'email'=> $data['email'],
            'password'=> bcrypt($data['password']),
        ]);


        // $token = $user->createToken('main')->plainTextToken;

       return response()->json(['message'=>'Successfully registerd'],200);

    }

    public function updateSeeker(Request $request,$seeker_id){
        $validated = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|string',
            'jobtype' => 'required|String',
        ]);

        $user = JobSeeker::find($seeker_id);

        if(!$user){
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->update($validated);

        return response()->json(['message' => 'Job updated successfully','user'=>$user], 200);
    }

    public function deleteAccount(Request $request,$seeker_id){
        $user = JobSeeker::find($seeker_id);

        if(!$user){
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'Account deleted'], 200);
    }

}
