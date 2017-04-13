import {Component} from "@angular/core";
import {Document} from './document';
@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['ducuments.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "DocumentDashboard"
  documents: Document[] = [
    {
      title: "My First doc",
      description: "hello doc",
      file_url: "http://google.com",
      update_at: '11/06/2013',
      image_url: "https://www.spiderg.com/wp-content/uploads/2016/11/1-11.jpg"
    },
    {
      title: "My Second doc",
      description: "hello doc",
      file_url: "http://google.com",
      update_at: '11/06/2013',
      image_url: "http://www.labourbeat.org/wp-content/uploads/2016/09/Freelancer-Fair-couple.jpg"
    },
    {
      title: "My Third doc",
      description: "hello doc",
      file_url: "http://google.com",
      update_at: '11/06/2013',
      image_url: "https://www.policygenius.com/blog/library/uploads/2015/07/Freelancer-Insurance-Guide-Featured.png"
    }
  ]
}
