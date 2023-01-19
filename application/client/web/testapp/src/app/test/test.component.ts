import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {
    test2itemArray: any = [];
    public test:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        test2: '',
        test3: '',
    }

    constructor (
        private testService: TestService,
    ) { }

    ngOnInit() {
        this.test.created_by = sessionStorage.getItem('email') || ''; 
    }
    test2GpGetAllValues() {
        this.testService.test2GpGetAllValues().subscribe((data:any) => {
            this.test2itemArray = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    test3GpGetAllValues() {
        this.testService.test3GpGetAllValues().subscribe((data:any) => {
            
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.testService.GpCreate(this.test).subscribe((data:any) => {
            this.test.name = ''
 	 	this.test.test2 = ''
 	 	this.test.test3 = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}