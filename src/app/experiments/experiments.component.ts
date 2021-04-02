import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiments",
  templateUrl: "./experiments.component.html",
  styleUrls: ["./experiments.component.css"],
})
export class ExperimentsComponent implements OnInit {
  experiments: object[] = [
    { name: "Mars soil sample" },
    { name: "Plant growth in habitat" },
    { name: "Human bone density" },
  ];
  existingExperiment: boolean = false;
  experimentBeingEdited: object = null;

  constructor() {}

  ngOnInit() {}

  checkIfExistingExperiment(newExperiment: string) {
    for (let i = 0; i < this.experiments.length; i++) {
      let experiment = this.experiments[i]["name"];
      if (experiment === newExperiment || newExperiment === "") {
        return true;
      }
    }
  }

  add(newExperiment: string) {
    if (!this.checkIfExistingExperiment(newExperiment)) {
      this.experiments.push({ name: newExperiment });
    } else {
      alert("You must add a new experiment");
    }
  }

  remove(experiment: object) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  editExperiment(experiment: object) {
    this.experimentBeingEdited = experiment;
  }

  save(newExperiment: string, experiment: object) {
    if (!this.checkIfExistingExperiment(newExperiment)) {
      experiment["name"] = newExperiment;
      this.experimentBeingEdited = null;
    }
  }
}
