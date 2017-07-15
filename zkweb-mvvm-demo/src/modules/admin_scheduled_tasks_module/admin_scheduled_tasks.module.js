var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { MessagesModule } from 'primeng/components/messages/messages';
import { BlockUIModule } from 'primeng/components/blockui/blockui';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { BaseModule } from '../base_module/base.module';
import { GeneratedModule } from '../generated_module/generated.module';
import { AuthModule } from '../auth_module/auth.module';
import { AdminBaseModule } from '../admin_base_module/admin_base.module';
import { AuthGuard } from '../auth_module/auth/auth-guard';
import { UserTypes } from '../generated_module/privileges/user-types';
import { Privileges } from '../generated_module/privileges/privileges';
import { AdminScheduledTaskListComponent } from './components/admin-scheduled-task-list.component';
import { AdminScheduledTaskLogListComponent } from './components/admin-scheduled-task-log-list.component';
var routes = [
    {
        path: '',
        component: AdminScheduledTaskListComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
        data: {
            auth: {
                requireUserType: UserTypes.IAmAdmin,
                requirePrivileges: [Privileges.ScheduledTask_View]
            }
        }
    },
    {
        path: 'log',
        component: AdminScheduledTaskLogListComponent,
        canActivate: [AuthGuard],
        data: {
            auth: {
                requireUserType: UserTypes.IAmAdmin,
                requirePrivileges: [Privileges.ScheduledTask_View]
            }
        }
    }
];
var AdminScheduledTasksModule = (function () {
    function AdminScheduledTasksModule() {
    }
    return AdminScheduledTasksModule;
}());
AdminScheduledTasksModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            InputTextModule,
            PanelModule,
            ButtonModule,
            MessagesModule,
            BlockUIModule,
            DataTableModule,
            DropdownModule,
            MultiSelectModule,
            DialogModule,
            ConfirmDialogModule,
            BaseModule,
            GeneratedModule,
            AuthModule,
            AdminBaseModule,
            RouterModule.forChild(routes)
        ],
        declarations: [
            AdminScheduledTaskListComponent,
            AdminScheduledTaskLogListComponent
        ],
        exports: [
            RouterModule
        ]
    })
], AdminScheduledTasksModule);
export { AdminScheduledTasksModule };
//# sourceMappingURL=admin_scheduled_tasks.module.js.map