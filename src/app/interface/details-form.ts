import { FormControl, FormGroup } from '@angular/forms';

export type DetailsForm = FormGroup<{
  unitNumber: FormControl<string>;
  type: FormControl<string>;
  amount: FormControl<string | undefined>;
  isUsingModelEmissionFactor: FormControl<boolean | undefined>;
  emissionFactor: FormControl<number>;
  otherEmissionFactor: FormControl<string | undefined>;
  kgCO2Footprint: FormControl<number>;
}>;