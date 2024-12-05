<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Requests\CompanyLogin;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CompanyRegister;
use Illuminate\Support\Facades\Storage;

class CompanyController extends Controller

{

    public function login(CompanyLogin $request){

        $credentials = $request->validated();

        if(!Auth::guard('company')->attempt($credentials)){
            return response([
                'message'=>'Provided email or password is incorrect'
            ]);
        }
        // return ($credentials);

        $company = Auth::guard('company')->user();
        $token = $company->createToken('main')->plainTextToken;

        return response()->json([
            'token'=> $token,
            'company'=> $company,
            'message'=>'Welcome back'
        ]);


    }



    public function signup(CompanyRegister $request)
    {
        $data = $request->validated();

        $company = Company::create([
           'name'=> $data['name'],
           'email'=> $data['email'],
           'password'=> bcrypt($data['password']),
           'jobtype'=>'',
           'logo'=>'',
           'phone'=>'',
           'location'=>'',
           'description'=>'',
       ]);


        return response()->json([
            'message'=>'Company Registered Successfully'
        ]);


    }


    public function updateCompany(Request $request,$id){
        $company = Company::find($id);

        if(!$company){
            return response()->json(['message'=>'Company not found'],404);
        }

        $validated = $request->validate([
            'name'=> 'required|string|max:200',
            'email'=> 'required|email|max:255',
            'location'=> 'nullable|max:100',
            'description'=> 'nullable|string',
            'phone'=> 'nullable|string|max:10|min:10',
            // 'logo'=> 'image|nullable|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if($request->has('logo') && $request->logo ==='none'){
            if($company->logo){
                Storage::delete($company->logo);
            }
            $company->logo = '';

        }elseif ($request->hasFile('logo')){
            $request->validate(['logo'=> 'image|mimes:jpeg,png,jpg,gif|max:2048']);

            if($company->logo){
                Storage::delete($company->logo);
            }

            $path = $request->file('logo')->store('logos', 'public');
            $company->logo = $path;

        }

        $company->name = $validated['name'];
        $company->email = $validated['email'];
        $company->location = $validated['location'] ?? '';
        $company->phone = $validated['phone'] ?? '';
        $company->description = $validated['description'] ?? '';

        $company->save();


        return response()->json(['message'=>'Company details updated successfully!','company' => $company], 200);
            // return $request;
    }


    public function deleteCompanyAccount(Request $request,$company_id){

        $company = Company::find($company_id);

        if($company){
            $company->delete();
            return response()->json(['message'=>'Company Account Deleted'], 200);
        }

        return response()->json(['message'=>'Company Account not found'],404);
    }

}
