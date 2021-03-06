import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
import { ExibirEmailComponent } from './exibir-email/exibir-email.component';


@NgModule({
    declarations: [HeaderComponent,CmailFormGroupComponent,
        CmailFormFieldDirective,
        CmailListItemComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent,CmailFormGroupComponent,
        CmailFormFieldDirective,CmailListItemComponent]
})
export class SharedComponentModule {}