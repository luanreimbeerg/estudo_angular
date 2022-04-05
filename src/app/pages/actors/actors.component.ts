import { ActorsService } from './../shared/services/actors.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mixin } from '../shared/mixins/mixin';
import { FormErrorMixin } from '../shared/mixins/form-error.mixin';
import { SearchParamsMixin } from '../shared/mixins/search-params.mixin';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
})
export class ActorsComponent implements OnInit {
  public hasRoute = false;
  public form!: FormGroup;
  public displayedColumns = [];
  public dataSource = new MatTableDataSource();
  public columns: Array<{ label: string; value: string; active: boolean }> = [
    { label: 'Nome Personagem', value: 'name', active: true },
    { label: 'Altura', value: 'height', active: true },
  ];

  constructor(private service: ActorsService, private fb: FormBuilder) {}

  ngOnInit(): void {

    this.columns.map((item) => {
      if (item.active) {
        this.displayedColumns.push(item.value);
      }
    });

    this.form = this.fb.group({
      name: [''],
      ip: [''],
      user: [''],
      path: [''],
    });

    Mixin.applyMixins(ActorsComponent, [FormErrorMixin, SearchParamsMixin]);

    this.getPeople();
  }

  getPeople() {
    this.service.getActors().subscribe({
      next: (ev) => this.sucessConsult(ev),
      error: (er) => this.errorConsult(er),
    });
  }

  sucessConsult(ev) {

    this.dataSource.data = ev.results;
    console.log(ev.results)
  }
  errorConsult(er) {

  }
}
