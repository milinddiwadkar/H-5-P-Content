import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./content/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./content/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./content/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'advent-calendar',
    loadChildren: () => import('./content/advent-calendar/advent-calendar.module').then( m => m.AdventCalendarPageModule)
  },
  {
    path: 'agamotto',
    loadChildren: () => import('./content/agamotto/agamotto.module').then(m => m.AgamottoPageModule)
  },
  {
    path: 'ar-scavenger',
    loadChildren: () => import('./content/ar-scavenger/ar-scavenger.module').then( m => m.ArScavengerPageModule)
  },
  {
    path: 'arithmetic-quiz',
    loadChildren: () => import('./content/arithmetic-quiz/arithmetic-quiz.module').then( m => m.ArithmeticQuizPageModule)
  },
  {
    path: 'audio-recorder',
    loadChildren: () => import('./content/audio-recorder/audio-recorder.module').then( m => m.AudioRecorderPageModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./content/chart/chart.module').then( m => m.ChartPageModule)
  },
  {
    path: 'collage',
    loadChildren: () => import('./content/collage/collage.module').then( m => m.CollagePageModule)
  },
  {
    path: 'column',
    loadChildren: () => import('./content/column/column.module').then( m => m.ColumnPageModule)
  },
  {
    path: 'cornell-notes',
    loadChildren: () => import('./content/cornell-notes/cornell-notes.module').then( m => m.CornellNotesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
