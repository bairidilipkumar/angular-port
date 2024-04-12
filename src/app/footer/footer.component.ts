import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  yourEmail = 'dilipbairi@gmail.com'; // Replace with your actual email address

  openMail(): void {
    const mailtoUrl = `mailto:${this.yourEmail}`;

    // Handle potential mailto link blocking (consider user feedback)
    if (!window.open(mailtoUrl)) {
      console.warn('Mailto link may be blocked by your email client or browser settings.');
      alert('Opening email directly might be blocked. Please try manually copying and pasting the email address into your email client.');
    }
  }

}
