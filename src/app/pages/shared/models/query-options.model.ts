import { HttpParams } from '@angular/common/http';

import _ from 'lodash';
import { ParamValue } from './param-value.model';

export class QueryOptions {
    public searchParams: Array<ParamValue>;

    constructor(searchParams: Array<ParamValue>) {
        this.searchParams = searchParams;
    }

    public getUrlSearchParams(): HttpParams {
        let params = new HttpParams();

        for (const param of this.searchParams) {
            if (!_.isEmpty(param)) {
                params = params.append(param.key, param.value);
            }
        }

        return params;
    }
}
