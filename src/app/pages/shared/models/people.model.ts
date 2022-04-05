import { Model } from './model';

export class actorsResponse extends Model {
  public count!: number;
  public next!: string;
  public previous!: any;
  public results!: Array<Results>

  constructor(objeto?: any) {
    super(objeto);
  }
}

export class Results extends Model {
  name!: number;
  height!: number;
  mass!: string;
  hair_color!: string;
  skin_color!: string;
  eye_color!: boolean;
  birth_year!: string;
  gender!: string;
  homeworld!: boolean;

  constructor(objeto?: any) {
      super(objeto);
  }
}
