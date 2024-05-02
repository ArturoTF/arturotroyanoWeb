import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WikiNexusBotComponent } from './wiki-nexus-bot/wiki-nexus-bot.component';

export const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'wikiNexus', component: WikiNexusBotComponent},
    { path: '', redirectTo: 'main', pathMatch: 'full' }
];
