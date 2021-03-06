import { Component, Input } from '@angular/core';
import { List } from '../models.interface';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
@Input() list: List;
editing=false;
taskText: string='';
oldName: string;
  constructor(private dataService: DataManagerService) { }

addTask(){
  if(this.taskText !== ''){
  this.dataService.addNewTask(this.taskText,this.list);
  this.taskText='';
  }
}

 delete(){
  if(confirm('¿Quieres borrar la lista '+this.list.name+ '? \nEsto también borrará TODAS LAS TAREAS.')){
    this.dataService.deleteList(this.list.listId);
  }
 }

 editName(){
  this.oldName = this.list.name;
   this.dataService.editListName(this.list);
   this.editing=false;
 }
 edit(){
  
   this.oldName = this.list.name;
   this.editing=true;
 }

cancelEdit(){
  console.log('cancel edit'+this.oldName);
this.list.name = this.oldName;
console.log(this.oldName);
this.editing = false;
} 
}
