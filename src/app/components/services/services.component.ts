import { Component,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent } from 'ngx-lottie';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,LottieComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {

lottieOptions: AnimationOptions = {
  path: 'assets/animations/dev-laptop.json',
  autoplay: true,
  loop: true
};

ngAfterViewInit(): void {
  // Currently no logic needed, but required by interface
}

  services = [
    {
      title: 'Web Development',
      icon: '💻',
      description: 'Modern, scalable, responsive apps built with Angular, React, and more.'
    },
    {
      title: 'Cloud Integration',
      icon: '☁️',
      description: 'Leverage AWS, Azure, or GCP to deploy and secure your services.'
    },
    {
      title: 'Mobile Applications',
      icon: '📱',
      description: 'Cross-platform solutions built for performance and user experience.'
    }
  ];
}
