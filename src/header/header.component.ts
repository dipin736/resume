import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';  
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, CommonModule, GoogleMapsModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add this line

})
export class HeaderComponent implements OnInit {
  name = 'Dipin Karunakaran';
  title = 'Full Stack Developer';
  profilePicture = 'dipin.jpg';
  contactEmail = 'dipinkarunakaran6@gmail.com';
  contactPhone = '+919995355761';
  location = 'Kasaragod, Kerala';
  linkedin = 'https://linkedin.com/in/dipin-karunakaran-95221b232';
  github = 'https://github.com/dipin736';

  latitude: number = 12.5146;  
  longitude: number = 75.0797; 
  zoom: number = 12;

  ngOnInit(): void {
    const response = {
      "ip": "134.201.250.155",
      "city": "Kasaragod",
      "region_name": "Kerala",
      "country_name": "India",
      "latitude": 12.5146,
      "longitude": 75.0797
    };

    console.log('API Response:', response);

    this.latitude = response.latitude; // Set latitude from static response
    this.longitude = response.longitude; // Set longitude from static response
    this.location = `${response.city}, ${response.region_name}, ${response.country_name}`;
  }
}
