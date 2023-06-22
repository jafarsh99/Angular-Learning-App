import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
  ) { }

  login(): void {
    // Lakukan validasi login sesuai kebutuhan Anda
    if (this.username === 'admin' && this.password === 'admin123') {
      // Simpan informasi login ke session storage atau local storage
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('username', this.username);
      this.router.navigate(['/dashboard']); // Ganti dengan rute halaman setelah login berhasil
    } else {
      alert('Username atau password salah!');
    }
  }
}
