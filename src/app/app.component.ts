import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng-Bootstrap';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBRS0zuGhpYcpO4xE6KIY0GKFDXcuSiilg",
      authDomain: "xcourse-project.firebaseapp.com"
    });
  }

}
