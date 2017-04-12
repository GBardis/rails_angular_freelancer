import {Component} from '@angular/core';
import {Proposal} from "./proposal";

@Component({
  moduleId: module.id,
  selector: "proposal-list",
  templateUrl: "proposal-list.component.html"
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(
    15, 'acd company', "http://portofolio.georgebardis.com", "Ruby on rails", 150, 120, 15, "georgebardis@gmail.com")
  proposalSecond: Proposal = new Proposal(
    15, 'fbdf company', "http://portofolio.georgebardis.com", "Ruby on rails", 300, 100, 30, "georgebardis@gmail.com")
  proposalThird: Proposal = new Proposal(
    15, 'adfbnngt company', "http://portofolio.georgebardis.com", "Ruby on rails", 200, 200, 10, "georgebardis@gmail.com")

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalSecond,
    this.proposalThird
  ]
}
