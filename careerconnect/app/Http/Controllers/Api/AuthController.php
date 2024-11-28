<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserSignUpRequest;
use App\Http\Requests\CompanySignUpRequest;

class AuthController extends Controller
{
    









    public function logout(Request $request){
            $user = $request->user();
            $user->currentAccessToken()->delete();
    }
}
