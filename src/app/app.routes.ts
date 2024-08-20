import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { LobbyComponent } from './modules/lobbies/lobby/lobby.component';
import { LobbyDetailsComponent } from './modules/lobbies/lobby-details/lobby-details.component';
import { GameCreateComponent } from './modules/lobbies/game-create/game-create.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { RulesComponent } from './modules/info/rules/rules.component';
import { DirectoryComponent } from './modules/info/directory/directory.component';
import { GameComponent } from './modules/game/game.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lobbies', component: LobbyComponent },
  { path: 'lobbies/:id', component: LobbyDetailsComponent },
  { path: 'lobbies/create', component: GameCreateComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'info/rules', component: RulesComponent },
  { path: 'info/directory', component: DirectoryComponent },
  { path: 'game/:id', component: GameComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
