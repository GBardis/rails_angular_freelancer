import {Component} from "@angular/core";
import {Document} from './document';
@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "DocumentDashboard"
  documents: Document[] = [
    {
      title: "My First doc",
      description: "hello doc",
      file_url: "http://google.com",
      update_at: '11/06/2013',
      image_url: "http://google.com"
    },
    {
      title: "My Second doc",
      description: "hello doc",
      file_url: "http://google.com",
      update_at: '11/06/2013',
      image_url: "http://google.com"
    },
    {
      title: "My Third doc",
      description: "hello doc",
      file_url: "http://google.com",
      update_at: '11/06/2013',
      image_url: "http://google.com"
    }
  ]
}
