<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function register(Request $request) {
        $formData = $request->validate([
            'name' => ['required', 'min:3', 'max:25', Rule::unique('users', 'name')],
            'password' => ['required', 'min:4', 'max:10', Rule::unique('users', 'email')],
            'email' => ['required', 'email'],
        ]);

        $request['password'] = bcrypt($request['password']);
        $user = User::create($formData);
        auth()->login($user);

        return redirect('/chat');
    }

    public function login(Request $request) {
        $formData = $request->validate([
            'login-name'=>'required',
            'login-password'=>'required'
        ]);

        if (auth()->attempt([
            'name' => $formData['login-name'],
            'password' => $formData['login-password']])
        ) {
            $req = $request->session()->regenerate();
        }

        return redirect('/chat');
    }

    public function logout(Request $request) {
        auth()->logout();

        return redirect('/chat');
    }
}
