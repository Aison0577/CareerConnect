<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
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
            'company_id'=>'required',
            'jobtitle'=> 'required|max:225',
            'jobcategory'=> 'required|max:225',
            'jobdescription'=> 'required',
            'deadline'=> 'required',
            'requirements'=> 'required',
            'jobdurationtype'=> 'required',
            'views'=> 'required',
            'status'=> 'required',
        ];
    }
}
