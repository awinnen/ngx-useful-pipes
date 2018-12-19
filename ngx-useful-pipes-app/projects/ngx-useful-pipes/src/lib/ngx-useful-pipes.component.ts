import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'awlib-ngx-useful-pipes',
  template: `
    <table>
      <tr>
        <th>SliceArrayPipe</th>
        <td>
          <span *ngFor="let num of ([1, 2, 3, 4, 5, 6, 7, 8, 9] | awlibArraySlice:0:5)">{{num}} </span>
        </td>
      </tr>
      <tr>
        <th>SplitStringPipe</th>
        <td>
          <span *ngFor="let part of ('Hello I am a string. I want to be splitted' | awlibStringSplit:'.')">{{part}}</span>
        </td>
      </tr>
      <tr>
        <th>TrimStringPipe</th>
        <td>
            <span *ngFor="let part of ('Hello I am a string. I want to be splitted' | awlibStringSplit:'.')">{{part | awlibStringTrim}}</span>
        </td>
      </tr>
    </table>
  `,
  styles: [`
    table {

    }

    table th, table td {

    }

    table th {

    }

    table td {

    }
  `]
})
export class NgxUsefulPipesComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
