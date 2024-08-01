import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NoteComponent } from './components/note/note.component';
import { AboutComponent } from './components/about/about.component';
import { AboutSponsersComponent } from './components/about-sponsers/about-sponsers.component';

export const routes: Routes = [
    {
        path:'notes',title:'Notes',component:NotesComponent
    },
    {
        path:'notes/:id',title:'Notes',component:NoteComponent
    },
    {
        path:'about',title:'About',component:AboutComponent, children:[
            {
                path:"projects",
                title:'About projects',
                component:AboutComponent
            },
            {
                path:"sponsers",
                title:'About sponsers',
                component:AboutSponsersComponent
            },

        ]
    },
    // {
    //     path:'',redirectTo:"/notes",pathMatch:'full'
    // }
    {
        path:"**",
        title:"Not Found",
        component:PagenotfoundComponent
    }
];
