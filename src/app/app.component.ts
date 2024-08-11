import { Component, computed, signal } from '@angular/core';
export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
      icon: 'hub',
      label: 'Predicting model',
      route: 'ml',
    },
    {
      icon: 'language',
      label: 'ArcGIS',
      route: 'ArcGis',
    },
    {
      icon: 'dataset',
      label: 'Data and download',
      route: 'DataSet',
    },
    {
      icon: 'photo_library',
      label: 'Information',
      route: 'Info',
    },
    {
      icon: 'assignment_ind',
      label: 'Sign in',
      route: 'login',
    }
  ]);

  collapsed = signal(true);
  sidenavWidth = computed(() => this.collapsed() ? '65px': '250px')
  profilePicSize = computed(()=> this.collapsed()? '30': '100')

  loaded = false;
  loading() {
    setTimeout( () => this.loaded = true, 15000 );
    //setTimeout( () => this.onSubmit(), 60000 );

  }

  ngOnInit () {
    this.loading();
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember"){
      this.signedIn = false;
    }
    else{
      this.signedIn = true;
      this.User = localStorage.getItem('session')?.substring(0,4)+".";
    }
  }
}
