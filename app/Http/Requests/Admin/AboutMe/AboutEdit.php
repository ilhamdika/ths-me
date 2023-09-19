<?php

namespace App\Http\Requests\Admin\AboutMe;

use App\Models\About;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class AboutEdit extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(About $about)
    {
        return [
            'name' => 'nullable|string' . $about->id,
            'profession' => 'nullable|string',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
            'email' => 'nullable|email',
            'instagram' => 'nullable|url',
            'linkedin' => 'nullable|url',
            'github' => 'nullable|url',
        ];
    }
}
