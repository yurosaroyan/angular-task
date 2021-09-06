import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'new-todo', component: TodosComponent },
  { path: 'work', component: WorkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
