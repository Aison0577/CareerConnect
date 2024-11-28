<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class SeekerRegister extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'firstname'=> 'required|string|max:50',
            'lastname'=> 'required|string|max:70',
            'jobtype'=> 'required|string|max:200',
            'email'=> 'required|email|unique:job_seekers,email',
            'password'=> [
                    'required',
                    'confirmed',
                    Password::min(8)
                    ->letters()
                    ->symbols()
            ],
        ];
    }
}
