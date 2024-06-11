import { Component, computed, signal } from '@angular/core';
// import { CommonModule } from '@angular/common'; //tmp
// import { RouterOutlet } from '@angular/router'; //tmp

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //imports: [CommonModule, RouterOutlet],//tmp


})
export class AppComponent {
  title = 'PinotApp';
  grape = "assets/img/grape.png";

  signedIn = true;
  User = "";

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'language',
      label: 'ArcGIS',
      route: 'ArcGis',
    },
    {
      icon: 'dataset',
      label: 'Data and Download',
      route: 'DataSet',
    },
    {
      icon: 'photo_library',
      label: 'Information',
      route: 'Info',
    }
  ]);

  collapsed = signal(true);
  sidenavWidth = computed(() => this.collapsed() ? '65px': '250px')
  profilePicSize = computed(()=> this.collapsed()? '30': '100')

  ngOnInit () {
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember"){
      this.signedIn = false;
    }
    else{
      this.signedIn = true;
      this.User = localStorage.getItem('session')?.substring(0,4)+".";
    }
  }
}
