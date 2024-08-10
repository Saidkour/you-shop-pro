<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class LoginRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Authenticate the user.
     *
     * @param  array  $options
     * @return void
     */
    public function authenticate(array $options = []): void
    {
        $this->ensureIsNotRateLimited();

        if (! Auth::guard($options['guard'] ?? 'web')->attempt($this->only('email', 'password'), $this->boolean('remember'))) {
            $this->throwFailedAuthenticationException();
        }
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @return void
     */
    protected function ensureIsNotRateLimited(): void
    {
        // Rate limiting logic (if needed)
    }

    /**
     * Throw failed authentication exception.
     *
     * @return void
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function throwFailedAuthenticationException(): void
    {
        throw \Illuminate\Validation\ValidationException::withMessages([
            'email' => [trans('auth.failed')],
        ]);
    }
}
