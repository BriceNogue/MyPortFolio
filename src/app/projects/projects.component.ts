import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
    { id:0, name:"Mojio-Auto", image:"https://img.freepik.com/vecteurs-libre/cute-valentine-s-day-birds-couple_52683-55135.jpg?size=338&ext=jpg", language:"Js", framework:"Angular", description:"Mojio-Auto Prod"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
