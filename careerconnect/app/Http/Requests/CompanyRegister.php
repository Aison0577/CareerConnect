<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class CompanyRegister extends FormRequest
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
            'name'=> 'required|string|max:200|unique:companies,name',
            'email'=> 'required|email|unique:companies,email',
            'location'=> 'string|max:100',
            'description'=> 'string',
            'logo'=> 'image|nullable|mines:jpeg,png,jpg,gif|max:2048',
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
