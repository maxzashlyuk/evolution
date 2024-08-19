import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { InfoComponent } from './pages/info/info.component';
import { GameComponent } from './pages/game/game.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'game', component: GameComponent }
];
