import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

  addForm: FormGroup; // form group instance
  form = this.fb.group({
    title: ['New Project Name'],
    tasks: this.fb.group({
        title: ['Task title XX'],
        content: ['What is this about'],
        subtasks: this.fb.array([this.fb.group({
          name: []
        })]),
        points: ['5'],
        hints: ['No hints']
    })
});

  constructor(private fb: FormBuilder) {}
      ngOnInit() {
          //    *** this is code for adding invoice details ***

      }

      onSubmit() {
        console.log(this.form);
    }

    initTask() {
        return this.fb.group({
            subtask: ['', Validators.required]
        });
    }

    get tasksControl () {
        return this.form.get('tasks') as FormGroup;
    }

    get subtaskControl () {
        return this.tasksControl.get('subtasks') as FormArray;
    }

    addLink() {
        this.subtaskControl.push(this.initTask());
    }
    removeLink(i: number) {
        this.subtaskControl.removeAt(i);
    }
}
