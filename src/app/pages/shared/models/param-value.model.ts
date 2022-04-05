import { Model } from './model';

export class ParamValue extends Model {
    public key!: string;
    public value!: string | number | boolean;

    constructor(objeto?: any) {
        super(objeto);
    }
}
