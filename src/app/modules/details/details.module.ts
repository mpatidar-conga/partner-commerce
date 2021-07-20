import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApttusModule } from '@congacommerce/core';
import { PricingModule } from '@congacommerce/ecommerce';
import {
  BreadcrumbModule,
  IconModule,
  InputDateModule,
  PriceModule,
  PromotionModule,
  ConfigurationSummaryModule
} from '@congacommerce/elements';

import { DetailsLayoutComponent } from './layout/details-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { InputFieldModule } from '@congacommerce/elements';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddressModule } from '@congacommerce/elements';
import { DetailSectionComponent } from './detail-section/detail-section.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ComponentModule } from '../../components/component.module';

/**
 * @ignore
 */
@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    BreadcrumbModule,
    ApttusModule,
    IconModule,
    InputDateModule,
    PriceModule,
    PromotionModule,
    PricingModule,
    TranslateModule.forChild(),
    ConfigurationSummaryModule,
    FormsModule,
    InputFieldModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AddressModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [DetailsLayoutComponent, DetailSectionComponent],
  exports: [DetailsLayoutComponent, DetailSectionComponent]
})
export class DetailsModule { }
