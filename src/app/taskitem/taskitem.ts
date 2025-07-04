import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskitem.html',
  styleUrls: ['./taskitem.css']
})
export class TaskItemComponent {
  @Input() task: { name: string; done: boolean } = { name: '', done: false };
  @Output() delete = new EventEmitter<void>();
  @Output() markDone = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }

  onMarkDone() {
    this.markDone.emit();
  }
}
