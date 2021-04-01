import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = [
    "Habitat dome",
    "Drones",
    "Food Containers",
    "Oxygen tanks",
  ];

  itemBeingEdited: string = null;

  constructor() {}

  ngOnInit() {}

  addEquipment(item: string) {
    let isNewItem: boolean = false;
    for (let i = 0; i < this.equipment.length; i++) {
      let equipmentItem = this.equipment[i];
      if (item === equipmentItem) {
        alert(`Enter a valid item`);
        isNewItem = false;
      } else {
        isNewItem = true;
      }
    }
    if (isNewItem) {
      this.equipment.push(item);
    }
  }
  removeEquipment(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }
  editEquipment(item: string) {
    this.itemBeingEdited = item;
  }
  save(name: string, item: string) {
    item = name;
    this.itemBeingEdited = null;
  }
}
