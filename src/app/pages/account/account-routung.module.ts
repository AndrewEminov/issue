import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LoginComponent } from './login.component';
// import { VerifyEmailComponent } from './verify-email.component';
// import { ForgotPasswordComponent } from './forgot-password.component';
// import { ResetPasswordComponent } from './reset-password.component';

import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            //{ path: 'login', component: LoginComponent },
            // { path: 'verify-email', component: VerifyEmailComponent },
            // { path: 'forgot-password', component: ForgotPasswordComponent },
            // { path: 'reset-password', component: ResetPasswordComponent }

            { path: 'register', component: RegisterComponent },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AccountRoutingModule { }