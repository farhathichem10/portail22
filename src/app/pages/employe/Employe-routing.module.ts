import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardauthService } from 'src/app/guard/guardauth.service';
import { CompetancesreelComponent } from './competancesreel/competancesreel.component';
import { ComprequiseComponent } from './comprequise/comprequise.component';
import { EvalcompComponent } from './evalcomp/evalcomp.component';
import { EvaldefinitifComponent } from './evaldefinitif/evaldefinitif.component';
import { EvalempComponent } from './evalemp/evalemp.component';
import { InfopersComponent } from './infopers/infopers.component';
import { InfoprofComponent } from './infoprof/infoprof.component';
import { InfosocComponent } from './infosoc/infosoc.component';
import { ObjagentComponent } from './objagent/objagent.component';



const routes: Routes = [
    {
        path: 'infopers',
        component: InfopersComponent,canActivate:[GuardauthService]
    },
    {
        path: 'evalcomp',
        component: EvalcompComponent,canActivate:[GuardauthService]
    },
    {
        path: 'infoprof',
        component: InfoprofComponent,canActivate:[GuardauthService]
    },
    {
        path: 'infosoc',
        component: InfosocComponent,canActivate:[GuardauthService]
    },
    {
        path: 'objagent',
        component: ObjagentComponent,canActivate:[GuardauthService]
    },
    {
        path: 'evalemp',
        component: EvalempComponent,canActivate:[GuardauthService]
    },
    {
        path: 'compreel',
        component: CompetancesreelComponent,canActivate:[GuardauthService]
    },
    {
        path: 'comprequise',
        component: ComprequiseComponent,canActivate:[GuardauthService]
    },
    {
        path: 'evaldefinitif',
        component: EvaldefinitifComponent,canActivate:[GuardauthService]
    },
    
    

  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeRoutingModule {}
